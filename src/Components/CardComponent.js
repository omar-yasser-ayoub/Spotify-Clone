
function CardComponent(props) {
    return (
      <div className="h-16 w-full rounded-md bg-light-bg text-white justify-start items-center inline-flex">
        <img src={props.img} className="h-full rounded-l-md aspect-square"></img>
        <h1 className="ml-2 font-semibold text-md">{props.title}</h1>
      </div>
    );
  }
  
  export default CardComponent;
  