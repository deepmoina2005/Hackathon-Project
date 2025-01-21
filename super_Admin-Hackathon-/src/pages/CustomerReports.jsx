import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerReports.css';

function CustomerReports() {
  const [reports, setReports] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

 
  const fetchReports = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/a00a93bf-29a5-4e4d-b9ac-d978d152fc5f'); 
      setReports(response.data); 
      setLoading(false); 
    } catch (err) {
      setError(err.message); 
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports(); 
  }, []);


  const handleVerifyReport = (index) => {
    const updatedReports = reports.filter((_, i) => i !== index); 
    setReports(updatedReports); 
  };

  
  if (loading) {
    return <div>Loading reports...</div>;
  }

 
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="customer-report">
      {reports.length === 0 ? (
        <div style={{textAlign:"center",color:"white",verticalAlign:"middle"}}><h1>No reports found.</h1></div>
      ) : (
        reports.map((report, index) => (
          <div key={index} className="customer-report-box">
            <h1>{report.customerName}</h1>
            <p>{report.summary}</p>
            <button onClick={() => handleVerifyReport(index)}>Verify Report</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CustomerReports;
