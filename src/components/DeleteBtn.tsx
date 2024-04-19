"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";

const DeleteBtn = ({ id }: { id: string }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const confirmed = confirm('Are you sure you want to delete this blog?');

            if (confirmed) {
                const res = await fetch(`http://localhost:3000/api/blogs/?id=${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (res.ok) {
                    toast('Blog Deleted');
                    router.refresh();
                }
            }

        }
        catch (error) {
            toast.error('Failed to delete blog');
        }
    }
    return (
        <button className="text-red-400" onClick={handleDelete}>
            <MdDelete size={24} />
        </button>
    );
}

export default DeleteBtn