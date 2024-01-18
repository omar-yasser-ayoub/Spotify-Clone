import './App.css';
import { ReactComponent as HomeSVG } from './Assets/Home.svg';
import { ReactComponent as SearchSVG } from './Assets/Search.svg';
import { ReactComponent as LibrarySVG } from './Assets/Library.svg';
import { ReactComponent as PlaySVG } from './Assets/Play.svg';
import { ReactComponent as LikeSVG } from './Assets/Heart.svg';
import { ReactComponent as HomeSelectedSVG } from './Assets/HomeFilled.svg';
import { ReactComponent as SearchSelectedSVG } from './Assets/SearchFilled.svg';
import { ReactComponent as LibrarySelectedSVG } from './Assets/LibraryFilled.svg';
import CardComponent from './Components/CardComponent';
import ArtistComponent from './Components/ArtistComponent';
import { useEffect, useState} from 'react';


function App() {

  const [currentMenu, setMenu] = useState("");
  const [isAnimating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
  };
  const handleMenuClick = (Menu) => {
    setMenu(Menu);
    handleClick();
  }
  return (
    <div>
      <div className="z-10 bottom-0 w-screen fixed">
        <div>
          <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-screen h-20 ">
          </div>
          <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-screen grid grid-cols-3 justify-center h-20 items-center">
              <div className="text-gray-300 text-sm text-center" onClick={() => handleMenuClick("Home")}>
                {currentMenu === "Home" ? (<HomeSelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<HomeSVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Home</h1>
              </div>
              <div className="text-gray-300 text-sm text-center" onClick={() => handleMenuClick("Search")}>
                {currentMenu === "Search" ? (<SearchSelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<SearchSVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Search</h1>
              </div>  
              <div className="text-gray-300 text-sm text-center" onClick={() => handleMenuClick("Library")}>
                {currentMenu === "Library" ? (<LibrarySelectedSVG width={25} height={25} className= {isAnimating ? "buttonAnimation mx-auto" : "mx-auto"} />) : (<LibrarySVG width={25} height={25} className="mx-auto" />)}
                <h1 className="mt-1">Your Library</h1>
              </div> 
          </div>
          {/*remember to change gradient to above div in the bottom*/}
          <div className="absolute bottom-16 w-screen h-20">
            <div className="bg-gray-600 h-4/5 rounded-md mx-2 grid grid-cols-2 justify-center items-center">
              <div className='inline-flex'>
                <img src='https://i.scdn.co/image/ab67616d0000b2730cffe2d0b92e5fa76c36913d' width={48} height={48} className='rounded-md mx-2'/>
                <div className='ml-1 text-gray-300 leading-snug'>
                  <h1 className='font-semibold'>Reaching 2</h1>
                  <h1>EDEN</h1>
                </div>
              </div>
              <div className='flex items-center justify-end'>
                <div className='inline-flex text-gray-300'>
                  <LikeSVG width={25} height={25} className="mx-3 fill-current" />
                  <PlaySVG width={25} height={25} className="mx-3 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-0 w-screen absolute bg-gray-800 h-max bg-fixed">
        <div className="mx-4">
          <h1 className="text-4xl font-semibold text-white mt-8">Good evening</h1> 
          <div className='grid grid-cols-2 gap-2 mt-6 justify-center items-center '>
            <CardComponent title="A Call" img="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg"/>
            <CardComponent title="bugging!" img="https://images.genius.com/08f7968612f58dfe31462ea1bbd29119.1000x1000x1.png"/>
            <CardComponent title="Optifine" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
            <CardComponent title="SNAKE EYES" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
            <CardComponent title="Nothing" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
            <CardComponent title="Sydney" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
            <CardComponent title="Ogden" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
            <CardComponent title="CABIN FEVER" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
          </div>
          <h1 className="text-2xl font-semibold text-white mt-6">Jump back in</h1>
          <div className='overflow-y-hidden'>
            <div className="flex flex-row gap-2 mt-6">
              <ArtistComponent title="A Call" artist="EDEN" type="Single" img="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg"/>
              <ArtistComponent title="bugging!" artist="brakence" type="Single" img="https://images.genius.com/08f7968612f58dfe31462ea1bbd29119.1000x1000x1.png"/>
              <ArtistComponent title="Optifine" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
              <ArtistComponent title="SNAKE EYES" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
              <ArtistComponent title="Nothing" artist="Bruno Major" type="Single" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
              <ArtistComponent title="Sydney" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
              <ArtistComponent title="Ogden" artist="gabby start" type="Single" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
              <ArtistComponent title="CABIN FEVER" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-white mt-6">Your favourite artists</h1>
          <div className='overflow-y-hidden'>
            <div className="flex flex-row gap-2 mt-6 ">
            <ArtistComponent title="A Call" artist="EDEN" type="Single" img="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg"/>
              <ArtistComponent title="bugging!" artist="brakence" type="Single" img="https://images.genius.com/08f7968612f58dfe31462ea1bbd29119.1000x1000x1.png"/>
              <ArtistComponent title="Optifine" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
              <ArtistComponent title="SNAKE EYES" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
              <ArtistComponent title="Nothing" artist="Bruno Major" type="Single" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
              <ArtistComponent title="Sydney" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
              <ArtistComponent title="Ogden" artist="gabby start" type="Single" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
              <ArtistComponent title="CABIN FEVER" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-white mt-6">Your favourite artists</h1>
          <div className='overflow-y-hidden'>
            <div className="flex flex-row gap-2 mt-6 ">
            <ArtistComponent title="A Call" artist="EDEN" type="Single" img="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg"/>
              <ArtistComponent title="bugging!" artist="brakence" type="Single" img="https://images.genius.com/08f7968612f58dfe31462ea1bbd29119.1000x1000x1.png"/>
              <ArtistComponent title="Optifine" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
              <ArtistComponent title="SNAKE EYES" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
              <ArtistComponent title="Nothing" artist="Bruno Major" type="Single" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
              <ArtistComponent title="Sydney" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
              <ArtistComponent title="Ogden" artist="gabby start" type="Single" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
              <ArtistComponent title="CABIN FEVER" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
