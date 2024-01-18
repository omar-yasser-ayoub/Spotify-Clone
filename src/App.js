import './App.css';
import { ReactComponent as HomeSVG } from './Assets/Home.svg';
import { ReactComponent as SearchSVG } from './Assets/Search.svg';
import { ReactComponent as LibrarySVG } from './Assets/Library.svg';
import { ReactComponent as HomeSelectedSVG } from './Assets/HomeFilled.svg';
import { ReactComponent as SearchSelectedSVG } from './Assets/SearchFilled.svg';
import { ReactComponent as LibrarySelectedSVG } from './Assets/LibraryFilled.svg';
import CardComponent from './Components/CardComponent';
import ArtistComponent from './Components/AlbumComponent';
import HomeComponent from './Components/HomeComponent';
import { useEffect, useState} from 'react';
import PlayerComponent from './Components/PlayerComponent';
import SearchComponent from './Components/SearchComponent';
import LibraryComponent from './Components/LibraryComponent';

function App() {

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
      <div className="z-10 bottom-0 w-full fixed">
        <div>
          <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full h-20 ">
          </div>
          <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full grid grid-cols-3 justify-center h-20 items-center">
              <div className="text-gray-300 text-xs text-center" onClick={() => handleMenuClick("Home")}>
                {currentMenu === "Home" ? (<HomeSelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<HomeSVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Home</h1>
              </div>
              <div className="text-gray-300 text-xs text-center" onClick={() => handleMenuClick("Search")}>
                {currentMenu === "Search" ? (<SearchSelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<SearchSVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Search</h1>
              </div>  
              <div className="text-gray-300 text-xs text-center" onClick={() => handleMenuClick("Library")}>
                {currentMenu === "Library" ? (<LibrarySelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<LibrarySVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Your Library</h1>
              </div> 
          </div>
          {/*remember to change gradient to above div in the bottom*/}
          <PlayerComponent/>
        </div>
      </div>
      {currentMenu === "Home" && <HomeComponent/>}
      {currentMenu === "Search" && <SearchComponent/>}
      {currentMenu === "Library" && <LibraryComponent/>}
    </div>
  );
}

export default App;
