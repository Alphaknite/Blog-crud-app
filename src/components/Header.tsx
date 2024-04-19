import Link from "next/link";

const Header = () => {
return (
    <div className="bg-black p-4 flex justify-between">
        <Link href="/" className="text-3xl font-bold">Blog App</Link>
        <Link href="/addBlog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Blog
        </Link>
    </div>
);
}

export default Header;