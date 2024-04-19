"use client"
import React, { useState } from 'react'
import Blog from '@/app/BlogInterface';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

const EditBlogForm = ({ _id, title, body }: Blog) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newBody, setNewBody] = useState(body);
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/blogs/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newTitle, newBody })
            });
            if (res.ok) {
                toast('Blog Updated');
            }

            router.push("/");
            router.refresh();

        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="border p-4 my-6 text-center max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">Add Blog</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className="border border-slate-500 p-2 text-black"
                    type="text"
                    placeholder="Blog Title" />
                <textarea
                    className="border border-slate-500 p-2 text-black resize-none overflow-auto h-32"
                    name="text"
                    placeholder="Blog Description"
                    onChange={(e) => setNewBody(e.target.value)}
                    value={newBody} />
                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                    Edit Blog
                </button>
            </form>
        </div>
    )
}

export default EditBlogForm;