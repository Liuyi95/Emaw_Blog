import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Image from 'next/image'
// import Banner from "../components/Banner";
// import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import sanityCli from "../sanity.cli";
import { sanityClient, urlFor } from "../sanity";
import { Post} from "../typings"
import Link from "next/link";



interface Props{
  posts:[Post];
}

export default function Home({posts}: Props) {
  console.log(posts);

  return (

          
    <div>
      <Head>
        <title>Emaww Blog :: Blog</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont " >
        {/* ============ Header Start here ============ */}
        <Header />
        <div className=' h-full mx-auto flex justify-between' style={{height: '222px' ,backgroundColor: '#EC6865' }}>
          <div className='max-w-3xl mx-auto text-center' >
          <h1 className="font-titleFont text-white
          font-medium  text-[35px] text-primary font-blog mt-10 mb-3 "> BLOG </h1>
          <h2 className = 'font-bodyFont text-white text-[17px]'>Uncover emotional trends and analysis on our blog, providing 
          valuable insights into understanding user feelings.</h2>
          </div>
        </div>

        
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        {/* <Banner /> */}
        {/* ============ Banner End here ============== */}
        {/* <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div> */}
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7 py-11 px-20">   
          { 
            posts.map((post)=>(
            
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group ">
                <div className="h-2/5 w-full overflow-hidden">
                  <img 
                    width = {300}
                    height = {300}
                    src={urlFor(post.mainImage).url()!}
                    alt = "images"
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-100
                    duration-300 group-hover:scale-110"
                  />
              </div> 

                  <div className='h-3/5 w-full flex flex-col justify-center'>
                    <div className=" h-2/5 flex justify-between items-center px-2 py-5 ">
                        <img 
                        className="w-12 h-12 rounded-full object-cover"
                        src={urlFor(post.author.image).url()!} alt='authorImg'
                        />
                   <div>
                        <p className="font-bold px-2 w-full"> {post.title} </p>
                        <p className='text-base text-gray text-xs py-1 px-2 '>by <span className="text-primaryColor">{post.author.name}</span> -
                            Published at   <span className="text-primaryColor" >{new Date(post.publishedAt).toDateString()}</span></p>
                            
                   </div>
                     
                </div>  
                <div>
                <p className='mt-2  px-2 text-base text-sm' style={{ color: '#999999' }}>
                <span >{post.description.substring(0,152)}</span>...
                  </p>
                  </div>

                  <div>
                  <li className="  h-1/5 flex mt-8 px-2 items-center text-base text-sm text-primaryColor ">
                  Read More &rarr; 
                    </li>
                  </div>
                    
              </div>
 
              </div>
              
            </Link>

            ))
          }

        </div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}

export const getServerSideProps =async ()=> {
  const query = `*[_type == "post"]{
    _id,
    publishedAt,
    title,
    author ->{
      name,
      image
    },
      description,
      mainImage,
      slug,
      body
  }`;
  const posts = await sanityClient.fetch(query)
  return{
    props:{
      posts,
    },
  };

};
  

