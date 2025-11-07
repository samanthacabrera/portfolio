import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center py-4">
      <div className="flex space-x-6 text-2xl">
        <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/samcab" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
          <SiLeetcode />
        </a>
        <a href="mailto:samantha.n.cabrera@gmail.com" className="hover:scale-110 transition duration-300">
          <HiOutlineMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
