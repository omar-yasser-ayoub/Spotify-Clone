import './App.css';
import { ReactComponent as HomeSVG } from './Assets/Home.svg';
import { ReactComponent as SearchSVG } from './Assets/Search.svg';
import { ReactComponent as LibrarySVG } from './Assets/Library.svg';
import { ReactComponent as HomeSelectedSVG } from './Assets/HomeFilled.svg';
import { ReactComponent as SearchSelectedSVG } from './Assets/SearchFilled.svg';
import { ReactComponent as LibrarySelectedSVG } from './Assets/LibraryFilled.svg';
import HomeComponent from './Components/HomeComponent';
import { useEffect, useRef, useState} from 'react';
import PlayerComponent from './Components/PlayerComponent';
import SearchComponent from './Components/SearchComponent';
import LibraryComponent from './Components/LibraryComponent';
import ReactPlayer from 'react-player';
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

function App() {


  const [code, setCode] = useState("")
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isPlaying,setPlaying] = useState(false);
  const [volume,setVolume] = useState(0.25);
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);
  const playerRef = useRef(null);

  const { globalVariable, updateGlobalVariable } = useContext(AppContext);

  const handleButtonClick = () => {
    updateGlobalVariable('new value');
  };

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    let refreshToken = window.localStorage.getItem("refreshToken")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        refreshToken = hash.substring(1).split("&").find(elem => elem.startsWith("refresh_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("refreshToken", refreshToken)
        window.localStorage.setItem("token", token)
    }
    setRefreshToken(refreshToken)
    setToken(token)

    const intervalId = setInterval(() => {
      if (playerRef.current) {
        setPlayerCurrentTime(Math.floor(playerRef.current.getCurrentTime()));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  const logout = () => {
    setToken("")
    setRefreshToken("")
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
  const handlePlayPause = () => {
    setPlaying(!isPlaying)
  }
  function pause() {
    setPlaying(false)
  }
  function play() {
    setPlaying(true)
  }
  function changeVolume(volume) {
    setVolume(volume)
  }
  function getCurrentTime() {
    if (playerRef.current) {
      setPlayerCurrentTime(playerRef.current.getCurrentTime());
    }
  };
  function playerSeekTo(seconds) {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds,"seconds");
    }
  }
  return (
    <div className='w-full h-full'>
      <ReactPlayer ref={playerRef} playing={isPlaying} volume ={volume}  url={globalVariable.preview_url} height={0} width={0}/>
      <div className='hidden md:block'>
        <div className='w-full h-screen bg-black text-white'>
          <div className='grid grid-cols-5 h-5/6 p-1 gap-2'>
            <div className='max-h-full col-span-1 h-full'>
              <div className='inline-flex flex-col gap-2 h-full w-full'>
                <div className='h-1/6'>
                  <div className='bg-dark-bg rounded-md h-full flex flex-col'>
                    <div className='inline-flex h-1/2 items-center justify-start' onClick={() => handleMenuClick("Home")}>
                      {currentMenu === "Home" ? (<HomeSelectedSVG width={25} height={25} className="mx-4"/>) : (<HomeSVG width={25} height={25} className="mx-4"/>)}
                      <h1>Home</h1>
                    </div>
                    <div className='inline-flex h-1/2 items-center justify-start' onClick={() => handleMenuClick("Search")}>
                      {currentMenu === "Search" ? (<SearchSelectedSVG width={25} height={25} className="mx-4"/>) : (<SearchSVG width={25} height={25} className="mx-4" />)}
                      <h1>Search</h1>
                    </div>
                  </div>
                </div>
                <div className='h-5/6 max-h-5/6'>
                  <div className='bg-dark-bg rounded-md overflow-hidden h-full relative'>
                    <LibraryComponent token={token} />
                  </div>
                </div>
              </div>
            </div> 
            <div className='h-full col-span-4 overflow-y-scroll no-scrollbar rounded-md'>
              <div className='bg-dark-bg rounded-md'>
                
                <div className='bg-dark-bg rounded-md h-full pt-1'>
                  {currentMenu === "Home" ? <HomeComponent token={token} isPlaying={isPlaying} pause={pause} play={play}/> : <SearchComponent token={token} />}
                </div>
              </div>
            </div>
          </div>
          <div className='p-1 h-28'>
            <div className='bg-dark-bg h-full rounded-md'>
            {globalVariable.name && <PlayerComponent playerSeekTo={playerSeekTo} currentTime={playerCurrentTime} isPlaying={isPlaying} handlePlayPause={handlePlayPause} item={globalVariable} changeVolume={changeVolume} volume={volume}/>}
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
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
            {globalVariable.name && <PlayerComponent isPlaying={isPlaying} handlePlayPause={handlePlayPause} item={globalVariable} changeVolume={changeVolume} volume={volume} />}
          </div>
        </div>
        { currentMenu === "Home" && <div className="w-full h-24 bg-dark-bg text-white">
          <div className="h-full mx-4 grid grid-cols-3 justify-center items-center">
            <h1 className="text-4xl font-SpotifyCircular-Medium text-white col-span-2">Good evening</h1> 
            {!token ? (
              <a href="http://localhost:8888/login" className='bg-spotify-green text-white font-bold py-2 px-4 rounded-full text-center'>
                Login
              </a>
            ) : (
              <button onClick={logout} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
                Logout
              </button>
            )}
          </div>
        </div>}
        {currentMenu === "Home"  && <HomeComponent token={token} isPlaying={isPlaying} pause={pause} play={play}/>}
        {currentMenu === "Search"  && <SearchComponent token={token} />}
        {currentMenu === "Library"  && <LibraryComponent token={token} />}
      </div>
    </div>
  );
}

export default App;
