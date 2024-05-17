import React from "react";
import "./Blogs&News.css";

import person from "../assets/Medify_assests/author.jpg.png";

export default function Blogs(){

    const displayBlogCard = () => {
        return (
            <div className='blogCard'>
                <div className='detoxImage'></div>
                <div className='blogTexts'>
                    <div className='blogDate'>
                        <span>Medical</span>
                        <span>March 31, 2022</span>
                    </div>
                    <div className='blogTitle'><p>6 Tips To Protect Your Mental Health When You’re Sick</p></div>
                    <div className='author'>
                        <img src={person} className='authorImage' alt='author'/>
                        <span className='authorName'>Rebecca Lee</span>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className='Blogs'>
            <div className='BlogsBody commonContainer'>
                <p>blog & news</p>
                <span className='blogSuperText'></span>
                <h3>Read Our Latest News</h3> 
                <div className='blogsArray'>
                    {displayBlogCard()}
                    {displayBlogCard()}
                    {displayBlogCard()}
                </div>
            </div>
        </div>
    );
}