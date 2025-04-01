import { useEffect, useRef } from "react";
import { TiTick } from "react-icons/ti";
import "./Project.css";

const Project = () => {
  const cardsContainerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;
    const cards = Array.from(document.querySelectorAll(".card"));

    const applyOverlayMask = (e) => {
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      e.currentTarget.style.setProperty("--opacity", "1");
      e.currentTarget.style.setProperty("--x", `${x}px`);
      e.currentTarget.style.setProperty("--y", `${y}px`);
    };

    const createOverlayCta = (ctaText) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaText;
      overlayCta.setAttribute("aria-hidden", true);
      return overlayCta;
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
        if (cardIndex >= 0) {
          overlay.children[cardIndex].style.width = `${width}px`;
          overlay.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      overlayCard.append(createOverlayCta(cardEl.lastElementChild.textContent));
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);

    return () => {
      document.body.removeEventListener("pointermove", applyOverlayMask);
    };
  }, []);

  const cardData = [
    {
      title: "Front-end Web Development",
      subtitle: "Restaurant Management Admin Panel",
      features: [
        "Ingredients Management: Developed real-time stock monitoring and automated reordering, reducing food waste by 20%.",
        "Labor Management: Streamlined scheduling and payroll processes, increasing efficiency by 20%.",
        "Overheads Management: Implemented cost tracking and analysis, cutting operational costs by 15%.",
      ],
      cta: "Read More",
      link: "/Restaurant",
    },
    {
      title: "Java Development",
      subtitle: "Web-Based Chat Application",
      features: [
        "Developed a Web-Based Chat Application: Utilized Java, Servlets, JSP, and MySQL to build a real-time chat system.",
        "Integrated User Interaction: Enabled real-time messaging with a dynamic front-end using HTML, CSS, and JavaScript.",
        "Database Management: Designed and implemented MySQL database schemas for message and user management.",
      ],
      cta: "Read More",
      link: "/ChatApplication",
    },
    {
      title: "WordPress Development",
      subtitle: "Optimizing WordPress with AI and Customization",
      features: [
        "AI Chatbot Integration: Enhanced user interaction with a real-time chatbot, boosting engagement.",
        "Image Gallery: Implemented a dynamic gallery with pagination, increasing user engagement by 30%.",
        "Website Customization: Improved readability and user experience with customized web styles, achieving a 20% enhancement.",
      ],
      cta: "Read More",
      link: "/WordPress",
    },
    {
      title: "Web Development",
      subtitle: "Real-Time E-Commerce Website with Secure Authentication",
      features: [
        "Front-End Development: Built responsive UIs with ReactJS, styled using Bootstrap and Tailwind CSS.",
        "Real-Time & Backend: Integrated Socket.IO for live updates and used Node.js for server-side logic and JSON data management.",
        "Authentication: Implemented secure user authentication and custom CSS for enhanced visual design.",
      ],
      cta: "Read More",
      link: "/ECommerce",
    },
    {
      title: "Java Development",
      subtitle: "Electricity Billing System",
      features: [
        "Java-Based Electricity Billing System: Created with Java Swing for the GUI, Core Java for backend functionality, and MySQL with JDBC for database integration.",
        "Features: Includes user login, customer management, bill calculation, payment processing, and bill generation.",
        "Database Integration: Implemented MySQL database with tables for user, billing, and customer data, using JDBC for connectivity.",
      ],
      cta: "Read More",
      link: "/EBill",
    },
    {
      title: "Front-end Web Development",
      subtitle: "Portfolio",
      features: [
        "React.js Portfolio Website: Built a responsive portfolio using React.js, Bootstrap, Tailwind CSS, and React Router DOM, featuring sections like About, Qualifications, Skills, and Projects.",
        "Data Visualization: Integrated ApexCharts to display academic marks and performance metrics with interactive charts.",
        "UI/UX Design: Ensured a sleek, mobile-friendly interface with smooth navigation and a modern design.",
      ],
      cta: "Read More",
      link: "/",
    },
  ];

  return (
    <div className="main flow Project" id="Project">
      <h1 className="main__heading text-5xl my-4 ProjectHeading">Projects</h1>
      <div className="main__cards cards" ref={cardsContainerRef}>
        <div className="cards__inner">
          {cardData.map(({ title, subtitle, features, cta, link }, index) => (
            <div className="cards__card card" key={index}>
              <h2 className="card__heading">{title}</h2>
              <p className="card__price">{subtitle}</p>
              <div className="card__bullets flow">
                {features.map((feature, idx) => (
                  <div className="bullet" key={idx}>
                    <TiTick className="bullet-icon" />
                    {feature}
                  </div>
                ))}
              </div>
              <a href={link} className="card__cta cta">
                {cta}
              </a>
            </div>
          ))}
        </div>
        <div className="overlay cards__inner" ref={overlayRef}></div>
      </div>
    </div>
  );
};

export default Project;
