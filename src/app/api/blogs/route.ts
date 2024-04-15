import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

//Method: POST
//Create a new blog
export async function POST(req: any) {
    const { title, body } = await req.json();
    await connectMongoDB();
    await Blog.create({ title, body});
    return NextResponse.json({ message: "Blog created" }, { status: 200 })
}

//Method: GET
//Get all users
export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 })
}

//Method: DELETE
//Delete a user
export async function DELETE(req: any) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 })
}

