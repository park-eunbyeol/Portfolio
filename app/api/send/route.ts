import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    // Initialize Resend inside the handler to avoid build-time failures
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, subject, message } = await req.json();

    // Validate the incoming data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해 주세요.' },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend default for unverified domains
      to: ['ap9450150918@gmail.com'],
      subject: `[Portfolio Contact] ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #8b5cf6;">새로운 문의가 도착했습니다!</h2>
          <p><strong>보낸 사람:</strong> ${name} (${email})</p>
          <p><strong>제목:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8b5cf6;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 25px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background-color: #8b5cf6; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">사용자에게 답장하기</a>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">박은별 포트폴리오 웹사이트를 통해 전송된 메일입니다.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: '이메일 전송에 실패했습니다. 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
}
