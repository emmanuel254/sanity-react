import React from 'react';
import {Link} from "react-router-dom";
import Emoji from "../components/partials/Emoji";
import bg_2 from '../images/bg_2.jpg'

const Home = () => {
    return (
        <>
            <div className="mx-auto bg-white">
                <div className="relative w-full mt-10">
                    <div className="flex flex-wrap grid grid-flow-row auto-rows-max md:auto-rows-min h-screen home-intro p-12 text-center">
                        <div className="t text-6xl font-medium p-4 m-5">Hi <Emoji symbol={"👋"} label={"hi"}/>, I'm Emmanuel Chesire</div>
                        <div className="t text-3xl">Full Stack Developer</div>
                        <div><Link to={'/blog'}>Visit Blog</Link></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;