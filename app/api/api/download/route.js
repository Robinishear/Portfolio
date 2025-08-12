import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": 'attachment; filename="resume.pdf"',
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "File download failed" }, { status: 500 });
  }
}
