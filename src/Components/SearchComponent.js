import VideoComponent from "./VideoComponent";
import { ReactComponent as SearchSVG } from '../Assets/Search.svg';
import vid1 from "./Videos\\Brakence.mp4";
import vid2 from "./Videos\\Eden.mp4";
import vid3 from "./Videos\\Riff.mp4";

function SearchComponent(props) {
    return (
      <div className="z-0 w-full absolute bg-dark-bg h-max bg-fixed font-semibold text-white">
        <div className="mx-4">
          <h1 className="text-2xl mt-8">Search</h1> 
          <div className="inline-flex rounded-md bg-white p-3 mt-4 w-full">
            <SearchSVG width={20} height={20} className="mx-2 text-black"/>
            <h1 className="text-sm text-black">What do you want to listen to?</h1>
          </div>
          <h1 className="mt-8">Explore your genres</h1>
          <div className="grid grid-cols-3 -mx-2 mt-4">
            <VideoComponent genre="glitch" vid={vid1}/>
            <VideoComponent genre="emo rap" vid={vid2}/>
            <VideoComponent genre="energetic" vid={vid3}/>
          </div>
          <h1 className="mt-8">Browse all</h1>
        </div>
      </div>
    );
  }
  
  export default SearchComponent;