import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPost = async () => {
        const res = await axios.get("http://localhost:4000/posts");

        setPosts(res.data);
    }

    useEffect(() => {
        fetchPost();
    }, []); // empty array in 2nd parameters tell react to run this function for 1 time only.

    const renderPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        )
    })
    return <div className="d-flex flex-row flex-wrap justify-content-between">{renderPosts}</div>
}