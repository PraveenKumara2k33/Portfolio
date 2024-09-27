import  { useEffect } from 'react';
import './RestaurantPage.css';
import CssLogo from '../assets/skills/css3.svg';
import BootstrapLogo from '../assets/skills/bootstrap.svg';
import JavascriptLogo from '../assets/skills/javascript-svg.svg';
import TailWindLogo from '../assets/skills/tailwind.svg';
import ReactLogo from '../assets/skills/react.svg';
import JavaLogo from '../assets/skills/java.svg';
import SQLLogo from '../assets/skills/mysql.svg';
import MainPage from '../assets/webchat/ebill.jpg';


const EBillPage = () => {
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
        <h1 className='text-center text-3xl sm:text-5xl my-5'>Java Development</h1>
        <div className='flex section1'>
        <div className='lg:w-2/4'>
          <div className='ebill'>
            <img src={MainPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-lg sm:text-2xl'>Project Title: Electricity Billing System</h3>
        <p>Duration: Jan 2022 to Mar 2022 </p>
        <p>Team Size: 3 members</p>
        <p>Technologies Used:</p>
        <div className='flex space-x-5 mt-2 flex-wrap'>
            <img src={JavaLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
        </div>
        </div>
        </div>  
      </section>
      <section className="stacking-slide text-start">
        <p className='text-xl'>
          Designed and implemented a comprehensive Electricity Billing System, 
          focusing on automating bill calculations, customer management, and payment processing,
          ensuring operational efficiency and ease of use for utility providers and consumers.
        </p>
        <h2 className='font-serif font-semibold my-2'>Key Features</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='font-serif'>
            <li>User Authentication and Security</li>
            <li>Customer Management</li>
            <li>Meter Information Management</li>
            <li>Bill Calculation Automation</li>
            <li>Authentication</li>
            <li>Payment Processing</li>
            <li>Bill Generation</li>
            <li>Reporting & History Tracking</li>
          </ul>
      </section>
      <section className="stacking-slide text-start">
        <div className='flex section1'>
          <div className='lg:w-2/4'>
            <div>
              <img src={MainPage} alt="" className='image' />
            </div>
          </div>
          <div className=''>
          <h3 className='text-3xl sm:text-5xl my-2'>User Authentication and Security</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Implemented a secure login system where users can create and manage personal login credentials.</li>
            <li>Ensured that only authorized users, such as administrators and employees, have access to sensitive billing information.</li>
          </ul>
            <div className='flex space-x-5 mt-2 flex-wrap'>
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
            </div>
          </div>
        </div> 
      </section>
      <section className="stacking-slide text-start">
      <div className='flex section1'>
        <div className='lg:w-2/4 '>
          <div>
            <img src={MainPage} alt="" className='image' />
          </div>
        </div>
        <div className=''>
        <h3 className='text-3xl sm:text-5xl my-2'>Customer Management</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Users can add new customer profiles, including details like name, address, meter number, and contact information.</li>
          <li>Customers’ details are stored in a MySQL database, enabling easy retrieval, update, and deletion of records.</li>
          <li>Integrated customer history tracking, allowing users to view past bills and payment history for better customer service.</li>
        </ul>
          <div className='flex space-x-5 mt-2 flex-wrap'>
              <img src={JavaLogo} className='w-10' alt="" />
              <img src={SQLLogo} className='w-10' alt="" />
          </div>
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
        <h3 className='text-3xl sm:text-5xl my-2'>Meter Information Management</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Comprehensive meter information stored in a dedicated table, including meter type, location, phase code, and associated billing rates.</li>
          <li>System automates tracking of meter-related data, making it easier to manage for utility companies.</li>
        </ul>
          <div className='flex space-x-5 mt-2 flex-wrap'>
            <img src={JavaLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
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
        <h3 className='text-3xl sm:text-5xl my-2'>Bill Calculation Automation</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Integrated logic to calculate electricity bills based on meter readings and customer usage (in units).</li>
          <li>Billing formulas account for fixed taxes, variable costs, meter rent, and service charges, with automatic inclusion of government-mandated taxes (e.g., Swacch Bharat Cess).</li>
          <li>The system automatically calculates monthly bills, ensuring accurate and timely processing.</li>
        </ul>
          <div className='flex space-x-5 mt-2 flex-wrap'>
            <img src={JavaLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
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
        <h3 className='text-3xl sm:text-5xl my-2'>Payment Processing</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Users can record and manage payments for electricity bills within the system.</li>
          <li>Payment status is updated in real time and stored in the database, with features to track overdue bills and unpaid accounts.</li>
        </ul>
          <div className='flex space-x-5 mt-2 flex-wrap'>
            <img src={JavaLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
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
        <h3 className='text-3xl sm:text-5xl my-2'>Bill Generation</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Automatically generates printable electricity bills after payment confirmation or upon request.</li>
          <li>Bills include detailed breakdowns such as energy usage, meter rent, taxes, and total cost.</li>
          <li>Users can generate, view, and print bills for customers, enabling smooth operation and documentation.</li>
        </ul>
          <div className='flex space-x-5 mt-2 flex-wrap'>
            <img src={CssLogo} className='w-10' alt="" />
            <img src={BootstrapLogo} className='w-10' alt="" />
            <img src={JavascriptLogo} className='w-10' alt="" />
            <img src={ReactLogo} className='w-10' alt="" />
            <img src={TailWindLogo} className='w-10' alt="" />
          </div>
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
        <h3 className='text-3xl sm:text-5xl my-2'>Reporting & History Tracking</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>The system allows users to generate monthly, quarterly, or annual reports based on customer consumption, payment status, and revenue collection.</li>
          <li>Easily track and report electricity usage patterns, customer payment statuses, and total collections over time.</li>
        </ul>
          <div className='flex space-x-5 mt-2 flex-wrap'>
            <img src={JavaLogo} className='w-10' alt="" />
            <img src={SQLLogo} className='w-10' alt="" />
          </div>
        </div>
      </div> 
      </section>
    </div>
  );
};

export default EBillPage;
