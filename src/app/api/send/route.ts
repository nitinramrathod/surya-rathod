import { Resend } from "resend";
import { NextResponse } from "next/server";
import { GenerateContactMailTemplate } from "@/components/email-templates/contact-us";

const resend = new Resend(process.env.RESEND_API_KEY);
const mailTo:string = process.env.MAIL_TO || "";
const mailFrom:string = process.env.MAIL_FROM || "";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log({
      body, mailFrom, mailTo
    })

    const template = GenerateContactMailTemplate(body)

    console.log(template)

    const { data, error } = await resend.emails.send({
      from: mailFrom,
      to: mailTo,
      subject: "New Enquiry",
      html: template,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", logs: error },
      { status: 500 }
    );
  }
}