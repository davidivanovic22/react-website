import React from 'react';
import "../styles/components/Blog.scss"
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import Button from "./Button";
const Blog = ({ image, title, subTitle}) => {
    return (
        <div
            className="blog-container"
        >
            <div className="image">
                <img src={image} alt="Blog" />
            </div>
            <div className="content">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="subTitle">
                    <p>{subTitle}</p>
                </div>
                <Button
                    content="Read more"
                    color="inverse"
                    icon={<HiOutlineArrowNarrowRight />}
                />
            </div>
        </div>
    );
};

export default Blog;
