import { useContext } from "react";
import { AppContext } from '../AppContext';
import { ReactComponent as Play2SVG } from '../Assets/PlayerPlay.svg';
import { ReactComponent as PauseSVG } from '../Assets/PlayerPause.svg';

function CardComponent(props) {
  const { globalVariable, updateGlobalVariable } = useContext(AppContext);
  const handleButtonClick = () => {
    if (props.item) {
      updateGlobalVariable(props.item);
    }
  }
  function handleClick() {
    if (globalVariable === props.item && props.isPlaying) {
      props.pause();
    } else {
      handleButtonClick();
      props.play();
    }
  };

  return (
    <div className="h-16 w-full rounded-md bg-light-bg text-white justify-start items-center inline-flex group" onClick={() => {
      // This onClick is for viewport sizes under md
      if (window.innerWidth <= 768) {
        handleClick();
      }
    }} >
      <img src={props.img} className="h-full rounded-l-md aspect-square" alt={props.title} />
      <h1 className="ml-2 text-sm font-SpotifyCircular-Medium tracking-wider">{props.title}</h1>
      <div className="flex-grow"></div>
      {globalVariable === props.item && props.isPlaying ? 
        <PauseSVG width={48} height={48} className="hidden md:group-hover:block md:group-hover:animate-fade md:group-hover:animate-duration-150 mr-2" onClick={() => props.pause()}/> 
        : 
        <Play2SVG width={48} height={48} className="hidden md:group-hover:block md:group-hover:animate-fade md:group-hover:animate-duration-150 mr-2"onClick={() => handleClick()} /> }
    </div>
  );
}

export default CardComponent;
  