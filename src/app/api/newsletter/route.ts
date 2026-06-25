import { NextResponse } from "next/server";
import {
  NewsletterConfigError,
  NewsletterProviderError,
  upsertNewsletterContact,
} from "@/lib/newsletter";
import { validateNewsletterSignup } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const validation = validateNewsletterSignup(payload);

  if (!validation.success) {
    return NextResponse.json(
      {
        ok: false,
        message: validation.message,
        fieldErrors: validation.fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    await upsertNewsletterContact(validation.data);

    return NextResponse.json({
      ok: true,
      message: "Newsletter subscription confirmed.",
    });
  } catch (error) {
    if (error instanceof NewsletterConfigError) {
      console.error("Newsletter service is not configured.", { message: error.message });

      return NextResponse.json(
        { ok: false, message: "Newsletter service is not configured." },
        { status: 500 },
      );
    }

    if (error instanceof NewsletterProviderError) {
      console.error("Newsletter provider request failed.", {
        status: error.status,
        code: error.code,
        message: error.message,
      });

      return NextResponse.json(
        { ok: false, message: "Newsletter subscription failed." },
        { status: 502 },
      );
    }

    console.error("Unexpected newsletter signup error.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      { ok: false, message: "Newsletter subscription failed." },
      { status: 500 },
    );
  }
}

