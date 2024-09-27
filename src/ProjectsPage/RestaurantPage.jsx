import  { useEffect } from 'react';
import './RestaurantPage.css';
import HtmlLogo from '../assets/skills/html-5.svg';
import CssLogo from '../assets/skills/css3.svg';
import BootstrapLogo from '../assets/skills/bootstrap.svg';
import JavascriptLogo from '../assets/skills/javascript-svg.svg';
import ReactLogo from '../assets/skills/react.svg';
import SQLLogo from '../assets/skills/mysql.svg';
import PhpLogo from '../assets/skills/php.svg';
import FigmaLogo from '../assets/skills/figma.svg';
import MainPage from '../assets/Restaurant/Main.png';
import SalesPage from '../assets/Restaurant/sales.png';
import LabourPage from '../assets/Restaurant/Labor.png';
import IngredientPage from '../assets/Restaurant/Ingredients.png';
import CostingPage from '../assets/Restaurant/costing.png';
import BuilderPage from '../assets/Restaurant/Builder.png';
import OverheadsPage from '../assets/Restaurant/Overheads.png';
import FaqPage from '../assets/Restaurant/Faq.png';

const RestaurantPage = () => {
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
        <h1 className='text-center text-3xl sm:text-5xl my-5'>Front-end Web Development</h1>
        <div className='flex section1'>
        <div className='lg:w-2/4 widthimg'>
          <div>
            <img src={MainPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-lg sm:text-2xl'>Project Title: Restaurant Management System Admin Panel</h3>
        <p>Duration: March to May 2024 </p>
        <p>Team Size: 4 members</p>
        <p>Technologies Used:</p>
        <div className='flex space-x-5 mt-2'>
            <img src={HtmlLogo} className='w-10' alt="" />
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={PhpLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
          <p className='flex mt-4'>Project Design Link: <a href="https://www.figma.com/design/CxFVodhuc1d6jLo8FifD6b/MARIE-ERP?node-id=3443-634&t=1zr338Tf0JyYKAKo-0" target='_blank'><img src={FigmaLogo} alt="" className='w-10' /></a></p>
        </div>
        </div>  
          
      </section>
      <section className="stacking-slide text-start">
        <p className='text-xl'>
          Designed and implemented a comprehensive admin panel for a Restaurant Management System, 
          focusing on optimizing restaurant operations through effective e-commerce solutions.
        </p>
        <h2 className='font-serif font-semibold my-2'>Key Pages and Functionalities</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='font-serif'>
            <li>Login Page</li>
            <li>Sales Page</li>
            <li>Process Builder Page</li>
            <li>Ingredients Page</li>
            <li>Labor Page</li>
            <li>Overheads Page</li>
            <li>Costing Page</li>
            <li>FAQ Page</li>
          </ul>

        <div className="boxes">
          <div className="box">
            <img src={SalesPage} alt="" className='imgcoverbox' />
          </div>
          <div className="box">
            <img src={LabourPage} alt="" className='imgcoverbox' />
          </div>
          <div className="box">
            <img src={IngredientPage} alt="" className='imgcoverbox' />
          </div>
          <div className="box">
            <img src={CostingPage} alt="" className='imgcoverbox' />
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div>
              <img src={MainPage} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>Login Page</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Functionality: Secure login system for administrators, featuring authentication and authorization mechanisms.</li>
            <li>Technologies Used: PHP for backend validation, JavaScript for client-side validation, and Bootstrap for responsive design.</li>
          </ul>
            <div className='flex space-x-5 mt-2'>
              <img src={CssLogo} className='w-10' alt="" />
              <img src={BootstrapLogo} className='w-10' alt="" />
              <img src={JavascriptLogo} className='w-10' alt="" />
              <img src={ReactLogo} className='w-10' alt="" />
              <img src={PhpLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4 '>
          <div>
            <img src={SalesPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Sales Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Provides real-time sales data, including daily, weekly, and monthly reports.</li>
          <li>Technologies Used: React.js for dynamic data display, MySQL for database management, and Chart.js for visual representation of sales trends.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={BuilderPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Process Builder Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Allows administrators to design and manage custom workflows for various restaurant operations.</li>
          <li>Technologies Used: JavaScript for workflow logic, PHP for backend integration, and React.js for interactive UI.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={PhpLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={IngredientPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Ingredients Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Manages inventory of ingredients, including stock levels, reorder points, and automated order triggers.</li>
          <li>Technologies Used: MySQL for database management, PHP for backend processing, and React.js for user interface.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={PhpLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={LabourPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Labor Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Manages HR duties, including employee scheduling, leave tracking, and payroll calculation.</li>
          <li>Technologies Used: PHP for backend calculations, MySQL for storing employee data, and React.js for an intuitive user interface.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={PhpLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={OverheadsPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Overheads Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Tracks and manages overhead costs based on historical data and management reports.</li>
          <li>Technologies Used: MySQL for data storage, PHP for backend processing, and React.js for displaying detailed expense information.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={PhpLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={CostingPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Costing Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Provides detailed cost analysis, including ingredient costs, labor costs, and overheads, to calculate overall profitability.</li>
          <li>Technologies Used: MySQL for cost data storage, PHP for backend processing, and React.js for cost breakdown visualization.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={PhpLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={FaqPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>FAQ Page</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Functionality: Provides answers to frequently asked questions, offering quick guidance to administrators.</li>
          <li>Technologies Used: Bootstrap and CSS for content structure and styling, and JavaScript for interactive elements.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className=''>
        <h1 className='text-center text-3xl sm:text-5xl my-2'>My Role and Contributions</h1>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='text-2xl'>
          <li>Ingredients Management</li>
          <li>Labor Management</li>
          <li>Overheads Management</li>
          <li>Team Collaboration</li>
          <li>Impact</li>
        </ul>
        <div className="boxes">
          <div className="box">
            <img src={IngredientPage} alt="" className='imgcoverbox' />
          </div>
          <div className="box">
            <img src={LabourPage} alt="" className='imgcoverbox' />
          </div>
          <div className="box">
            <img src={OverheadsPage} alt="" className='imgcoverbox' />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={IngredientPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Ingredients Management</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Role: Managed the inventory system, ensuring efficient tracking and ordering of ingredients.</li>
        </ul>
        <h3 className='my-3 text-2xl'>Key Contributions:</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Stock Management: Developed functionalities to monitor ingredient stock levels in real-time.</li>
          <li>Automated Reordering: Implemented automatic reorder triggers when stock levels fell below a predefined threshold.</li>
          <li>Inventory Analysis: Provided detailed analysis of ingredient usage trends to optimize ordering and reduce waste.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={LabourPage} alt="" className='image' />
          </div>
        </div>
        <div className='ml-10'>
        <h3 className='text-3xl sm:text-5xl my-2'>Labor Management</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Role: Managed HR functionalities, focusing on employee scheduling, payroll, and overall workforce management.</li>
        </ul>
        <h3 className='my-3 text-2xl'>Key Contributions:</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Scheduling and Attendance: Designed and implemented a system to track employee shifts, working hours, and leave.</li>
          <li>Payroll Calculation: Automated payroll processes, including calculations for bonuses, medical insurance, and other benefits for both local and foreign employees.</li>
          <li>Employee Records Management: Maintained a detailed database of employee records, ensuring accuracy and easy access for management.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div>
            <img src={OverheadsPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Overheads Management</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Role: Focused on tracking and managing overhead costs to ensure accurate financial reporting and cost control.</li>
        </ul>
        <h3 className='my-3 text-2xl'>Key Contributions:</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Expense Tracking: Developed features to input and monitor overhead expenses based on past audited figures or management reports.</li>
          <li>Cost Analysis: Implemented tools for detailed cost analysis, helping the management identify areas for potential savings.</li>
          <li>Financial Reporting: Provided clear and detailed financial reports, contributing to more informed decision-making by the management.</li>
        </ul>
          <div className='flex space-x-5 mt-2'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
      <section className="stacking-slide text-start">
        <h1 className='text-center text-2xl lg:text-5xl'>Team Collaboration & Impact</h1>
        <div className='boxes1 lg:text-xl section1'>
          <div className='box1'>
            <h3 className='text-center text-2xl lg:text-3xl'>Team Collaboration</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}className='lg:leading-8'>
          <li>Task Distribution: Managed the division of tasks related to ingredients, labor, and overheads, ensuring seamless integration into the overall system.</li>
          <li>Version Control: Regularly updated the codebase on GitHub, facilitating efficient collaboration and minimizing merge conflicts.</li>
          <li>Communication: Coordinated closely with team members through Microsoft Teams to address issues and maintain project momentum.</li>
        </ul>
          </div>
          <div className='box1 lg:text-xl'>
          <h3 className='text-center text-2xl lg:text-3xl'>Impact</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='lg:leading-8'>
          <li>Ingredient Management: Reduced food waste by 20% through optimized inventory control and automated reordering processes.</li>
          <li>Labor Management: Increased operational efficiency by 20% by streamlining scheduling and payroll processes.</li>
          <li>Overheads Management: Cut overall operational costs by 15% through accurate tracking and analysis of overhead expenses.</li>
        </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantPage;
