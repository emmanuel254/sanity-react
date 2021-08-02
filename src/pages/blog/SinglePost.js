import React, { useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import sanityClient from '../../client';
import OnePost from "../../components/posts/OnePost";
import AllPosts from "../../components/posts/AllPosts";
import Sidebar from "../../components/partials/Sidebar";
import StickyFooter from "../../components/partials/StickyFooter";

const SinglePost = () => {

    const [ postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $slug]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                          _id,
                          url
                        }
                    },
                    body,
                    "name": author->name,
                    "authorImage": author->image
                }`,
                { slug }
            )
            .then((data) => setPostData(data[0]))
            .catch(console.error)
    }, [slug])


    if(!postData) return <div>Loading ...</div>

    return (
        <>
            <div className="mx-auto p-6 md:p-12">
                <div className="flex flex-wrap w-full mt-10">
                    <div className="w-full md:w-3/4 bg-white rounded-md">
                        <div className="shadow-lg mx-auto">
                            <OnePost postData={postData}/>
                        </div>
                    </div>
                    <div className="hidden xl:text-sm xl:block flex-none w-1/4">
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <StickyFooter/>
        </>
    )
}

export default SinglePost