import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import './Publication.css';
import BlackBoxLogo from './assets/skills/BlackBox.jpg';

const Publication = () => {
  const [activeKey, setActiveKey] = useState("0"); // Default active key

  useEffect(() => {
    setActiveKey("0"); // Ensures accordion is open after refresh
  }, []);

  const publications = [
    {
      id: "0",
      title: "Black Box Testing Design Intended for Vehicle Surveillance and Tracking",
      description: [
        "Problem Focus: Growing need for protection and safety due to frequent vehicle accidents and fatalities.",
        "Technology Requirement: Current vehicle systems need enhanced surveillance and tracking features using IoT technology.",
        "Black Box Concept: The proposed system functions like a 'black box' for vehicles, recording data on vehicle movement before and after collisions.",
        "Crash Detection: In the event of a crash, the system notifies the police or rescue teams with key details, such as auto identification number and contact information, aiding in fast response.",
        "IoT Integration: IoT is utilized for vehicle security, protecting against issues like theft and repossession.",
        "Remote Control: Users can control the vehicle's engine (turn ON/OFF) via a mobile app, and the vehicle can be tracked 24/7.",
        "GSM Network: GSM is used to handle issues with keyless entry systems and to remotely unlock vehicles if needed.",
        "Data Analysis: A graphical interface helps analyze backup data, similar to an airplane black box system.",
        "Benefits: The system improves incident detection, severity determination, and vehicle tracking, enhancing overall vehicle safety.",
        "Keywords: IoT, sensors, black box, theft protection, GSM, GPS tracking."
      ],
      publicationLink: "https://ieeexplore.ieee.org/document/10099824",
      documentLink: "./assets/Vehicle Surveillance and Tracking - IEEE.doc"
    }
  ];

  return (
    <div className='mt-10' id='publication'>
      <h1 className="font-serif text-5xl my-5 text-white PublicationHeading">Publications</h1>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2'>
          <img src={BlackBoxLogo} className='h-3/4 rounded-2xl m-5 iotimage' alt="Black Box" />
        </div>
        <div className='w-full md:w-1/2'>
          <Accordion activeKey={activeKey} onSelect={key => setActiveKey(key === activeKey ? null : key)} flush>
            {publications.map(({ id, title, description, publicationLink, documentLink }) => (
              <Accordion.Item eventKey={id} className={`accordion-item-custom ${activeKey === id ? 'active' : ''} bg-black`} key={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                  <ul className='text-start'>
                    {description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className='flex justify-center space-x-5 text-2xl'>
                    <a href={publicationLink} target="_blank" rel="noopener noreferrer" className='text-white border md:p-3 md:mt-4 flex publicationbox'>
                      Publication <GoArrowUpRight className='ml-3 text-center mt-1 sm:font-bold pubicon' />
                    </a>
                    <a href={documentLink} download className='text-white border md:p-3 md:mt-4 flex publicationbox'>
                      View Docs <FaArrowDown className='ml-3 mr-2 align-middle mt-1 md:font-bold pubicon' />
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Publication;
