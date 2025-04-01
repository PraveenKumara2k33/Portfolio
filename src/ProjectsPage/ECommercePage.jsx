import { useEffect } from "react";
import "./RestaurantPage.css";
import HtmlLogo from "../assets/skills/html-5.svg";
import CssLogo from "../assets/skills/css3.svg";
import BootstrapLogo from "../assets/skills/bootstrap.svg";
import JavascriptLogo from "../assets/skills/javascript-svg.svg";
import TailWindLogo from "../assets/skills/tailwind.svg";
import ReactLogo from "../assets/skills/react.svg";
import NodeLogo from "../assets/skills/nodejs.svg";
import AuthenticationLogo from "../assets/skills/Authentication.svg";
import GithubLogo from "../assets/skills/github.svg";
import MainPage from "../assets/Ecommerce/e-commercemain.jpg";
import LogPage from "../assets/Ecommerce/login-out.jpg";
import BuyPage from "../assets/Ecommerce/Buy.png";
import CheckoutPage from "../assets/Ecommerce/Checkout.png";
import ComparePage from "../assets/Ecommerce/Compare.png";
import HomePage from "../assets/Ecommerce/Home.png";
import ReviewPage from "../assets/Ecommerce/Review.png";
import SimilarPage from "../assets/Ecommerce/Similar.png";
import ViewPage from "../assets/Ecommerce/View.png";

