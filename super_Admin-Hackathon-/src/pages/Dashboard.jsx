import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaStore, FaUserShield, FaFileAlt } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalMarkets, setTotalMarkets] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalReports, setTotalReports] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/6283b3e6-6beb-42b7-973e-9ffa99300669"
      );

      const data = response.data;

      setTotalUsers(data.totalUsers);
      setTotalMarkets(data.totalMarkets);
      setTotalAdmins(data.totalAdmins);
      setTotalReports(data.totalReports);

      setChartData({
        labels: data.chartData.labels,
        datasets: [
          {
            label: "User Growth",
            data: data.chartData.data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 3,
            hoverBackgroundColor: "rgba(75, 192, 192, 0.5)",
            hoverBorderWidth: 5,
          },
        ],
      });

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <div className="chart">
          <h1>Overview</h1>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let tooltipText = "";
                      context.dataset.data.forEach((dataPoint, index) => {
                        if (context.label === chartData.labels[index]) {
                          tooltipText += `${context.dataset.label}: ${dataPoint}\n`;
                        }
                      });
                      return tooltipText;
                    },
                  },
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Time Period",
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "User Count",
                  },
                },
              },
            }}
          />
        </div>
        <div className="boxes">
          <div
            className="box"
            style={{ marginBottom: "5px", backgroundColor: "#FFB6C1" }}
          >
            <FaUsers style={{ fontSize: "30px", color: "#ff6347" }} />
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <div
            className="box"
            style={{
              marginLeft: "10px",
              marginBottom: "5px",
              backgroundColor: "#CFF4D2",
            }}
          >
            <FaStore style={{ fontSize: "30px", color: "#32CD32" }} />
            <h3>Total Markets</h3>
            <p>{totalMarkets}</p>
          </div>
          <div
            className="box"
            style={{ marginRight: "10px", backgroundColor: "#D3D3D3" }}
          >
            <FaUserShield style={{ fontSize: "30px", color: "#4682B4" }} />
            <h3>Total Admins</h3>
            <p>{totalAdmins}</p>
          </div>
          <div className="box" style={{ backgroundColor: "#FFFACD" }}>
            <FaFileAlt style={{ fontSize: "30px", color: "#FFD700" }} />
            <h3>Total Reports</h3>
            <p>{totalReports}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
