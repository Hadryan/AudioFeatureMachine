import Axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { setAuthHeader } from "../../auth";
import styles from "./Searchbar.module.css";

const Searchbar: React.FC = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [foundTracks, setFoundTracks] = useState<any>([]);

  useEffect(() => {}, [searchTerm]);

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
          foundTracks.map((track: any) => {
            return (
              <div key={track.id}>
                <li>{track.name}</li>
                {!!track.album.images[2] && (
                  <img src={track.album.images[2].url} alt={track.name} />
                )}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Searchbar;
