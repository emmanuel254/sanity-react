import React, { useEffect, useState } from "react"
import sanityClient from "../../client.js"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import { useParams } from "react-router-dom";
import Highlight from "react-highlight";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function OnePost({postData}) {

    const serializers = {
        types: {
            code: ({node = {}}) => {
                const {code, language} = node;

                if(!code) return null;

                return (
                    <Highlight language={language || 'text'} className="rounded">
                        {code}
                    </Highlight>
                )
            }
        }
    }

    return (
        <>
            <div className="relative">
                <div className="absolute h-full w-full flex items-center justify-center p-8">
                    {/* Title Section */}
                    <div className="bg-white bg-opacity-75 rounded p-12">
                        <h2 className="cursive text-3xl lg:text-6xl mb-4">{postData.title}</h2>
                        <div className="flex justify-center text-gray-800">
                            <img
                                src={urlFor(postData.authorImage).url()}
                                className="w-10 h-10 rounded-full"
                                alt="Author is Kap"
                            />
                            <h4 className="cursive flex items-center pl-2 text-2xl">{postData.name}</h4>
                        </div>
                    </div>
                </div>
                <img
                    className="w-full object-cover rounded-t"
                    src={urlFor(postData.mainImage).url()}
                    alt=""
                    style={{ height: "400px"}}/>
            </div>
            <div className="p-6 md:px-14 prose lg:prose-xl max-w-full">
                <h2 className="text-6xl py-4 font-bold">{postData.title}</h2>

                <div>

                </div>

                <div className="text-xl font-normal text-gray-700">
                    <BlockContent
                        blocks={postData.body}
                        serializers={serializers}
                        projectId={sanityClient.config().projectId}
                        dataset={sanityClient.config().dataset}
                    />
                </div>
            </div>
        </>
    )
}