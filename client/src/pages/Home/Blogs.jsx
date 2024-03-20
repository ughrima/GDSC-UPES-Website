// // import React from 'react'
// // import Blog from "../../assets/illustrations/home-blog-1.png"
// // import {Link} from  'react-router-dom';

// // async function gql(query, variables={}) {
// //   const data = await fetch('https://api.hashnode.com/', {
// //       method: 'POST',
// //       headers: {
// //           'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //           query,
// //           variables
// //       })
// //   });

// //   return data.json();
// // }
// // gql(GET_USER_ARTICLES, { page: 0 })
// //     .then(result => {
// //         const articles = result.data.user.publication.posts;
// //         let container = document.createElement('div');

// //         articles.forEach(article => {
// //             let title = document.createElement('h2');
// //             title.innerText = article.title;

// //             let brief = document.createElement('p');
// //             brief.innerText = article.brief;

// //             let link = document.createElement('a');
// //             link.innerText = 'Read more...';
// //             link.href = `https://catalins.tech/${article.slug}`;

// //             container.appendChild(title);
// //             container.appendChild(brief);
// //             container.appendChild(link);
// //         })

// //         document.querySelector('.app').appendChild(container);
// // });


// // const Blogs = () => {
  
// //   return (
// //     <>
// // <div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
// // <div className='flex flex-row'>
// //         {/* First Row */}
// //         <div className='flex flex-col w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
// //           <div className='text-greyText drop-shadow-custom'>
// //             <div className='flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl'>
// //               <div className='flex leading-normal'>
// //                 <p>Blogs from our Community</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// // {/* Blog Cards */}
// //   <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
// //   <div class="md:flex">
// //     <div class="md:flex-shrink-0">
// //       <div class="h-48 w-full object-cover md:h-full md:w-48">
// //         <img  src={Blog} alt="" />
// //       </div>
// //     </div>
// //     <div class="p-8">
// //       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
// //       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
// //       <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
// //     </div>
// //   </div>
// // </div>
// // <br></br>
// // <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
// //   <div class="md:flex">
// //     <div class="md:flex-shrink-0">
// //       <div class="h-48 w-full object-cover md:h-full md:w-48">
// //         <img  src={Blog} alt="" />
// //       </div>
// //     </div>
// //     <div class="p-8">
// //       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
// //       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
// //       <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
// //     </div>
// //   </div>
// // </div>
// // <br></br>
// // <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
// //   <div class="md:flex">
// //     <div class="md:flex-shrink-0">
// //       <div class="h-48 w-full object-cover md:h-full md:w-48">
// //         <img  src={Blog} alt="" />
// //       </div>
// //     </div>
// //     <div class="p-8">
// //       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
// //       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
// //       <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
// //     </div>
// //   </div>
// // </div>
// // <br></br>
// // <br></br>
// // <div className="flex items-center justify-center">
// //   <Link to="https://gdscupes.hashnode.dev/">
// // <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mx-auto;">
// // View All
// // </button>
// // </Link>
// // </div>
// // <br></br>
// // {/* <div>
// //       <h1>{data?.publication?.title}</h1>
// //       {posts.map((post, index) => (
// //         <div key={index}>
// //           <h2>{post?.node?.title}</h2>
// //           <p>{post?.node?.brief}</p>
// //           <a href={post?.node?.url} target="_blank" rel="noopener noreferrer">
// //             Read more
// //           </a>
// //         </div>
// //       ))}
// //     </div> */}
// //             </>
// //   );
// // }

// // export default Blogs;

// // import React, { useEffect, useState } from 'react';
// // import Blog from '../../assets/illustrations/home-blog-1.png';
// // import { Link } from 'react-router-dom';
// // import gql from 'gql-tag';


// // const Blogs = () => {
// //   const [blogData, setBlogData] = useState([]);

// //   const query = JSON.stringify({
//   //   query: `{
//   //       user(username: "gdscupes") {
//   //         posts(pageSize: 4,page:1){
//   //           edges {
//   //             node {
//   //               author{
//   //                 name
//   //               }
//   //               title
//   //               publishedAt
//   //               content{
//   //                 text
//   //               }
//   //             }
//   //               }
//   //             }
//   //           }   
//   //       }`,
//   // });
  
