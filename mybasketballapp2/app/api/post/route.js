import client from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

// URL: http://localhost:3000/api/dbuser

export const POST = async (req) => {
    try {
        const body = await req.json();
        const { email, password } = body;
        const newDbUser = await client.dbuser.create({
            data: {
                email,
                password
            },
        });
        return NextResponse.json(newDbUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error creating dbuser", error: error.message },
            { status: 500 }
        );
    }
};

export const GET = async () => {
    try {
        const dbUsers = await client.dbuser.findMany();
        return NextResponse.json(dbUsers);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error getting dbusers", error: error.message },
            { status: 500 }
        );
    }
}

export const FETCH = async () => {
    return await GET();
}
