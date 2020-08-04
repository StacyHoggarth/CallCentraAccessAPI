import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./styles.css";
import axios from 'axios';
import JobData from "./components/JobData";
import CustomerNumberForm from "./components/CustomerNumberForm";


function App() {
  const [job, setJob] = useState(null);

  //const apiURL = "https://federation.taylorcorp.com/connect/token";
  const apiURL = "https://api.centraaccess.com/api/v1/Jobs/JobRecord/" + "02000Z" + "?jobNumber=000568&pageNumber=1&numberOfRecords=50";
  const fetchData = async () => {
    try {
      console.log ("calling " + apiURL );
      const response = await axios.get(apiURL, 
  
            {headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ca76c29f9862c0faff82a7457856851c5ba507d2a9d2e0b6ea290140f67652a9'
              }/*,
              body: {
                'client_id': 'scs_prod_CentraAccessAPI',
                'client_secret': 'gW?BXFwLE*5Y!d4',
                'scope': 'va_access_api'
              }*/ 
            }
            );
            console.log(response);
            setJob(response.data);
      } catch (error) {
              console.error(error);
      }
    }

  return (
    <div className="App">
      <h1>Centra Access Jobs</h1>
      <h2>Fetch a job from an API and display it</h2>

      {/* Fetch data from API */}
      < CustomerNumberForm />
      <div>
        <input className="job_input" type="text" name="jobNumber" value="02000Z" /><br />
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>
    

      {/* Display data from API */}
      <JobData jobInfo={job} />
        
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
