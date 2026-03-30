import { NextResponse } from "next/server";

const FORM_ID = "8689506f-b7b0-4824-bdad-24cbcc0e5e0e";
const BASE_URL = "https://www.betazu.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Basic validation
    if (!body || !body.name || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔥 STEP 1: Fetch schema
    const schemaRes = await fetch(
      `${BASE_URL}/api/sites/form/${FORM_ID}`
    );

    const schemaJson = await schemaRes.json();
    const fields = schemaJson?.schema?.fields || [];

    // 🔥 STEP 2: Create label → field map
    const labelMap = Object.fromEntries(
      fields.map((f: any) => [
        f.label.toLowerCase(),
        f.name,
      ])
    );

    // 🔥 STEP 3: Map payload
    const mappedPayload: any = {};

    Object.entries(body).forEach(([key, value]) => {
      const fieldId = labelMap[key.toLowerCase()];
      if (fieldId) {
        mappedPayload[fieldId] = value;
      }
    });

    // 🔥 STEP 4: Send mapped data
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(
      `${BASE_URL}/api/sites/form/${FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mappedPayload),
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    if (!res.ok) {
      const text = await res.text();
      console.error("Betazu API error:", text);

      return NextResponse.json(
        { success: false, message: "Failed to submit lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
    });

  } catch (error: any) {
    console.error("API Route Error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}