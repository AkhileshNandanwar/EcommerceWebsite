import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../auth/auth";

const Blogs = () => {
    const { blogs } = useAuth();

    return (
        <section className="section-blogs">
            <div>
                <h1 className="blogs-heading">Welcome to blogs page</h1>
            </div>
            <div className="blogcontainer">
                {blogs.map((curElem) => {
                    const { id, username, email, title, summary, cover } = curElem;
                    return (
                        <Link to={`/blogs/${id}`} className="card-link" key={id}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={cover} alt="our blogs img" width="400" />
                                </div>
                                <div className="card-details">
                                    <h2>{title}</h2>
                                    <p>{summary}</p>
                                    <div className="grid grid-two-cols">
                                        <p><strong>Author</strong>: {username}/{email}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Blogs;
