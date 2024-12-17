import React from 'react'

const Blog = () => {
  return (
    <div>
    <div className='w-full h-dvh  flex'>
        <div className="bg-black bg-opacity-75 w-4/12 text-white   place-items-center  place-content-center flex-col space-y-4 "> <h1 className=' text-2xl font-bold ' >OUR BLOG POSTS</h1>
        <hr className='h-2 w-72' />
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Temporibus, officia. Lorem <br /> ipsum dolor sit.</p>
        <div  className='bg-white text-black w-60 h-10 text-center pt-1'>

        <h1  >Lorem, ipsum dolor.</h1>
        </div>
        <div>

        <h1 className='bg-white text-black w-60 h-10 text-center pt-1'  >Lorem, ipsum.</h1>
        </div>
        <div>

        <h1  className='bg-white text-black w-60 h-10 text-center pt-1' >Lorem ipsum dolor sit.</h1>
        </div>
        <div className='bg-white text-black w-60 h-10 text-center pt-1' >

        <h1  >Lorem, ipsum dolor.</h1>
        </div>
         </div>
        <div className="bg-[url('/coup.jpg')]   "> 
        <img src="./coup.jpg" className=' h-svh ' alt="" />
       
        </div>
         </div>
        <div className='w-full bg-gray-500 flex-col text-center py-10 place-items-center space-y-5'>
        <h1 className='text-2xl' >CONTACT US</h1>
        <hr className='w-96' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et qui <br /> ad modi aliquam accusamus veniam, sed eaque, sequi mollitia laborebr <br /> esse necessitatibus corporis quasi hic praesentium? Non, amet ea.</p>
        <button
            className=" bg-sky-400 text-white rounded-full px-4 py-3 
bg-opacity-85 hover "
          >
            SEND MESSAGE
          </button>
        </div>

  <address className="w-full bg-black " >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3918141118747!2d75.89315517437775!3d22.750836179365177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302aa0cd59c5d%3A0x57ef6ab67c13ea2b!2sVijay%20Nagar%20Square%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1734457281025!5m2!1sen!2sin" className='w-full' height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </address>

        </div>
  )
}

export default Blog