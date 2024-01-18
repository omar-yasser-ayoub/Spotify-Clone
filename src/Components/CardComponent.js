
function CardComponent(props) {
    return (
      <div className="h-16 rounded-md bg-light-bg text-white justify-start items-center inline-flex">
        <img src={props.img} className="h-full rounded-l-md"></img>
        <h1 className="ml-2 font-semibold">{props.title}</h1>
      </div>
    );
  }
  
  export default CardComponent;
  