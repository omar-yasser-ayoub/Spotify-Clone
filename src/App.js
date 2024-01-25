import './App.css';
import { ReactComponent as HomeSVG } from './Assets/Home.svg';
import { ReactComponent as SearchSVG } from './Assets/Search.svg';
import { ReactComponent as LibrarySVG } from './Assets/Library.svg';
import { ReactComponent as HomeSelectedSVG } from './Assets/HomeFilled.svg';
import { ReactComponent as SearchSelectedSVG } from './Assets/SearchFilled.svg';
import { ReactComponent as LibrarySelectedSVG } from './Assets/LibraryFilled.svg';
import HomeComponent from './Components/HomeComponent';
import { useEffect, useState} from 'react';
import PlayerComponent from './Components/PlayerComponent';
import SearchComponent from './Components/SearchComponent';
import LibraryComponent from './Components/LibraryComponent';
import axios from 'axios';

function App() {

  const CLIENT_ID = "35376654d86f4e22ae70c64f5b393483";
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)

    }

    setToken(token)
    console.log(token)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }


  const [currentMenu, setMenu] = useState("Home");
  const [isAnimating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
  };
  const handleMenuClick = (Menu) => {
    setMenu(Menu);
    handleClick();
  }
  return (
    <div>
      <div className="z-10 -bottom-0.5 w-full fixed">
        <div>
          <div className="bg-gradient-to-t from-black to-transparent absolute -bottom-0.5 w-full h-60 ">
          </div>
          <div className="bg-gradient-to-t from-black to-transparent absolute -bottom-0.5 w-full grid grid-cols-3 justify-center h-60 items-center">
              <div className="text-text-grey text-xs text-center mt-40" onClick={() => handleMenuClick("Home")}>
                {currentMenu === "Home" ? (<HomeSelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<HomeSVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Home</h1>
              </div>
              <div className="text-text-grey text-xs text-center mt-40" onClick={() => handleMenuClick("Search")}>
                {currentMenu === "Search" ? (<SearchSelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<SearchSVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Search</h1>
              </div>  
              <div className="text-text-grey text-xs text-center mt-40" onClick={() => handleMenuClick("Library")}>
                {currentMenu === "Library" ? (<LibrarySelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<LibrarySVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Your Library</h1>
              </div> 
          </div>
          {/*remember to change gradient to above div in the bottom*/}
          <PlayerComponent/>
        </div>
      </div>
      {!token ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> : <button onClick={logout}>Logout</button>}
      {currentMenu === "Home" && token != "" && <HomeComponent/>}
      {currentMenu === "Search" && token != "" && <SearchComponent token={token}/>}
      {currentMenu === "Library" && token != "" && <LibraryComponent/>}
    </div>
  );
}

export default App;
