import React from 'react'
import image from '../assets/images/face01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import data from "./data.json"

export default function BusinessCard() {

    return (
        
        <div id="business-card" className="font-sans bg-gray-800 text-white w-[550px] h-[868px] flex flex-col">
            <img src={image} className="object-cover object-top w-[317px] h-[317px] mx-auto" alt="face" />
            <div className="bg-gray-900 w-[317px] mx-auto"> 
                <div id="name" className="w-[247px] mx-auto pt-6">
                    <p className="not-italic font-bold text-2xl leading-7" id="person-name"></p>
                    <p className="not-italic font-normal text-xs leading-4 text-center text-orange-300" id="person-role"></p>
                    <p className="pt-2 not-italic font-normal text-center text-xs text-gray-200" id="person-website"></p>
                </div>
                <div id="contact" className="flex w-[247px] mx-auto pt-5 justify-between">
                    <div id="email-button" className="flex flex-row w-1/2 py-2 mr-3 justify-center items-center bg-white text-gray-900 box-border rounded-md"><FontAwesomeIcon icon={faEnvelope} />  <div className="pl-2">Email</div> </div>
                    <div id="linkedin-button" className="flex flex-row w-1/2 py-2 ml-3 justify-center items-center bg-blue-500 text-gray-900 box-border rounded-md"><i className="fa fa-linkedin-square fa-4x text-lg"></i><div className="pl-2 text-white"> LinkedIn</div></div>
            
                </div>
                <div id="about" className="text-left w-[247px] mx-auto mt-6">
                    <h1 className=" not-italic font-bold text-base text-gray-200">About</h1>
                    <p className="pt-1 not-italic font-normal text-gray-400 text-xs" id="person-about"></p>
                </div>
                <div id="interests" className="pt-4 pb-6 text-left w-[247px] mx-auto ">
                    <h1 className="not-italic font-bold text-base text-gray-200">Interests</h1>
                    <p className="pt-1 not-italic font-normal text-gray-400 text-xs" id="person-interests"></p>
                </div>
            </div>
            <div id="social" className="bg-black w-[317px] mx-auto py-3 text-gray-500 text-3xl flex justify-center box-border rounded-b-md">
                <div className="mx-2"><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
                <div className="mx-2"><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
                <div className="mx-2"><i className="fa-brands fa-instagram-square"></i></div>
                <div className="mx-2"><i className="fa fa-github-square" aria-hidden="true"></i></div>
            </div>
            
        </div>

    
    )
}
