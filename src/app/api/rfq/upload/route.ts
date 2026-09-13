import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const dir = join(process.cwd(), "public", "uploads");
    await mkdir(dir, { recursive: true });
    const safe = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const fname = `${Date.now()}_${safe}`;
    await writeFile(join(dir, fname), buffer);
    return NextResponse.json({ url: `/uploads/${fname}`, name: fname, size: file.size }, { status: 200 });
  } catch (e) {
    console.error("[RFQ Upload]", e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
