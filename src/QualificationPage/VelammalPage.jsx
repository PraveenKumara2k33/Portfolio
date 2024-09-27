import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import './VelammalPage.css'; // Link to the custom CSS file

const VelammalPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const barChartOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      foreColor: "#ffffff", // Set text color to white
    },
    colors: ["#0000FF", "#008000", "#FF0000", "#EE82EE", "#FFA500", "#4B0082", "#008080", "#A9A9A9"], // Individual colors
    plotOptions: {
      bar: {
        distributed: true, // Different color for each bar
      }
    },
    xaxis: {
      categories: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], // Semesters
      title: {
        text: "Semester", // X-axis title
        style: {
          color: "#ffffff"
        }
      },
      labels: {
        style: {
          colors: "#ffffff" // White text for x-axis
        }
      }
    },
    yaxis: {
      min: 0,
      max: 10,
      tickAmount: 5, // 0, 2, 4, 6, 8, 10
      labels: {
        formatter: (val) => parseInt(val),
        style: {
          colors: "#ffffff"
        }
      },
      title: {
        text: "Score",
        style: {
          color: "#ffffff"
        }
      }
    },
    grid: {
      borderColor: "#ffffff", // White grid lines
      strokeDashArray: 4,
    },
    tooltip: {
      enabled: false // Disable hover tooltips
    }
  };

  const donutChartOptions = {
    chart: {
      id: "basic-donut", // Donut chart type
      toolbar: {
        show: false
      },
      foreColor: "#ffffff", // Set text color to white
    },
    colors: ["#0000FF", "#008000", "#FF0000", "#EE82EE", "#FFA500", "#4B0082", "#008080", "#A9A9A9"], // Individual colors
    labels: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], // Donut chart labels
    plotOptions: {
      pie: {
        donut: {
          size: '65%', // Adjust the size of the donut for mobile view
        },
        dataLabels: {
          enabled: true, // Enable data labels
          formatter: function (val, opts) {
            return `${opts.w.config.series[opts.seriesIndex]}`; // Display exact values
          },
          style: {
            fontSize: '14px',
            colors: ['#FFFFFF'] // White color for the data labels
          }
        }
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return `${val}`; // Display exact values in tooltips
        }
      }
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          width: '100%' // Make chart width responsive for mobile
        }
      }
    }]
  };

  const series = [7.1, 9, 8.4, 9.5, 9.1, 7.9, 8, 8.6]; // Data for both charts

  return (
    <div className="velammal-page">
      <div className="velammal-chart">
        {isMobile ? (
          <Chart options={donutChartOptions} series={series} type="donut" width="300" />
        ) : (
          <Chart options={barChartOptions} series={[{ name: "series-1", data: series }]} type="bar" width="500" />
        )}
      </div>
      <div className="velammal-content">
        <h1 className="text-center font-extrabold text-4xl">Velammal Institute of Technology</h1>
        <div className="mt-3">
          <h3><strong>Degree:</strong> Bachelor of Technology (B.Tech)</h3>
          <p><strong>Stream:</strong> Information Technology (IT)</p>
          <p><strong>Duration:</strong> Aug 2019 – May 2023</p>
          <p><strong>CGPA:</strong> First Class Distinction (<span className="">8.56</span>)</p>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-3xl">Key Highlights</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Core Courses:</strong> Operating Systems, Data Structures, Analysis of Algorithms, Artificial Intelligence, Advanced OOPs, and more.</li>
            <li><strong>Research Publication:</strong> Authored and published a paper titled &quot;Black Box for Vehicle to Track Performance and Driving Behavior&quot;.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-3xl">Certifications</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Java, CSS, SQL, and React, earned through HackerRank.</li>
            <li>Extensive coding practice and problem-solving through <a href="https://www.skillrack.com/faces/resume.xhtml?id=320627&key=b613186118ca2f8cfe1ceba5d9d4b9614c38cfda" target="_blank" rel="noopener noreferrer" className="underline decoration-pink-500 hover:bg-pink-500 hover:p-2">Skillrack</a> and <a href="https://www.hackerrank.com/profile/apraveenkumar720" target="_blank" rel="noopener noreferrer" className="underline decoration-teal-400 hover:bg-teal-400 hover:p-2">HackerRank</a> platforms.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-3xl">Additional Skills</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Strengthened analytical and programming skills through competitive coding.</li>
            <li>Collaborated on real-world projects and gained practical knowledge of advanced software technologies.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VelammalPage;
