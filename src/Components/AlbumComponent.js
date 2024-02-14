import { useContext } from "react";
import { AppContext } from '../AppContext';
import { ReactComponent as Play2SVG } from '../Assets/PlayerPlay.svg';
import { ReactComponent as PauseSVG } from '../Assets/PlayerPause.svg';

function AlbumComponent(props) {
  const { globalVariable, updateGlobalVariable } = useContext(AppContext);

  const handleButtonClick = () => {
    if (props.item.type === "album") {

    }
    else {
      updateGlobalVariable(props.item);
    }
  }

    return (
      <div className="h-6/12 w-5/12 relative rounded-md justify-start md:max-h-64 items-center flex-shrink-0 text-sm pr-4 leading-tight max-w-52 md:max-w-44 md:hover:bg-light-bg md:bg-home-card-bg md:p-4 transition duration-300 ease-in-out group">
        <img src={props.img} className="w-full md:rounded-lg md:shadow-2xl "></img>
        <h1 className="ml-2 md:ml-0 font-semibold mt-2 text-white md:mt-5 truncate">{props.title}</h1>
        <h1 className="ml-2 md:ml-0 font-medium text-text-grey mt-2 truncate">{props.artist}</h1>
        {globalVariable === props.item && props.isPlaying ? <PauseSVG width={48} height={48} className="md:group-hover:z-10 absolute bottom-20 right-5 hidden md:group-hover:block md:group-hover:animate-fade md:group-hover:animate-duration-150 mr-2 mb-2" onClick={() => props.pause()} /> : <Play2SVG width={48} height={48} className="absolute bottom-20 right-5 hidden md:group-hover:block md:group-hover:animate-fade md:group-hover:animate-duration-150 mr-2 mb-2" onClick={() => {
          if (globalVariable === props.item && props.isPlaying) {
            props.pause();
          } else {
            handleButtonClick();
            props.play();
          }
        }} />}
      </div>
    );
  }
  
  export default AlbumComponent;
  