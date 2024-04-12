import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

//Method: POST
//Create a new user
export async function POST(req: any) {
    const {name, email, password} = await req.json();
    await connectMongoDB();
    await User.create({name, email, password});
    return NextResponse.json({message: "User created"}, {status: 200})
}

//Method: GET
//Get all users
export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json(users, {status: 200})
}

//Method: DELETE
//Delete a user
export async function DELETE(req: any) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted"}, {status: 200})
}

