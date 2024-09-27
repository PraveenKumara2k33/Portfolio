import Chart from "react-apexcharts";
import './VelammalPage.css'; // Link to the custom CSS file

const AyyanarPage = () => {
  const optionsHSC2 = {
    chart: {
      id: "hsc2-bar",
      toolbar: { show: false },
      foreColor: "#ffffff",
    },
    colors: ["#0000FF", "#008000", "#FF0000", "#EE82EE", "#FFA500", "#4B0082"],
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
      labels: {
        formatter: (val) => parseInt(val),
        style: { colors: "#ffffff" },
      },
      title: { text: "Marks", style: { color: "#ffffff" } },
    },
    grid: { borderColor: "#ffffff", strokeDashArray: 4 },
    tooltip: { enabled: false },
  };

  const seriesHSC2 = [{ name: "HSC +2 Marks", data: [86, 81, 50, 69, 80, 81] }];

  const optionsHSC1 = {
    chart: {
      id: "hsc1-bar",
      toolbar: { show: false },
      foreColor: "#ffffff",
    },
    colors: ["#0000FF", "#008000", "#FF0000", "#EE82EE", "#FFA500", "#4B0082"],
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
      labels: {
        formatter: (val) => parseInt(val),
        style: { colors: "#ffffff" },
      },
      title: { text: "Marks", style: { color: "#ffffff" } },
    },
    grid: { borderColor: "#ffffff", strokeDashArray: 4 },
    tooltip: { enabled: false },
  };

  const seriesHSC1 = [{ name: "HSC +1 Marks", data: [77, 67, 50, 69, 66, 87] }];

  const optionsSSLC = {
    chart: {
      id: "sslc-bar",
      toolbar: { show: false },
      foreColor: "#ffffff",
    },
    colors: ["#0000FF", "#008000", "#FF0000", "#EE82EE", "#FFA500"],
    plotOptions: {
      bar: { distributed: true },
    },
    xaxis: {
      categories: ["Tamil", "English", "Maths", "Science", "Social Science"],
      title: { text: "Subjects", style: { color: "#ffffff" } },
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (val) => parseInt(val),
        style: { colors: "#ffffff" },
      },
      title: { text: "Marks", style: { color: "#ffffff" } },
    },
    grid: { borderColor: "#ffffff", strokeDashArray: 4 },
    tooltip: { enabled: false },
  };

  const seriesSSLC = [{ name: "SSLC Marks", data: [88, 80, 82, 91, 95] }];

  return (
    <div className="velammal-page">
      <div className="flex lg:justify-between  flex-wrap">
        <div className="flex justify-between AyyanarPage">
        <div className="velammal-chart Ayyanar-chart">
          <Chart options={optionsHSC2} series={seriesHSC2} type="bar" />
        </div>

        <div className="velammal-content mx-5 ">
          <h1 className="lg:text-center font-extrabold text-xl lg:text-4xl whitespace-nowrap">
            Ayyanar Matric Higher Secondary School
          </h1>
          <div className="mt-3">
            <h3><strong>Degree:</strong> Higher Secondary Certificate (HSC +2)</h3>
            <p><strong>Stream:</strong> Computer Science</p>
            <p><strong>Duration:</strong> May 2018 – Mar 2019</p>
            <p><strong>Percentage:</strong> 75.5%</p>
          </div>
        </div>
        </div>

      <div className="flex justify-between AyyanarPage">
        <div className="velammal-chart Ayyanar-chart">
          <Chart options={optionsHSC1} series={seriesHSC1} type="bar"  />
        </div>
        <div className="velammal-content mx-5">
          <h1 className="lg:text-center font-extrabold text-xl lg:text-4xl whitespace-nowrap">
            Ayyanar Matric Higher Secondary School
          </h1>
          <div className="mt-3">
            <h3><strong>Degree:</strong> Higher Secondary Certificate (HSC +1)</h3>
            <p><strong>Stream:</strong> Computer Science</p>
            <p><strong>Duration:</strong> May 2017 – Mar 2018</p>
            <p><strong>Percentage:</strong> 70%</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between AyyanarPage">
        <div className="velammal-chart Ayyanar-chart">
          <Chart options={optionsSSLC} series={seriesSSLC} type="bar" />
        </div>
        <div className="velammal-content mx-5">
          <h1 className="lg:text-center font-extrabold text-xl lg:text-4xl whitespace-nowrap">
            Ayyanar Matric Higher Secondary School
          </h1>
          <div className="mt-3">
            <h3><strong>Degree:</strong> Secondary School Leaving Certificate (SSLC 10th)</h3>
            <p><strong>Stream:</strong> State Board</p>
            <p><strong>Duration:</strong> May 2016 – Apr 2017</p>
            <p><strong>Percentage:</strong> 87.2%</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AyyanarPage;
