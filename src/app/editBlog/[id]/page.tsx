import EditBlogForm from "@/components/EditBlogForm";

const getBlogById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};



export default async function EditBlog({ params }: { params: { id: string } }) {
    const { id } = params;
    console.log(id);
    const { blog } = await getBlogById(id);
    const { title, body } = blog;
    return (
        <>
            <EditBlogForm _id={id} title={title} body={body} />
        </>
    )

}