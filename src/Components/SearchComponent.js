import VideoComponent from "./VideoComponent";
import { ReactComponent as SearchSVG } from '../Assets/Search.svg';
function SearchComponent(props) {
    return (
      <div className="z-0 w-screen absolute bg-dark-bg h-screen bg-fixed  font-semibold text-white">
        <div className="mx-4">
          <h1 className="text-2xl mt-8">Search</h1> 
          <div className="inline-flex rounded-md bg-white p-3 mt-4 w-full">
            <SearchSVG width={20} height={20} className="mx-2 text-black"/>
            <h1 className="text-sm text-black">What do you want to listen to?</h1>
          </div>
          <h1>Explore your genres</h1>
          <div className="grid grid-cols-3">
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
          </div>
          <h1>Browse all</h1>
        </div>
      </div>
    );
  }
  
  export default SearchComponent;