const ECommercePage = () => {
  useEffect(() => {
    const sectionEls = document.querySelectorAll(".stacking-slide");

    const options = {
      rootMargin: "-10% 0% -10% 0%",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-intersecting");
        } else {
          entry.target.classList.remove("is-intersecting");
        }
      });
    }, options);

    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      sectionEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="vertical-scroll-snap lg:text-sm/8">
      <section className="stacking-slide text-start">
        <h1 className="text-center text-3xl sm:text-5xl my-5 RestaurantHeading">
          Web Development
        </h1>
        <div className="flex section1">
          <div className="lg:w-2/4 widthimg">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-lg sm:text-2xl">
              Project Title: Real-Time E-Commerce Website with Secure
              Authentication
            </h3>
            <p>Duration: May to June 2024 </p>
            <p>Individual Project</p>
            <p>Technologies Used:</p>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={HtmlLogo} className="w-10" alt="" />
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={NodeLogo} className="w-10" alt="" />
              <img src={AuthenticationLogo} className="w-10" alt="" />
            </div>
            <div className="mt-3 border w-fit p-2">
              <a
                href="https://github.com/PraveenKumara2k33/E-Commerce.git"
                target="_blank"
                className="flex"
              >
                <img src={GithubLogo} alt="" className="w-8" />{" "}
                <span className="ml-2 my-1">GitHub</span>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <p className="text-xl">
          Designed and developed a dynamic Real-Time E-Commerce Website,
          focusing on secure user authentication and seamless real-time
          interactions to enhance customer engagement and improve the shopping
          experience.
        </p>
        <h2 className="font-serif font-semibold my-2">
          Key Pages and Functionalities
        </h2>
        <ul
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
          className="font-serif"
        >
          <li>Front-End Development</li>
          <li>Real-Time Features</li>
          <li>Backend Integration</li>
          <li>Data Management</li>
          <li>Authentication</li>
          <li>Custom Styling</li>
          <li>Costing Page</li>
          <li>FAQ Page</li>
        </ul>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Front-End Development</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Developed responsive and user-friendly interfaces using ReactJS.
              </li>
              <li>
                Employed Bootstrap for grid layout and Tailwind CSS for custom
                styling, ensuring a modern aesthetic.
              </li>
              <li>
                Implemented accessibility features to enhance usability for all
                users.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4 ">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Real-Time Features</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Integrated Socket.IO for real-time notifications, such as new
                product arrivals and updates on customer orders.
              </li>
              <li>
                Enabled live chat support for immediate customer assistance,
                improving engagement.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Backend Integration</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Utilized Node.js to create RESTful APIs for handling requests
                from the frontend.
              </li>
              <li>
                Managed data storage and retrieval using JSON files for products
                and user information, allowing for easy updates.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={NodeLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Data Management</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Implemented functionalities for product updates, including
                adding, editing, and removing items.
              </li>
              <li>
                Designed a search and filter system to enhance product
                discoverability.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Authentication</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Developed secure authentication mechanisms, including user
                registration, login, and logout functionalities.
              </li>
              <li>
                Ensured password hashing and secure session management to
                protect user information.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={AuthenticationLogo} className="w-10" alt="" />
              <img src={NodeLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={MainPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Custom Styling</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Applied custom CSS for unique design elements, such as buttons
                and forms, to create a cohesive visual identity.
              </li>
              <li>
                Created responsive designs to ensure optimal viewing across
                various devices.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="">
          <h1 className="text-center text-3xl sm:text-5xl my-2">
            Page Structure
          </h1>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="text-2xl"
          >
            <li>Login Page</li>
            <li>Logout Page</li>
            <li>Overheads Management</li>
            <li>Home Page</li>
            <li>Shop Page</li>
            <li>Similar Products Page</li>
            <li>Customer Review Page</li>
            <li>Compare Product Page</li>
            <li>Buy Product Page</li>
            <li>Checkout Page</li>
          </ul>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div className="e-commerce">
              <img src={LogPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Login Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                User-friendly interface for login with email and password
                fields.
              </li>
              <li>Error messages for incorrect credentials.</li>
              <li>
                Options for &quot;Remember Me&quot; and password recovery.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={AuthenticationLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div className="e-commerce">
              <img src={LogPage} alt="" className="image" />
            </div>
          </div>
          <div className="ml-10">
            <h3 className="text-3xl sm:text-5xl my-2">Logout Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Confirmation message upon logging out.</li>
              <li>
                Payroll Calculation: Automated payroll processes, including
                calculations for bonuses, medical insurance, and other benefits
                for both local and foreign employees.
              </li>
              <li>Redirection to the home page after successful logout.</li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
              <img src={AuthenticationLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={HomePage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Home Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Dynamic display of featured products and promotions.</li>
              <li>
                Quick access to popular categories and search functionality.
              </li>
              <li>
                Welcome message with personalized greetings for logged-in users.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={ViewPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Shop Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Comprehensive product listings with filters (category, price,
                etc.).
              </li>
              <li>Sorting options (e.g., by popularity, price, and newest).</li>
              <li>
                Pagination for seamless navigation through multiple product
                pages.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={SimilarPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Similar Products Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Display of related products based on user selection.</li>
              <li>
                Option to compare features and prices with the selected product.
              </li>
              <li>User ratings and reviews to assist in decision-making.</li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={ReviewPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Customer Review Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Section for users to leave reviews and ratings for products.
              </li>
              <li>
                Display of existing customer reviews to build trust and
                credibility.
              </li>
              <li>Filters to view reviews by star rating or most recent.</li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={ComparePage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Compare Product Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Side-by-side comparison of selected products.</li>
              <li>
                Highlights of differences in features, prices, and user ratings.
              </li>
              <li>
                Call-to-action buttons to encourage purchasing or further
                exploration.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div className="ec-buy">
              <img src={BuyPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Buy Product Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Detailed view of the selected product, including images,
                descriptions, and price.
              </li>
              <li>Options for quantity selection and adding to cart.</li>
              <li>Availability status and estimated delivery times.</li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stacking-slide text-start">
        <div className="flex section1">
          <div className="lg:w-2/4">
            <div>
              <img src={CheckoutPage} alt="" className="image" />
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl sm:text-5xl my-2">Buy Product Page</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                Secure checkout process with options for guest checkout or user
                login.
              </li>
              <li>
                Input fields for shipping information, payment methods, and
                order summary.
              </li>
              <li>
                Confirmation of order placement and estimated delivery dates.
              </li>
            </ul>
            <div className="flex space-x-5 mt-2 flex-wrap">
              <img src={CssLogo} className="w-10" alt="" />
              <img src={BootstrapLogo} className="w-10" alt="" />
              <img src={TailWindLogo} className="w-10" alt="" />
              <img src={JavascriptLogo} className="w-10" alt="" />
              <img src={ReactLogo} className="w-10" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommercePage;
