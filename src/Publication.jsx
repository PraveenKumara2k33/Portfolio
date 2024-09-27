import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import './Publication.css';
import BlackBoxLogo from './assets/skills/BlackBox.jpg';

const Publication = () => {
  const [activeKey, setActiveKey] = useState("0"); // Default active key set to "0"

  useEffect(() => {
    setActiveKey("0"); // Ensures accordion is open after refresh
  }, []);

  return (
    <>
      <div className='mt-10' id='publication'>
        <h1 className="font-serif text-5xl my-5 text-white">Publications</h1>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2'>
            <img src={BlackBoxLogo} className='h-3/4 rounded-2xl m-5 iotimage' alt="Black Box" />
          </div>
          <div className='w-full md:w-1/2'>
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key === activeKey ? null : key)} flush>
              <Accordion.Item eventKey="0" className={`accordion-item-custom ${activeKey === "0" ? 'active' : ''} bg-black`}>
                <Accordion.Header>
                  Black Box Testing Design Intended for Vehicle Surveillance and Tracking
                </Accordion.Header>
                <Accordion.Body>
                  <ul className='text-start'>
                    <li>Problem Focus: Growing need for protection and safety due to frequent vehicle accidents and fatalities.</li>
                    <li>Technology Requirement: Current vehicle systems need enhanced surveillance and tracking features using IoT technology.</li>
                    <li>Black Box Concept: The proposed system functions like a &quot;black box&quot; for vehicles, recording data on vehicle movement before and after collisions.</li>
                    <li>Crash Detection: In the event of a crash, the system notifies the police or rescue teams with key details, such as auto identification number and contact information, aiding in fast response.</li>
                    <li>IoT Integration: IoT is utilized for vehicle security, protecting against issues like theft and repossession.</li>
                    <li>Remote Control: Users can control the vehicle`s engine (turn ON/OFF) via a mobile app, and the vehicle can be tracked 24/7.</li>
                    <li>GSM Network: GSM is used to handle issues with keyless entry systems and to remotely unlock vehicles if needed.</li>
                    <li>Data Analysis: A graphical interface helps analyze backup data, similar to an airplane black box system.</li>
                    <li>Benefits: The system improves incident detection, severity determination, and vehicle tracking, enhancing overall vehicle safety.</li>
                    <li>Keywords: IoT, sensors, black box, theft protection, GSM, GPS tracking.</li>
                  </ul>
                  <div className='flex justify-center space-x-5 text-2xl'>
                    <a href="https://ieeexplore.ieee.org/document/10099824" target="_blank" rel="noopener noreferrer" className='text-white border md:p-3 md:mt-4 flex publicationbox'>
                      Publication <GoArrowUpRight className='ml-3 text-center mt-1 sm:font-bold pubicon' />
                    </a>
                    <a href="./assets/Vehicle Surveillance and Tracking - IEEE.doc" download className='text-white border md:p-3 md:mt-4 flex publicationbox'>
                      View Docs <FaArrowDown className='ml-3 align-middle mt-1 md:font-bold pubicon' />
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publication;
