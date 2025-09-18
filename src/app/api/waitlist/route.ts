import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DB_ID = process.env.NOTION_DB_WAITLIST!;

// 간단한 이메일 유효성 검사
function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const { email, source, referrer, notes } = await req.json();

    // 이메일 유효성 검사
    if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    // 스팸 방지용 허니팟 필드 체크
    const body = await req.json();
    if (body.company) {
      return NextResponse.json({ ok: true }); // 조용히 성공처럼 응답
    }

    // Notion에 행 추가
    const properties: Record<string, unknown> = {
      Name: { title: [{ text: { content: email } }] },
      Email: { email },
    };
    
    if (source) {
      properties.Source = { rich_text: [{ text: { content: String(source) } }] };
    }
    
    if (referrer) {
      properties.Referrer = { url: String(referrer) };
    }
    
    if (notes) {
      properties.Notes = { rich_text: [{ text: { content: String(notes) } }] };
    }
    
    await notion.pages.create({
      parent: { database_id: DB_ID },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      properties: properties as any,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("waitlist error", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
