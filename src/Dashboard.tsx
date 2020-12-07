import Axios from "axios";
import React, { useEffect } from "react";
import { setAuthHeader } from "./auth";

const Dashboard = () => {
  useEffect(() => {
    getSongs();
  });

  const getSongs = async () => {
    setAuthHeader();
    const BASE_URL = "https://api.spotify.com/v1";
    const response = await Axios.get(BASE_URL + "/me");
    console.log(response);
  };

  return <div>Dashboard</div>;
};

export default Dashboard;
