import { useContext } from "react";
import { AppContext } from '../AppContext';

function CardComponent(props) {
  const { globalVariable, updateGlobalVariable } = useContext(AppContext);
  const handleButtonClick = () => {
    if (props.item) {
      updateGlobalVariable(props.item);
    }
  }

  return (
    <div className="h-16 w-full rounded-md bg-light-bg text-white justify-start items-center inline-flex" onClick={handleButtonClick}>
      <img src={props.img} className="h-full rounded-l-md aspect-square" alt={props.title} />
      <h1 className="ml-2 text-sm font-SpotifyCircular-Medium tracking-wider">{props.title}</h1>
    </div>
  );
}

export default CardComponent;
  