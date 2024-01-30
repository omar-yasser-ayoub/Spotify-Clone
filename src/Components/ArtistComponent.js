function ArtistComponent(props) {
  return (
    <div className="flex-grow w-5/12 text-white justify-center items-center flex-shrink-0 text-sm pr-4 leading-tight">
      <img src={props.img} className="rounded-full w-full aspect-square"></img>
      <h1 className="ml-2 font-semibold mt-2 text-center bg-center">{props.artist}</h1>
    </div>
  );
}

export default ArtistComponent;
  