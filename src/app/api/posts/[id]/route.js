import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/utils/db";

export const GET = async (request , {params}) => {
    const {id} = params
  try {
    await connect();

    const post= await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(process.env.MONGO);
    return new NextResponse("Database error", { status: 500 });
  }
};
