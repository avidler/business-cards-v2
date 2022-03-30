import React from 'react'
import image from '../assets/images/face01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

export default function BusinessCard() {
    return (
        <div id="business-card" class="font-sans bg-gray-800 text-white w-[550px] h-[868px] flex flex-col">
            <img src={image} class="object-cover object-top w-[317px] h-[317px] mx-auto" alt="face" />
            <div class="bg-gray-900 w-[317px] mx-auto"> 
                <div id="name" class="w-[247px] mx-auto pt-6">
                    <p class="not-italic font-bold text-2xl leading-7">Luke Smith</p>
                    <p class="not-italic font-normal text-xs leading-4 text-center text-orange-300">Frontend Developer</p>
                    <p class="pt-2 not-italic font-normal text-center text-xs text-gray-200">lukesmith.website</p>
                </div>
                <div id="contact" class="flex w-[247px] mx-auto pt-5 justify-between">
                    <div id="email-button" class="flex flex-row w-1/2 py-2 mr-3 justify-center items-center bg-white text-gray-900 box-border rounded-md"><FontAwesomeIcon icon={faEnvelope} />  <div class="pl-2">Email</div> </div>
                    <div id="linkedin-button" class="flex flex-row w-1/2 py-2 ml-3 justify-center items-center bg-blue-500 text-gray-900 box-border rounded-md"><i class="fa fa-linkedin-square fa-4x text-lg"></i><div class="pl-2 text-white"> LinkedIn</div></div>
            
                </div>
                <div id="about" class="text-left w-[247px] mx-auto mt-6">
                    <h1 class=" not-italic font-bold text-base text-gray-200">About</h1>
                    <p class="pt-1 not-italic font-normal text-gray-400 text-xs">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
                </div>
                <div id="interests" class="pt-4 pb-6 text-left w-[247px] mx-auto ">
                    <h1 class="not-italic font-bold text-base text-gray-200">Interests</h1>
                    <p class="pt-1 not-italic font-normal text-gray-400 text-xs">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div id="social" class="bg-black w-[317px] mx-auto py-3 text-gray-500 text-3xl flex justify-center box-border rounded-b-md">
                <div class="mx-2"><i class="fa fa-twitter-square" aria-hidden="true"></i></div>
                <div class="mx-2"><i class="fa fa-facebook-square" aria-hidden="true"></i></div>
                <div class="mx-2"><i class="fa-brands fa-instagram-square"></i></div>
                <div class="mx-2"><i class="fa fa-github-square" aria-hidden="true"></i></div>
            </div>
            
        </div>

    
    )
}
