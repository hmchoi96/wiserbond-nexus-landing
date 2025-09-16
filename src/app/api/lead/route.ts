import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const body = await req.json();
    
    // TODO: Supabase/Email/Slack Webhook 등으로 연동
    console.log("Lead received:", {
      type: body.type,
      email: body.email,
      note: body.note,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get('user-agent'),
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')
    });
    
    // 임시 응답 - 실제로는 데이터베이스에 저장하거나 이메일 서비스로 전송
    return NextResponse.json({ 
      success: true, 
      message: "Lead captured successfully",
      data: {
        type: body.type,
        email: body.email,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process lead" },
      { status: 500 }
    );
  }
}
