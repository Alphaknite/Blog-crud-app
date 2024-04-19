import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

//Method: PUT
//Update user information
export async function PUT(req: any, { params }: any) {
    const { id } = params;
    const { newTitle: title, newBody: body } = await req.json();
    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, { title, body })
    return NextResponse.json({ message: "Blog updated" }, { status: 200 })
}

export async function GET(req: any, { params }: any) {
    const { id } = params;
    await connectMongoDB();
    const blog = await Blog.findOne({ _id: id });
    return NextResponse.json({ blog }, { status: 200 });
  }