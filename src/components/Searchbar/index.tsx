import Axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { setAuthHeader } from "../../auth";
import styles from "./Searchbar.module.css";

const Searchbar: React.FC = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [foundTracks, setFoundTracks] = useState<any>([]);

  useEffect(() => {
    console.log(foundTracks);
  });

  const getSongs = async () => {
    setAuthHeader();
    const BASE_URL = "https://api.spotify.com/v1";
    const response = await Axios.get(`${BASE_URL}/search`, {
      params: {
        q: searchTerm,
        type: "track",
      },
    });

    setFoundTracks(response.data.tracks.items);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
    if (searchTerm) {
      getSongs();
    }
  };

  return (
    <div className={styles.searchbarContainer}>
      <h3>Spotify Comparison Tool</h3>
      <label htmlFor="searchbar">Search for a track</label>
      <input
        type="text"
        className={styles.searchbar}
        id="searchbar"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ul>
        {foundTracks.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          foundTracks.map((track: any) => <li key={track.id}>{track.name}</li>)}
      </ul>
    </div>
  );
};

export default Searchbar;
