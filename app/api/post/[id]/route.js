
// url: http://localhost:3000/api/posts/2343243243434343
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const post = await client.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            return NextResponse.json({ status: 404 }, { message: "Post not found" })
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error getting post", error })

    }
}

export const PATCH = async (req) => {
    try {
        const body = await req.json();
        const { id, name, team, MPG, PPG, RPG, APG, SPG, BPG } = body;

        if (!id) {
            return NextResponse.json({ status: 400 }, { message: "ID is required for updating player" });
        }

        const updatedPlayer = await client.player.update({
            where: {
                id
            },
            data: {
                name,
                team,
                MPG,
                PPG,
                RPG,
                APG,
                SPG,
                BPG,
            }
        });

        if (!updatedPlayer) {
            return NextResponse.json({ status: 404 }, { message: "Player not found" });
        }

        return NextResponse.json(updatedPlayer);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { status: 500, message: "Error updating player", error: error.message }
        );
    }
};


export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await client.post.delete({
            where: {
                id
            }
        });
        return NextResponse.json({ status: 200 }, { message: "Post deleted" });

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error deleting post", error })
    }
}


