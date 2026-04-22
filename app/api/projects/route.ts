import { NextResponse } from "next/server";
import { PROJECTS } from "@/src/data/site-data";

export async function GET() {
  return NextResponse.json(PROJECTS);
}
