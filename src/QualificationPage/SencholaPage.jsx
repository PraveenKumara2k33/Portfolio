import { useEffect } from "react";
import "./CognizantPage.css"; // Ensure this file contains your CSS styles

const SencholaPage = () => {
  useEffect(() => {
    const links = document.querySelectorAll(
      ".cognizant-page nav > .hover-this"
    );
    const cursor = document.querySelector(".cognizant-page .cursor");

    const animateit = function (e) {
      const span = this.querySelector("span");
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;

      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") span.style.transform = "";
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    links.forEach((b) => b.addEventListener("mousemove", animateit));
    links.forEach((b) => b.addEventListener("mouseleave", animateit));
    window.addEventListener("mousemove", editCursor);

    return () => {
      links.forEach((b) => b.removeEventListener("mousemove", animateit));
      links.forEach((b) => b.removeEventListener("mouseleave", animateit));
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);

  return (
    <div className="cognizant-page nav-wrapper">
      <div className="navid">
        <div className="lg:w-full content-center">
          <h1 className="hover-this lg:text-4xl text-2xl">
            Senchola Technology Solutions
          </h1>
          <h3 className="hover-this lg:text-2xl text-xl">
            Front-end & Wordpress Development Intern
          </h3>
          <p className="hover-this ">Duration: Sep 2023 - May 2024 | Remote</p>
        </div>
        <div>
          <div className="text-start lg:w-full senchola">
            <p className="hover-this py-2">
              <span className="spanh1">
                Frontend Developer(Dec 2023 - May 2024):
              </span>{" "}
              <br />
              <span className="spanh1">Training & Skill Development:</span>
              <br />
              <span className="spanh2">
                {" "}
                Completed an intensive two-month training on HTML, CSS,
                JavaScript, and React.js, mastering front-end development
                essentials that paved the way for live project involvement.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Project Involvement:</span>
              <br />
              <span className="spanh2">
                Collaborated as part of a 4-member team to design and implement
                a powerful admin panel for a Restaurant Management System.
                Leveraged technologies like HTML, CSS, Bootstrap, JavaScript,
                React.js, PHP, and MySQL to build a comprehensive and efficient
                platform.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Core Contributions:</span> <br />
              <span className="spanh1">Ingredients Management:</span>
              <br />
              <span className="spanh2">
                Developed real-time inventory tracking, automated reorder
                alerts, and in-depth usage analysis, contributing to a 20%
                reduction in food waste.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Labor Management:</span>
              <br />
              <span className="spanh2">
                Created modules for employee scheduling, payroll automation, and
                employee record management, boosting operational efficiency by
                20%.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Overheads Management:</span>
              <br />
              <span className="spanh2">
                Designed tools to track and analyze operational expenses,
                cutting overhead costs by 15%.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Team Leadership & Collaboration:</span>
              <br />
              <span className="spanh2">
                Managed 20% of the project tasks and ensured smooth integration
                through GitHub version control. Worked closely with team members
                via Microsoft Teams to maintain consistent progress and
                troubleshoot issues.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Result & Impact:</span>
              <br />
              <span className="spanh2">
                Improved team productivity by 20%, enhanced sales accuracy by
                25% with real-time data, and reduced food waste by 20% through
                proactive alert systems.
              </span>
            </p>
            <p className="hover-this mt-3 py-2">
              <span className="spanh1 my-5">
                WordPress Developer (Sep 2023 - Dec 2023)
              </span>
              <br />
              <span className="spanh1">Training & Onboarding: </span> <br />
              <span className="spanh2">
                Successfully completed a thorough two-month training program,
                which provided hands-on experience with WordPress development.
                Transitioned into active project work by the third month.
              </span>
            </p>
            <p className="hover-this  py-2">
              <span className="spanh1 my-5">Key Achievements</span>
              <br />
              <span className="spanh1">AI Chatbot Integration: </span> <br />
              <span className="spanh2">
                Integrated an AI chatbot, enhancing website functionality and
                boosting customer engagement with real-time query responses.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Dynamic Image Gallery:</span>
              <br />
              <span className="spanh2">
                Developed a feature-rich image gallery with pagination,
                resulting in a 30% increase in user engagement by offering a
                more streamlined and accessible user experience.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Website Customization:</span>
              <br />
              <span className="spanh2">
                Applied custom styles to improve visual aesthetics and
                navigation, leading to a 20% increase in website readability
                across devices and enhancing overall user experience.
              </span>
            </p>
            <div className="cursor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SencholaPage;
