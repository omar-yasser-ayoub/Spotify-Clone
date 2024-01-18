import ArtistComponent from "./ArtistComponent";
import CardComponent from "./CardComponent";
function SearchComponent(props) {
    return (
      <div className="z-0 w-screen absolute bg-gray-800 h-screen bg-fixed">
        <div className="mx-4">
          <h1 className="text-4xl font-semibold text-white mt-8">Search</h1> 
        </div>
      </div>
    );
  }
  
  export default SearchComponent;