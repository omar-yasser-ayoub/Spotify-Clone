function VideoComponent(props) {
    return (
      <div className="w-full p-2">
        <div className="relative">
          <video src={props.vid} type="video/mp4" autoPlay muted loop className="rounded-md" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded"></div>
          <div className="absolute bottom-0 left-0 text-white text-xs mx-3 my-4">
            <p>#{props.genre}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoComponent;
  