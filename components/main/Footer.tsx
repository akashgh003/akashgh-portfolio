import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/_akash.gh_" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <a href="https://www.x.com/akash19062003" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/akash-ghosh-7b6b7127a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer"> 
                        <span className="text-[15px] ml-[6px]">akashghosh1906@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; --akash_ghosh-portfolio 2024--
            </div>
        </div>
    </div>
  )
}

export default Footer