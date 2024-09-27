import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import './VelammalPage.css'; // Link to the custom CSS file

const AyyanarPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Run on mount
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const barOptions = {
    chart: {
      toolbar: { show: false },
      foreColor: "#ffffff",
    },
    plotOptions: {
      bar: { distributed: true },
    },
    xaxis: {
      categories: ["Tamil", "English", "Maths", "Physics", "Chemistry", "Computer Science"],
      title: { text: "Subjects", style: { color: "#ffffff" } },
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: { formatter: (val) => parseInt(val), style: { colors: "#ffffff" } },
      title: { text: "Marks", style: { color: "#ffffff" } },
    },
    grid: { borderColor: "#ffffff", strokeDashArray: 4 },
    tooltip: { enabled: false },
  };

  const donutOptions = {
    chart: {
      toolbar: { show: false },
      foreColor: "#ffffff",
    },
    labels: ["Tamil", "English", "Maths", "Physics", "Chemistry", "Computer Science"],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex]; // Display the exact value
      },
      style: {
        fontSize: '16px',
        colors: ["#ffffff"], // Label color
      },
    },
    legend: { position: "bottom", labels: { colors: "#ffffff" } },
    colors: ["#0000FF", "#008000", "#FF0000", "#EE82EE", "#FFA500", "#4B0082"],
  };

  const hsc2Series = [86, 81, 50, 69, 80, 81];
  const hsc1Series = [77, 67, 50, 69, 66, 87];
  const sslcSeries = [88, 80, 82, 91, 95];

  const chartType = isMobile ? "donut" : "bar"; // Switch chart type based on screen size

  return (
    <div className="velammal-page">
      <div className="flex flex-wrap">
        {[
          { series: hsc2Series, title: "HSC +2", percentage: "75.5%", duration: "May 2018 – Mar 2019" },
          { series: hsc1Series, title: "HSC +1", percentage: "70%", duration: "May 2017 – Mar 2018" },
          { series: sslcSeries, title: "SSLC 10th", percentage: "87.2%", duration: "May 2016 – Apr 2017" },
        ].map(({ series, title, percentage, duration }) => (
          <div key={title} className="flex flex-col lg:flex-row mb-5 AyyanarPage">
            <div className="velammal-chart Ayyanar-chart">
              <Chart
                options={isMobile ? donutOptions : barOptions}
                series={isMobile ? series : [{ name: `${title} Marks`, data: series }]}
                type={chartType}
              />
            </div>
            <div className="velammal-content lg:mx-5">
              <h1 className="lg:text-center font-extrabold text-xl xl:text-4xl xl:whitespace-nowrap">
                Ayyanar Matric Higher Secondary School
              </h1>
              <div className="mt-3">
                <h3><strong>Degree:</strong> Higher Secondary Certificate ({title})</h3>
                <p><strong>Stream:</strong> Computer Science</p>
                <p><strong>Duration:</strong> {duration}</p>
                <p><strong>Percentage:</strong> {percentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AyyanarPage;
