import React, { useEffect, useState } from 'react';
import BlogTemplate from './BlogTemplate/BlogTemplate';

const Blog = ({data}) => {
    return (
        <div className='container'>
            <div className="blog-parent">
                {
                  data?.map(item => <BlogTemplate item={item} key={item.id} />)
                }
            </div>
        </div>
    );
};




export default Blog;


