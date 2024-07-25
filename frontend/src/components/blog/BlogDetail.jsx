import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../auth/auth';

const BlogDetail = () => {
    const [data, setData] = useState({
        title: "",
        username: "",
        email: "",
        summary: "",
        content: "",
        cover: "",
    });
    
    const params = useParams();
    console.log("params single blog: ", params);
    const { authorizationToken} = useAuth();

    const getSingleBlogData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/data/blogs/${params.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken, // Adjust if necessary
                },
            });

            if (response.ok) {
                const blogData = await response.json();
                setData(blogData);
            } else {
                console.error('Failed to fetch blog data');
            }
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        getSingleBlogData();
    }, [params.id]); // Depend on `id` to refetch data when it changes

    const { title, username, email, summary, content, cover } = data;

    return (
        <div className="blog-detail">
            <h1>{title}</h1>
            <img src={cover} alt={title} width="600" />
            <div className="blog-meta">
                <p><strong>Author</strong>: {username}/{email}</p>
            </div>
            <div className="blog-content">
                <p>{summary}</p>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default BlogDetail;
