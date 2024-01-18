
function AlbumComponent(props) {
    return (
      <div className="h-6/12 w-5/12 rounded-md justify-start items-center flex-shrink-0 text-sm pr-4 leading-tight">
        <img src={props.img} className="w-full "></img>
        <h1 className="ml-2 font-semibold mt-2 text-white">{props.title}</h1>
        <h1 className="ml-2 font-medium text-text-grey mt-2">{props.artist} . {props.type}</h1>
      </div>
    );
  }
  
  export default AlbumComponent;
  