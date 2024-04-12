import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

//Method: PUT
//Update user information
export async function PUT(req: any, {params}: any) {
    const {id} = params;
    const {newName:name, newEmail:email, newPassword:password } = await req.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, {name, email, password})
    return NextResponse.json({message: "User updated"}, {status: 200})
}