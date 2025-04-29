import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center py-4">
      <div className="flex space-x-6 text-xl">
        <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="hover-effect">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/samcab" target="_blank" rel="noopener noreferrer" className="hover-effect">
          <SiLeetcode />
        </a>
        <a href="mailto:samantha.n.cabrera@gmail.com" className="hover-effect">
          <HiOutlineMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