// // async function gql(query) {
// //   const response = await fetch('https://api.hashnode.com/', {
// //       method: 'POST',
// //       headers: {
// //         "Content-Type": "application/json",
// //         'Authorization':'1eecef09-f394-48a2-81ae-453f34b41396',
// //       },
// //       body: JSON.stringify({ query }),
// //   });

// //   return response.json();

// // }

// //   return (
// //     <>
// //       <div className="bg-lineColor border-solid w-full h-[1.5px]">
// //         <hr></hr>
// //       </div>
// //       <div className="flex flex-row">
// //         {/* First Row */}
// //         <div className="flex flex-col w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6">
// //           <div className="text-greyText drop-shadow-custom">
// //             <div className="flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl">
// //               <div className="flex leading-normal">
// //                 <p>Blogs from our Community</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Blog Cards */}
// //       {gql.map() => (
// //         <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
// //           <div className="md:flex">
// //             <div className="md:flex-shrink-0">
// //               <div className="h-48 w-full object-cover md:h-full md:w-48">
// //                 <img src={Blog} alt="" />
// //               </div>
// //             </div>
// //             <div className="p-8">
// //               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
// //               <Link to={`https://catalins.tech/${gql.title}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
// //                 {blog.title}
// //               </Link>
// //               <p className="mt-2 text-gray-500">{blog.brief}</p>
// //             </div>
// //           </div>
// //         </div>
// //       ))}

// //       <br></br>
// //       <div className="flex items-center justify-center">
// //         <Link to="https://gdscupes.hashnode.dev/">
// //           <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mx-auto">
// //             View All
// //           </button>
// //         </Link>
// //       </div>
// //       <br></br>
// //     </>
// //   );
// // };

// // export default Blogs;

// import React, { useEffect, useState } from 'react';
// import BlogImage from '../../assets/illustrations/home-blog-1.png';
// import { Link } from 'react-router-dom';


// const Blogs = () => {
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.hashnode.com/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': '1eecef09-f394-48a2-81ae-453f34b41396',
//           },
//           body: JSON.stringify({
//             query: `
//               {
//                 user(username: "gdscupes") {
//                   posts(pageSize: 4, page: 1) {
//                     edges {
//                       node {
//                         author {
//                           name
//                         }
//                         title
//                         publishedAt
//                         content {
//                           text
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//           }),
//         });

//         const result = await response.json();

//         if (result.errors) {
//           throw new Error(result.errors[0].message);
//         }

//         const articles = result.data.user.posts.edges.map(edge => edge.node);
//         setBlogData(articles);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   return (
//     <>
//       <div className="bg-lineColor border-solid w-full h-[1.5px]">
//         <hr></hr>
//       </div>
//       <div className="flex flex-row">
//         {/* First Row */}
//         <div className="flex flex-col w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6">
//           <div className="text-greyText drop-shadow-custom">
//             <div className="flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl">
//               <div className="flex leading-normal">
//                 <p>Blogs from our Community</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Cards */}
//       {blogData.map((blog, index) => (
//         <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <div className="h-48 w-full object-cover md:h-full md:w-48">
//                 <img src={BlogImage} alt="" />
//               </div>
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
//               <Link to={`https://gdscupes.hashnode/${blog.posts.title}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
//                 {blog.title}
//               </Link>
//               <p className="mt-2 text-gray-500">{blog.author.name}</p>
//             </div>
//           </div>
//         </div>
//       ))}

//       <br></br>
//       <div className="flex items-center justify-center">
//         <Link to="https://gdscupes.hashnode.dev/">
//           <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mx-auto">
//             View All
//           </button>
//         </Link>
//       </div>
//       <br></br>
//     </>
//   );
// };

// export default Blogs;

import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/hashnode');
        const data = await response.json();
    
        // Process the data as needed
        console.log('Data from server:', data);
      } catch (error) {
        console.error('Error fetching data in React component:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Render your blog data here */}
      {blogData.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.author.name}</p>
          <p>{blog.publishedAt}</p>
          <p>{blog.content.text}</p>
        </div>
      ))}
    </>
  );
};

export default Blogs;
