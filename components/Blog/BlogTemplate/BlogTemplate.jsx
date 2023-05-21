import Link from 'next/link';
import React from 'react';

const BlogTemplate = ({item}) => {

    return (
        <div className='single-item'>
            <h3>{item.title}</h3>
            <Link href={`/blog/${item.id}`}>View Details</Link>
        </div>
    );
};

export default BlogTemplate;