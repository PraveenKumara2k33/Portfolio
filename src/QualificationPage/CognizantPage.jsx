import { useEffect } from "react";
import "./CognizantPage.css"; // Ensure this file contains your CSS styles

const CognizantPage = () => {
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
        <div className="lg:w-1/2 content-center">
          <h1 className="hover-this lg:text-4xl text-2xl">
            Cognizant Technology Solutions
          </h1>
          <h3 className="hover-this lg:text-2xl text-xl">
            Java Development Intern
          </h3>
          <p className="hover-this ">
            Duration: June 2024 - July 2024 | Remote
          </p>
        </div>
        <div>
          <div className="text-start">
            <p className="hover-this py-2">
              <span className="spanh1">Java Track Training:</span> <br />
              <span className="spanh2">
                Immersed in advanced web development and Java technologies,
                including JSP, Servlets, and Spring Boot.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Comprehensive Skill Set:</span>
              <br />
              <span className="spanh2">
                Developed proficiency in HTML, CSS, JavaScript, SQL, and
                core/advanced Java.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Real-World Application:</span>
              <br />
              <span className="spanh2">
                Applied knowledge to solve real-world challenges through
                practical assignments on Cognizant’s CSD platform.
              </span>
            </p>
            <p className="hover-this py-2">
              <span className="spanh1">Outstanding Performance:</span>
              <br />
              <span className="spanh2">
                Achieved an average score of 80% across four rigorous
                assessments, demonstrating consistent excellence.
              </span>
            </p>
            <div className="cursor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CognizantPage;
