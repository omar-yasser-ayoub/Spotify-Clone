function LibraryCard(props) {
    return (
      <div className="inline-flex font-SpotifyCircular-Medium w-full items-center mb-5">
        {props.img != "" ? <img src={props.img} className="w-16 h-16 md:w-12 md:h-12" /> : <div className="w-16 h-16 bg-gray-400" />}
        <div className="flex flex-col ml-3">
            <h1 className="text-white md:text-sm">{props.name}</h1>
            <h2 className="text-text-grey text-sm">{props.type} ∙ {props.owner}</h2>
        </div>
      </div>
    );
  }
  
  export default LibraryCard;