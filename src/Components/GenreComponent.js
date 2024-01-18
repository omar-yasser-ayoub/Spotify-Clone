
function GenreComponent(props) {
    return (
      <div className="h-28 bg-slate-700 text-white rounded-lg justify-center items-center overflow-clip">
        
        <h1 className="mt-2 ml-4 font-semibold text-lg">{props.text}</h1>
        <img src={props.img} className="relative w-20 h-20 rotate-12 ml-32 " />
        
      </div>
    );
  }
  
  export default GenreComponent;
  