
function PodcastComponent(props) {
    return (
      <div className="h-6/12 w-5/12 rounded-md justify-start items-center flex-shrink-0 text-sm pr-4 leading-tight">
        <img src={props.img} className="w-full rounded-md"></img>
        <h1 className="ml-2 font-semibold text-white mt-2">{props.title}</h1>
        <h1 className="ml-2 font-medium text-text-grey mt-2">{props.artist}</h1>
      </div>
    );
  }
  
  export default PodcastComponent;
  