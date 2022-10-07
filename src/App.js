import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import axios from "axios";
import { Button, Input, Box } from "@chakra-ui/react";
import { Octokit } from "octokit";
function App() {
  const octokit = new Octokit({
    auth: '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'
  });
  const [search, setsearch] = useState("");

  const [result, setresult] = useState([]);
  const handleChange = (e) => {
    console.log(1);
    setsearch(e.target.value)
  };

  const searchIssue = () => {
    const result = []
    async function callApi() {
      const data = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "PHP-FFMpeg",
        repo: "PHP-FFMpeg",
      });
      console.log(data);
      
      data.data.forEach(issue => {
        console.log(search);
        console.log(issue.title.includes(search));
        if(issue.title.includes(search)){
        console.log(issue.title);
        result.push(issue);
        }
      });
      setresult(result);
    }
    
    callApi();
  };
  return (
    <Box className="App">
      <Box className="searchBar">
        <Input type="text" onChange={handleChange}></Input>
        <span>
          <Button onClick={searchIssue}>Search</Button>
        </span>
      </Box>
      <Box className="container">
        {
          result.map((ele)=>{
            return <Card data={ele}></Card>
          })
        }
      </Box>
    </Box>
  );
}

export default App;
