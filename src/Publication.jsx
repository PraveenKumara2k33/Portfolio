/* eslint-disable react/no-unescaped-entities */
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import "./Publication.css";
import BlackBoxLogo from "./assets/skills/BlackBox.jpg";

const Publication = () => {
  return (
    <div className="mt-10" id="publication">
      <h1 className="font-serif text-4xl sm:text-5xl my-5 text-white text-center">
        Publications
      </h1>
      <div className="flex flex-wrap w-full">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 px-4 flex justify-center">
          <img
            src={BlackBoxLogo}
            className="rounded-2xl w-full h-auto sm:max-h-80 object-cover m-5"
            alt="Black Box"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-1/2 px-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white my-4 publication-border">
            Black Box Testing Design Intended for Vehicle Surveillance and
            Tracking
          </h2>
          <ol className="text-start text-sm sm:text-base text-gray-300 space-y-2 list-decimal list-inside">
            <li>
              Problem Focus: Growing need for protection and safety due to
              frequent vehicle accidents and fatalities.
            </li>
            <li>
              Technology Requirement: Current vehicle systems need enhanced
              surveillance and tracking features using IoT technology.
            </li>
            <li>
              Black Box Concept: The proposed system functions like a ' black
              box ' for vehicles, recording data on vehicle movement before and
              after collisions.
            </li>
            <li>
              Crash Detection: In the event of a crash, the system notifies the
              police or rescue teams with key details, such as auto
              identification number and contact information, aiding in fast
              response.
            </li>
            <li>
              IoT Integration: IoT is utilized for vehicle security, protecting
              against issues like theft and repossession.
            </li>
            <li>
              Remote Control: Users can control the vehicle's engine (turn
              ON/OFF) via a mobile app, and the vehicle can be tracked 24/7.
            </li>
            <li>
              GSM Network: GSM is used to handle issues with keyless entry
              systems and to remotely unlock vehicles if needed.
            </li>
            <li>
              Data Analysis: A graphical interface helps analyze backup data,
              similar to an airplane black box system.
            </li>
            <li>
              Benefits: The system improves incident detection, severity
              determination, and vehicle tracking, enhancing overall vehicle
              safety.
            </li>
            <li>
              Keywords: IoT, sensors, black box, theft protection, GSM, GPS
              tracking.
            </li>
          </ol>
          {/* Buttons */}
          <div className="flex justify-center space-x-5 mt-6">
            <a
              href="https://ieeexplore.ieee.org/document/10099824"
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-white py-2 px-4 rounded-lg flex items-center hover:bg-white hover:text-black transition-all"
            >
              Publication <GoArrowUpRight className="ml-2" />
            </a>
            <a
              href="./assets/Vehicle Surveillance and Tracking - IEEE.doc"
              download
              className="border border-white  py-2 px-4 rounded-lg flex items-center hover:bg-white hover:text-black  transition-all"
            >
              View Docs <FaArrowDown className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
