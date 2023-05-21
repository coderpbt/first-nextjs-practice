//note : this is live api fetch blog details

import BlogDetailsTemplate from '@/components/Blog/BlogTemplate/BlogDetailsTemplate';
import ContainerBlock from '@/components/ContainerBlock';
import React from 'react';

const BlogDetails = ({post}) => {
    return (
      <ContainerBlock>
        <BlogDetailsTemplate post={post} />
      </ContainerBlock>    
    );
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return {
    props: {
      post : post,
    },
  };
};


export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  const paths = posts?.map(post => {
    return {
        params : {
          id : `${post.id}`
        }
      }
    })

    return {
      paths,
      fallback : false
    }

}



export default BlogDetails;


//note : this is custom data fetch blog details

// import BlogDetailsTemplate from '@/components/Blog/BlogTemplate/BlogDetailsTemplate';
// import ContainerBlock from '@/components/ContainerBlock';
// import React from 'react';
// import path from 'path';
// import fs from 'fs';

// const BlogDetails = ({ post }) => {
//   return (
//     <ContainerBlock>
//       <BlogDetailsTemplate post={post} />
//     </ContainerBlock>
//   );
// };

// export const getStaticProps = async ({ params }) => {
//   const { id } = params;

//   const filePath = path.join(process.cwd(), 'data', 'data.json');
//   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

//   const post = jsonData.find((post) => post.id === Number(id));

//   return {
//     props: {
//       post: post,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const filePath = path.join(process.cwd(), 'data', 'data.json');
//   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

//   const paths = jsonData.map((post) => {
//     return {
//       params: {
//         id: `${post.id}`,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default BlogDetails;
