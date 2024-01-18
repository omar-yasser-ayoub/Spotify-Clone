
function AlbumComponent(props) {
    return (
      <div className="h-6/12 w-5/12 text-gray-300 justify-center items-center flex-shrink-0 text-sm pr-4 leading-tight">
        <img src={props.img} className="w-full rounded-full "></img>
        <h1 className="ml-2 font-semibold mt-2 text-center bg-center">{props.artist}</h1>
      </div>
    );
  }
  
  export default AlbumComponent;
  