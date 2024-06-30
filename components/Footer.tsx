"use client";
import React from 'react';
import Image from 'next/image'; // Import next/image for optimized images
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { RxResume } from 'react-icons/rx';

const Footer = () => {
  return (
    <footer className='w-full pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45w]'>
                Ready to take <span className='text-purple'>your</span> digital presence to next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let&apos;s discuss how I can help you achieve your goal.
            </p>
            <a href='mailto:sthakka9@asu.edu'>
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>

            <a href='/sthakka9@asu.edu_resume.pdf' download id='resume'>
                <MagicButton 
                    title="Resume"
                    icon={<RxResume />}
                    position='right'
                />
            </a>

        </div>
        <div>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) =>
                    <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer" className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <Image src={profile.img} alt={`profile-${profile.id}`} width={20} height={20} /> {/* Replace <img> with <Image /> */}
                    </a>
                )}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
