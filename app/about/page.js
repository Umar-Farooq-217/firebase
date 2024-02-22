import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function page() {
  return (
    <div>
        <Navbar/>
        <div>
             
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto">
                <div role="article" className="bg-gray-100 dark:bg-gray-900 py-12 md:px-8">
                    <div className="px-4 xl:px-0 py-10">
                        <div className="flex flex-col lg:flex-row flex-wrap">
                            <div className="mt-4 lg:mt-0 lg:w-3/5">
                                <div>
                                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 dark:text-white tracking-normal lg:w-11/12">Frequently asked questions</h1>
                                </div>
                            </div>
                            <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                                <div className="pt-2 relative text-gray-600">
                                    <input className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                    <button type="submit" className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 dark:text-indigo-400 focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4">
                                      <img className="h-4 w-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg1.svg" alt="search"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 xl:px-0">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                            <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                                <div className="bg-white p-5 roun dark:bg-gray-800 ded-md relative h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">Account Overview</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                           <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100">First time, what do I do next?</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100">Changing you profile picture and other information</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-400 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg" alt="arrow"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                                <div className="bg-white p-5 roun dark:bg-gray-800 ded-md relative h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" /></span>
                                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">Subscription Plans</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy?</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-400 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg" alt="arrow"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                                <div className="bg-white p-5 roun dark:bg-gray-800 ded-md relative h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">Payment Options</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-400 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg" alt="arrow"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                                <div className="bg-white p-5 roun dark:bg-gray-800 ded-md h-full relative w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">Notification Settings</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                   <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-400 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg" alt="arrow"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                                <div className=" bg-white dark:bg-gray-800  p-5 rounded-md relative h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">Profile Preferences</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                   <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                   <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                  <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-400 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg" alt="arrow"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                                <div className=" bg-white dark:bg-gray-800  p-5 rounded-md relative h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">Privacy and Cookies</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                  <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                  <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                   <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                   <img className="dark:bg-gray-400" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg" alt="bullet"/>
                                            </div>
                                            <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                        </div>
                                    </div>
                                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-400 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg" alt="arrow"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    
        </div>
      
    </div>
  )
}
