import { useState, useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { TbLetterS } from "react-icons/tb";
import './About.css';

const Hero = () => {
  const [text, setText] = useState('Web Developer'); // Initial text
  const words = ['Web Developer', 'Java Specialist', 'WordPress Developer']; // Array of words to type
  const [wordIndex, setWordIndex] = useState(0); // Track the index of the word
  const [isDeleting, setIsDeleting] = useState(false); // Track if it's typing or deleting
  const [typingSpeed, setTypingSpeed] = useState(150); // Control typing speed

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); // Move to next word
      }

      setTypingSpeed(isDeleting ? 100 : 150); // Adjust speed during deleting or typing
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimeout); // Clean up timeout
  }, [text, isDeleting, typingSpeed, wordIndex, words]);

  return (
<div className="hero-container flex flex-col-reverse md:flex-row md:justify-between space-x-0 md:space-x-40 about" id='about'>
  <div className="text-section w-full md:w-1/2  text-white text-left md:mr-4 mb-8 md:mb-0">
    <h1 className="typed-text">Hey I`m PraveenKumar A</h1>
    <p className="description text-balance">
      <span className="typed-text">I`m a</span>
      <span className={`typed-text color-${wordIndex}`}> {text}</span>
      <span className="cursor">|</span>
      <br />
      I create user-centered, responsive applications and craft innovative solutions that drive business growth and enhance brand awareness.
    </p>

    <div className="flex space-x-3 mt-4 divlinks">
      <a href="https://www.linkedin.com/in/praveenkumar2k33/" target="_blank" className="border p-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaLinkedinIn /></a>
      <a href="https://github.com/PraveenKumara2k33" target="_blank" className="border p-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaGithub /></a>
      <a href="https://www.hackerrank.com/profile/apraveenkumar720" target="_blank" className="border p-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaHackerrank /></a>
      <a href="https://leetcode.com/u/apraveenkumar/" target="_blank" className="border p-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><SiLeetcode /></a>
      <a href="https://www.skillrack.com/faces/resume.xhtml?id=320627&key=b613186118ca2f8cfe1ceba5d9d4b9614c38cfda" target="_blank" className="border p-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><TbLetterS /></a>
      <a href="https://www.instagram.com/apk2k/" target="_blank" className="border p-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaInstagram /></a>
    </div>

    <div className="flex py-7">
      <div className="flex justify-center items-center border w-28 mr-3">
        <p className="shine-text flex items-center text-lg">
          Resume
          <FaAnglesRight className="ml-3 text-2xl  fade-in-left" />
        </p>
      </div>
      <div className="flex space-x-3">
        {/* Link to view PDF */}
        <a href="../img/Praveenkumar_A_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white border p-3">
          <FaEye className="blink-eye" />
        </a>
        {/* Link to download PDF */}
        <a href="../img/Praveenkumar_A_Resume.pdf" download className="download text-indigo-500 font-bold animate-bounce border p-3 bg-white text-lg">
          <FaArrowDown />
        </a>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 mt-4 md:mt-0">
    <img
      src="../img/PraveenKumar.jpeg"
      className="w-64 mx-auto mb-8 rounded-full heroimg"
      alt="PraveenKumar A"
    />
  </div>
</div>


  );
};

export default Hero;
