
function ArtistComponent(props) {
    return (
      <div className="h-48 w-4/12 rounded-md  text-gray-300 justify-start items-center flex-shrink-0 text-sm">
        <img src={props.img} className="w-full "></img>
        <h1 className="ml-2 font-semibold mt-2">{props.title}</h1>
        <h1 className="ml-2 font-thin mt-2">{props.artist} . {props.type}</h1>
      </div>
    );
  }
  
  export default ArtistComponent;
  