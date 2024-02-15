import { useEffect, useState } from "react";
import axios from 'axios';
import LibraryCard from "./LibraryCard";
import { ReactComponent as FilterSVG } from '../Assets/Filter.svg';
import { ReactComponent as SearchSVG } from '../Assets/Search.svg';
import { ReactComponent as PlusSVG } from '../Assets/Plus.svg';
import { ReactComponent as LibrarySVG } from '../Assets/Library.svg';

function LibraryComponent(props) {
  const [playlists, setPlaylists] = useState([]);
  const [profilePic, setProfilePic] = useState("");
  const generatePlaylists = async () => {
    if (props.token != "") {
      try {
        var { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          params: {
            limit: 50,
          }
        });
        
        setPlaylists(Array.from(data.items));

        var { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          }
        });

        setProfilePic(data.images[0].url)
      }
      catch (error) {
        console.error("Error loading playlists:", error);
      }
    }
  }

  useEffect(() => {
    generatePlaylists();
  },[props.token]);

  const renderPlaylists = () => {
    return playlists.map(item => (
      <LibraryCard key={item.id} type={item.type} name={item.name} owner={item.owner.display_name} img={item.images.length ? item.images[0].url : ""} />
    ))
  }
  
  return (
    <div className="z-0 w-full md:no-scrollbar absolute bg-dark-bg h-full bg-fixed text-white font-SpotifyCircular-Medium overflow-y-scroll">
      <div className="px-4">
        <div className="fixed md:sticky w-full z-10">
          <div className="bg-dark-bg">
            <div className="inline-flex justify-between w-full md:pr-0 pr-8">
              <div className="inline-flex pt-8 items-center gap-4 flex-shrink-0">
                <img src={profilePic} className="md:hidden w-8 h-8 rounded-full"/>
                <LibrarySVG className="sm:hidden md:block w-6"/>
                <h1 className="text-2xl pt-2 md:text-base">Your Library</h1>
              </div>
              <div className="inline-flex flex-shrink-0 pt-10 gap-4">
                <SearchSVG className="md:hidden w-6" />
                <PlusSVG className="w-6" />
              </div>
            </div>
            <div className="inline-flex gap-2 mt-5 mb-2">
              <div className="bg-light-bg py-2 px-4 rounded-full">
                <h1>Playlists</h1>
              </div>
              <div className="bg-light-bg py-2 px-4 rounded-full">
                <h1>Albums</h1>
              </div>
              <div className="bg-light-bg py-2 px-4 rounded-full">
                <h1>Artists</h1>
              </div>
            </div>
          </div>
          <div className="-mx-4 h-1 bg-gradient-to-t to-black from-transparent md:hidden" />
        </div>
        <div className="h-full absolute top-36 pt-4">
          <div className="mb-3">
            <div className="inline-flex gap-2 items-center">
              <FilterSVG className="w-5"/>
              <h2 className="mt-1">Recents</h2>
            </div>
          </div>
          {renderPlaylists()}
          <div className="h-36 md:hidden" />
        </div>
      </div>
    </div>
  );
}
  
export default LibraryComponent;