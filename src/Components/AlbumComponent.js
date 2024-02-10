import { useContext } from "react";
import { AppContext } from '../AppContext';

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
      <div className="h-6/12 w-5/12 rounded-md justify-start items-center flex-shrink-0 text-sm pr-4 leading-tight max-w-52" onClick={handleButtonClick}>
        <img src={props.img} className="w-full "></img>
        <h1 className="ml-2 font-semibold mt-2 text-white">{props.title}</h1>
        <h1 className="ml-2 font-medium text-text-grey mt-2">{props.artist}</h1>
      </div>
    );
  }
  
  export default AlbumComponent;
  