"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-hot-toast';

const addBlog = () => {
    const router = useRouter();
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!title || !body) {
            toast.error('Title and Description are required');
            return;
        }


        try {
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, body })
            });

            if (res.ok) {
                router.push('/');
                router.refresh();
                toast('Blog Added, Congratulations!', { icon: '👏' });
            }
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="border p-4 my-6 text-center max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">Add Blog</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border border-slate-500 p-2 text-black"
                    type="text"
                    placeholder="Blog Title" />
                <textarea
                    className="border border-slate-500 p-2 text-black resize-none overflow-auto h-32"
                    name="text"
                    placeholder="Blog Description"
                    onChange={(e) => setBody(e.target.value)}
                    value={body} />
                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                    Add Blog
                </button>
            </form>
        </div>
    )
}

export default addBlog