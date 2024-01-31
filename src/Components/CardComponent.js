
function CardComponent(props) {
  if (!props.isLoaded) {
    return (
      <div className="h-16 w-full rounded-md bg-light-bg text-white justify-start items-center inline-flex">
        <img src="https://cfda.imgix.net/2019/10/IamEden-13.jpg" className="h-full rounded-l-md aspect-square"/>
        <h1 className="ml-2 font-semibold text-md">temp</h1>
      </div>
    );
  }

  return (
    <div className="h-16 w-full rounded-md bg-light-bg text-white justify-start items-center inline-flex">
      <img src={props.img} className="h-full rounded-l-md aspect-square" alt={props.title} />
      <h1 className="ml-2 font-semibold text-md">{props.title}</h1>
    </div>
  );
}

export default CardComponent;
  