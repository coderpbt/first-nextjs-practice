//note : this is live api fetch blog 
import Blog from '@/components/Blog/Blog';
import ContainerBlock from '@/components/ContainerBlock';
import React from 'react';

const blog = ({data}) => {
    return (
        <ContainerBlock>
            <Blog data={data} />
        </ContainerBlock>
    );
};

export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await response.json();
  
    return {
      props: {
        data,
      },
    };
  };

export default blog;

//note : this is custom data fetch blog

// import Blog from '@/components/Blog/Blog';
// import ContainerBlock from '@/components/ContainerBlock';
// import React from 'react';
// import path from 'path';
// import fs from 'fs';

// const BlogPage = ({ data }) => {
//   return (
//     <ContainerBlock>
//       <Blog data={data} />
//     </ContainerBlock>
//   );
// };

// export async function getServerSideProps() {
//   const filePath = path.join(process.cwd(), 'data', 'data.json');
//   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

//   return {
//     props: {
//       data: jsonData,
//     },
//   };
// }

// export default BlogPage;
