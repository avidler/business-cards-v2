import React from 'react'
import image from '../assets/images/face01.jpg'

export default function BusinessCard() {
    return (
        <div id="business-card" class="font-sans bg-gray-900 text-white w-[550px] h-[868px] flex flex-col">
            <img src={image} class="object-contain w-[317px] h-[317px] mx-auto" alt="face" />
            <div id="name">
                <p class="not-italic font-bold text-2xl leading-7">Luke Smith</p>
                <p class="not-italic font-normal text-xs leading-4 text-center text-orange-300">Frontend Developer</p>
                <p class="not-italic font-normal text-center text-xs text-gray-200">lukesmith.website</p>
            </div>
            <div id="contact"></div>
            <div id="about">
                <h1 class="not-italic font-bold text-base text-gray-200">About</h1>
                <p class="not-italic font-normal text-gray-400 text-xs">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
            </div>
            <div id="interests">Interests</div>
            <div id="social">Social</div>

        </div>

    
    )
}
