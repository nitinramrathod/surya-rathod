import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rathod173ram@gmail.com",
      subject: "New Enquiry",
      html: `
        <h2>New Enquiry</h2>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}