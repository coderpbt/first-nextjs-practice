import { useRouter } from 'next/router';
import React from 'react';

const BlogDetailsTemplate = ({post}) => {
    const  router = useRouter();

    const handelBack = () => {
        router.push('/blog')
    }

    return (
        <div className='container'>
           <div className="blg-details">
                <h2 className="card-title">{post.id}</h2>
                <h3 className="card-title">{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={handelBack}>Back to Post</button>
           </div>
       </div>
    );
};

export default BlogDetailsTemplate;