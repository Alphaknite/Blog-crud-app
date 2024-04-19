import React from 'react'
import DeleteBtn from './DeleteBtn';
import { MdEdit } from "react-icons/md";
import Link from 'next/link';
import Blog from '@/app/BlogInterface';

const fetchBlogs = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/blogs', { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}


const BlogList = async () => {
    const blogs = await fetchBlogs();

    return (
        <>
            {blogs.map((blog: Blog) => (
                <div key={blog._id} className="border p-4 my-6 text-center max-w-3xl mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
                        <p className="text-gray-700 mb-4">{blog.body}</p>
                        <p className="text-gray-500 text-sm">{blog.updatedAt}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-3">
                        <DeleteBtn id={blog._id}/>
                        <Link href={`/editBlog/${blog._id}`} className="text-blue-400">
                            <MdEdit size={24} />
                        </Link>
                    </div>
                </div>
            ))}


        </>
    );
}

export default BlogList;