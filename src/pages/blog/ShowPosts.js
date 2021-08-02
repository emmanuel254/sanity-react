import React, { useEffect, useState } from 'react'
import sanityClient from "../../client";
import AllPosts from "../../components/posts/AllPosts";
import Home from "../Home";
import Sidebar from "../../components/partials/Sidebar";

const ShowPosts = () => {

    const [allPosts, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset-> {
                        _id,
                        url
                    }
                }
            }`
        )
            .then((data) => setAllPosts(data))
            .catch(console.error);
    }, [])

    return (
        <div className="mx-auto p-12">
            <div className="flex flex-wrap w-full mt-10">
                <div className="md:w-1/4"><h2>TEst</h2></div>
                <div className="w-full md:w-2/4 bg-white rounded-md px-5">
                    <h1 className="text-5xl flex justify-center">Blog Posts</h1>
                    <h3 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog posts page!</h3>

                    <AllPosts posts={allPosts}/>

                </div>
                <div className="hidden xl:text-sm xl:block flex-none w-1/4">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}
export default ShowPosts