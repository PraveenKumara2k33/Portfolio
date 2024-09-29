import  { useEffect } from 'react';
import './RestaurantPage.css';
import HtmlLogo from '../assets/skills/html-5.svg';
import CssLogo from '../assets/skills/css3.svg';
import JavascriptLogo from '../assets/skills/javascript-svg.svg';
import WordLogo from '../assets/skills/wordpress.svg';
import WordpressPage from '../assets/webchat/wordpressweb.jpg'

const WordPressPage = () => {
  useEffect(() => {
    const sectionEls = document.querySelectorAll('.stacking-slide');

    const options = {
      rootMargin: '-10% 0% -10% 0%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-intersecting');
        } else {
          entry.target.classList.remove('is-intersecting');
        }
      });
    }, options);

    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      sectionEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="vertical-scroll-snap">
      
      <section className="stacking-slide text-start">
        <h1 className='text-center text-3xl sm:text-5xl my-5 RestaurantHeading'>WordPress Development</h1>
        <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={WordpressPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-lg sm:text-2xl'>Project Title: Optimizing WordPress with AI and Customization</h3>
        <p>Duration: Nov to Dec 2023</p>
        <p>Individual Project</p>
        <p>Technologies Used:</p>
        <div className='flex space-x-5 mt-2'>
            <img src={HtmlLogo} className='w-10' alt="" />
            <img src={CssLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={WordLogo} className='w-10' alt=""  />
          </div>
        </div>
        </div>  
          
      </section>
      <section className="stacking-slide text-start">
        <p className='text-xl'>
          Designed and implemented a customized WordPress site, 
          focusing on optimizing user interaction and engagement through AI 
          integration and enhanced website functionality.
        </p>
        <h2 className='font-serif font-semibold my-2'>Key Features and Functionalities</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='font-serif'>
            <li>AI Chatbot Integration</li>
            <li>Image Gallery Implementation</li>
            <li>Website Customization</li>
          </ul>
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div>
              <img src={WordpressPage} alt="" className='image' />
            </div>
          </div>
          <div className='mx-5'>
          <h3 className='text-3xl sm:text-5xl my-2 '>AI Chatbot Integration</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Integrated a real-time AI chatbot to enhance user interaction and support, providing instant responses and improving overall engagement.</li>
                <li>Optimized the chatbot’s behavior for quick response times and seamless integration with the website&apos;s interface, leading to higher user satisfaction.</li>
          </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={HtmlLogo} className='w-10' alt="" />
            <img src={CssLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={WordLogo} className='w-10' alt=""  />
          </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div>
              <img src={WordpressPage} alt="" className='image' />
            </div>
          </div>
          <div className='mx-5'>
          <h3 className='text-3xl sm:text-5xl my-2 '>Image Gallery Implementation</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Developed a dynamic, interactive image gallery with pagination features to improve content organization and user browsing experience.</li>
                <li>Increased user engagement by 30% through a visually appealing and easy-to-navigate image display system, enhancing site interaction metrics.</li>
          </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={HtmlLogo} className='w-10' alt="" />
            <img src={CssLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={WordLogo} className='w-10' alt=""  />
          </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div>
              <img src={WordpressPage} alt="" className='image' />
            </div>
          </div>
          <div className='mx-5'>
          <h3 className='text-3xl sm:text-5xl my-2 '>Website Customization</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Tailored the website’s appearance and functionality using custom web styles to enhance readability and user experience.</li>
                <li>Achieved a 20% improvement in user experience by focusing on optimizing page load times, font readability, and responsive design across multiple devices.</li>
          </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={HtmlLogo} className='w-10' alt="" />
            <img src={CssLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={WordLogo} className='w-10' alt=""  />
          </div>
          </div>
        </div> 
      </section>
    </div>
  );
};

export default WordPressPage;
