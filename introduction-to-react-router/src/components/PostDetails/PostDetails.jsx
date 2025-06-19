import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    const {title, body, id} = post;

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Post Details of No:{id} Post</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;