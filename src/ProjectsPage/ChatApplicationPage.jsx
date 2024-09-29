import  { useEffect } from 'react';
import './RestaurantPage.css';
import HtmlLogo from '../assets/skills/html-5.svg';
import CssLogo from '../assets/skills/css3.svg';
import BootstrapLogo from '../assets/skills/bootstrap.svg';
import JavascriptLogo from '../assets/skills/javascript-svg.svg';
import JavaLogo from '../assets/skills/java.svg';
import SQLLogo from '../assets/skills/mysql.svg';
import JspLogo from '../assets/skills/jsp.svg';
import GithubLogo from '../assets/skills/github.svg';
import ChatLogo from '../assets/webchat/chat.jpg'

const ChatApplicationPage = () => {
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
        <h1 className='text-center text-3xl sm:text-5xl my-5 RestaurantHeading'>Java Development</h1>
        <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div className='chat'>
            <img src={ChatLogo} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-lg sm:text-2xl'>Project Title: Web-Based Chat Application</h3>
        <p>Duration: Aug to Sep 2024</p>
        <p>Individual Project</p>
        <p>Technologies Used:</p>
        <div className='flex space-x-5 mt-2'>
            <img src={HtmlLogo} className='w-10' alt="" />
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={JavaLogo} className='w-10' alt="" />
            <img src={JspLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
          <div className='mt-3 border w-fit p-2'>
            <a href="https://github.com/PraveenKumara2k33/Web-Based-Chat-Application.git" target='_blank' className='flex'><img src={GithubLogo} alt="" className='w-8' /> <span className='ml-2 my-1'>GitHub</span> </a>
          </div>
        </div>
        </div>  
          
      </section>
      <section className="stacking-slide text-start">
        <p className='text-xl'>
          Designed and implemented a comprehensive Web-Based Chat Application, 
          focusing on enabling real-time communication and enhancing user engagement through 
          efficient messaging solutions.
        </p>
        <h2 className='font-serif font-semibold my-2'>Key Features and Functionalities</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='font-serif'>
            <li>Core Features</li>
            <li>User Authentication</li>
            <li>Database Design</li>
            <li>Additional Features</li>
            <li>Integration & Functionality</li>
          </ul>
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div className='chat'>
              <img src={ChatLogo} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>Core Features</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Real-Time Messaging</li>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Utilized AJAX for live, instant message updates between users, without page reload.</li>
                <li>Delivered a smooth messaging experience with dynamic, real-time chat functionality.</li>
              </ul>
            <li>User Interface</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Built a responsive front-end for intuitive user interaction across devices (mobile, tablet, desktop).</li>
                <li>Integrated dynamic elements using JavaScript and CSS to enhance user experience.</li>
              </ul>
          </ul>
            <div className='flex space-x-5 mt-2'>
              <img src={CssLogo} className='w-10' alt="" />
              <img src={JavascriptLogo} className='w-10' alt="" />
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={JspLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div className='chat'>
              <img src={ChatLogo} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>User Authentication</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Login/Logout System</li>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Secure user authentication through Java Servlets and JSP.</li>
                <li>Implemented session handling using Apache Tomcat to track user activity.</li>
                <li>Logout functionality to clear session and end user interactions safely.</li>
              </ul>
            <li>User Registration</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Designed a sign-up system with form validation and error handling.</li>
                <li>Stored user credentials in a secure format, encrypting passwords in the MySQL database.</li>
              </ul>
          </ul>
            <div className='flex space-x-5 mt-2'>
              <img src={CssLogo} className='w-10' alt="" />
              <img src={JavascriptLogo} className='w-10' alt="" />
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={JspLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div className='chat'>
              <img src={ChatLogo} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>Database Design</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Message Management</li>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Created MySQL tables to manage message data, including sender/receiver, message content, and timestamps.</li>
                <li>Enabled storage and retrieval of chat history for user access.</li>
              </ul>
            <li>User Management</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Designed database schema to handle user details, including login information and session tracking.</li>
                <li>Implemented user state management (online/offline status) in real-time using AJAX.</li>
              </ul>
          </ul>
            <div className='flex space-x-5 mt-2'>
              <img src={CssLogo} className='w-10' alt="" />
              <img src={JavascriptLogo} className='w-10' alt="" />
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={JspLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div className='chat'>
              <img src={ChatLogo} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>Additional Features</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Real-Time User Status</li>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Updated online/offline status for users dynamically through AJAX requests.</li>
              </ul>
            <li>Notifications</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Real-time notifications for new messages or important events.</li>
            </ul>
            <li>Error Handling</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Front-end validation for user inputs, and robust back-end exception handling.</li>
            </ul>
            <li>Security</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Used input validation to protect against SQL injection and other vulnerabilities.</li>
                <li>Managed secure sessions and encrypted password storage to safeguard user data.</li>
            </ul>
          </ul>
            <div className='flex space-x-5 mt-2'>
              <img src={CssLogo} className='w-10' alt="" />
              <img src={JavascriptLogo} className='w-10' alt="" />
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={JspLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div className='chat'>
              <img src={ChatLogo} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>Integration & Functionality</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>AJAX Implementation</li>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Utilized AJAX to enable asynchronous data fetching, ensuring a seamless real-time messaging experience without full page reloads.</li>
              </ul>
            <li>Session Management</li>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Handled secure sessions using Apache Tomcat, allowing persistent login states across the application.</li>
              </ul>
          </ul>
            <div className='flex space-x-5 mt-2'>
              <img src={CssLogo} className='w-10' alt="" />
              <img src={JavascriptLogo} className='w-10' alt="" />
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={JspLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
    </div>
  );
};

export default ChatApplicationPage;
