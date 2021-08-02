import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../client.js'

export default function AllPosts({posts}) {
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts &&
                posts.map((post, index) => (
                    <Link to={"/blog/"+ post.slug.current} key={post.slug.current}>
                    <span
                        className="block h-64 relative rounded shadow leading-snug bg-white
                        border-l-8 border-green-400"
                        key={index}>
                        <img
                            className="w-full h-full rounded-r object-cover absolute"
                            src={post.mainImage.asset.url} alt="" />
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                            <h2>{post.title}</h2>
                        </span>
                    </span>
                    </Link>
                ))}
            </div>

            <div className="-m-12">
                <div className="p-12 w-full flex flex-col items-start">
                    <span
                        className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Programming</span>
                    <h2 className="sm:text-3xl text-2xl font-medium text-gray-900 mt-4 mb-4">Roof
                        party normcore before they sold out, cornhole vape</h2>
                    <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack
                        humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund.
                        Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
                        slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon
                        kickstarter craft beer pork chic.</p>
                    <div
                        className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <a className="text-indigo-500 inline-flex items-center">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                 strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                    </div>
                    <a className="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/104x104"
                             className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                            <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                        </span>
                    </a>
                </div>
                <div className="p-12 w-full flex flex-col items-start">
                    <span
                        className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Programming</span>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof
                        party normcore before they sold out, cornhole vape</h2>
                    <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack
                        humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund.
                        Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
                        slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon
                        kickstarter craft beer pork chic.</p>
                    <div
                        className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <a className="text-indigo-500 inline-flex items-center">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                 strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                    </div>
                    <a className="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/104x104"
                             className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                            <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                        </span>
                    </a>
                </div>
                <div className="p-12 w-full flex flex-col items-start">
                    <span
                        className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Programming</span>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof
                        party normcore before they sold out, cornhole vape</h2>
                    <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack
                        humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund.
                        Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
                        slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon
                        kickstarter craft beer pork chic.</p>
                    <div
                        className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <a className="text-indigo-500 inline-flex items-center">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                 strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                    </div>
                    <a className="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/104x104"
                             className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                            <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                        </span>
                    </a>
                </div>
            </div>

        </div>
    )
}