function ArtistComponent(props) {
  return (
    <div className="flex-grow w-5/12 text-white justify-center items-center flex-shrink-0 text-sm pr-4 leading-tight max-w-52 md:max-w-44 md:hover:bg-light-bg md:bg-home-card-bg md:p-4 md:rounded-md transition duration-300 ease-in-out truncate">
      <img src={props.img} className="rounded-full w-full aspect-square md:shadow-2xl"></img>
      <h1 className="ml-2 font-semibold mt-2 text-center bg-center md:text-left md:mt-4 md:ml-0">{props.artist}</h1>
      <h1 className="ml-2 md:ml-0 font-medium text-text-grey mt-2 hidden md:block">Artist</h1>
    </div>
  );
}

export default ArtistComponent;
  