import React from 'react'
import image from '../assets/images/face01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

export default function BusinessCard() {
    return (
        <div id="business-card" class="font-sans bg-gray-900 text-white w-[550px] h-[868px] flex flex-col">
            <img src={image} class="object-cover object-top w-[317px] h-[317px] mx-auto" alt="face" />
            <div id="name" class="w-[317px] mx-auto pt-6">
                <p class="not-italic font-bold text-2xl leading-7">Luke Smith</p>
                <p class="not-italic font-normal text-xs leading-4 text-center text-orange-300">Frontend Developer</p>
                <p class="pt-2 not-italic font-normal text-center text-xs text-gray-200">lukesmith.website</p>
            </div>
            <div id="contact">{element}</div>
            <div id="about" class="text-left w-[317px] mx-auto ">
                <h1 class=" not-italic font-bold text-base text-gray-200">About</h1>
                <p class="pt-1 not-italic font-normal text-gray-400 text-xs">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
            </div>
            <div id="interests" class="pt-4 text-left w-[317px] mx-auto ">
                <h1 class="not-italic font-bold text-base text-gray-200">Interests</h1>
                <p class="pt-1 not-italic font-normal text-gray-400 text-xs">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div id="social">Social</div>

        </div>

    
    )
}
