import { ReactComponent as PlaySVG } from '../Assets/Play.svg';
import { ReactComponent as LikeSVG } from '../Assets/Heart.svg';
import { ReactComponent as DotSVG } from '../Assets/Dots.svg';
import { ReactComponent as ArrowSVG } from '../Assets/ArrowDown.svg';
import { ReactComponent as PlusSVG } from '../Assets/Plus.svg';
import { ReactComponent as ShuffleSVG } from '../Assets/Shuffle.svg';
import { ReactComponent as BackSVG } from '../Assets/Backward.svg';
import { ReactComponent as Play2SVG } from '../Assets/PlayerPlay.svg';
import { ReactComponent as ForwardSVG } from '../Assets/Forward.svg';
import { ReactComponent as LoopSVG } from '../Assets/Loop.svg';
import { ReactComponent as ComputerSVG } from '../Assets/Computer.svg';
import { ReactComponent as ShareSVG } from '../Assets/Share.svg';
import { ReactComponent as HamburgerSVG } from '../Assets/Hamburger.svg';
import { ReactComponent as PauseSVG } from '../Assets/PlayerPause.svg';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

function PlayerComponent(props) {
  const [isPlayer,setPlayer] = useState(false);
  const [averageColor, setAverageColor] = useState({ R: 0, G: 0, B: 0 });

  useEffect(() => {
    const getColor = (imgURL, ratio, callback) => {
      const img = document.createElement('img');
      img.crossOrigin = 'Anonymous';

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0);

        let data, length;
        let i = -4,
          count = 0;
        try {
          data = context.getImageData(0, 0, canvas.width, canvas.height);
          length = data.data.length;
        } catch (err) {
          console.error(err);
          callback({
            R: 0,
            G: 0,
            B: 0,
          });
          return;
        }

        let R = 0,
          G = 0,
          B = 0;
        while ((i += ratio * 4) < length) {
          ++count;
          R += data.data[i];
          G += data.data[i + 1];
          B += data.data[i + 2];
        }

        R = ~~(R / count);
        G = ~~(G / count);
        B = ~~(B / count);

        callback({
          R,
          G,
          B,
        });
      };

      img.src = imgURL;
    };

    getColor(props.item.type === "track" ? (props.item.album.images.length ? props.item.album.images[0].url: "") : "", 5, setAverageColor);
  }, [props.item]);

  const rgbColor = `rgb(${averageColor.R}, ${averageColor.G}, ${averageColor.B})`;
  function handleClick() {
    setPlayer(!isPlayer);
  }
    return (
      <div className='font-SpotifyCircular-Medium h-full'>
        <div className='hidden md:block h-full'>
          <div className='grid grid-cols-5 h-full'>
            <div className='col-span-1 inline-flex items-center h-full'>
              <img src={props.item.type === "track" ? (props.item.album.images.length ? props.item.album.images[0].url: "") : ""} width={72} height={72} className='rounded-md mx-4'/>
              <div>
                <h1 className='font-semibold text-white'>{props.item.name}</h1>
                  <div className='inline-flex'>
                    {props.item.artists.map((artist, index) => (
                      <h1 key={index} className="text-sm text-left text-text-grey flex-shrink-0">
                        {artist.name}
                        {index < props.item.artists.length - 1 && ",\u00A0"} {/* Add comma if not the last artist */}
                      </h1>
                    ))}
                  </div>
              </div>
            </div>
            <div className='col-span-3 grid grid-cols-1 items-center justify-center h-full'>
              <div className='inline-flex gap-5 justify-center items-center mt-4'>
                <ShuffleSVG width={20} height={20} className=""/>
                <BackSVG width={20} height={20} className=""/>
                {props.isPlaying ? <PauseSVG width={40} height={40} onClick={props.handlePlayPause} className="mx-3 fill-current"/>  :<Play2SVG width={40} height={40} onClick={props.handlePlayPause} className="mx-3 fill-current"/>}
                <ForwardSVG width={20} height={20} className=""/>
                <LoopSVG width={20} height={20} className=""/>
              </div>
              <div className='inline-flex gap-5 justify-center items-center'>
                <h1>0:00</h1>
                <hr className='w-4/6 border'/>
                <h1>3:15</h1>
              </div>
            </div>
            <div className='col-span-1 inline-flex gap-4 items-center justify-end mr-4 h-full text-right'>

                <HamburgerSVG width={25} height={25} className=""/>
                <ComputerSVG width={25} height={25} className=""/>
                <hr className='w-2/5 border'/>
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <div className="absolute bottom-16 w-full h-20 ">
            <div style={{ backgroundColor: rgbColor, }} className="h-4/5 rounded-md mx-2 grid grid-cols-2 justify-center items-center" onClick={handleClick}>
              <div className='inline-flex w-screen'>
                <img src={props.item.type === "track" ? (props.item.album.images.length ? props.item.album.images[0].url: "") : ""} width={48} height={48} className='rounded-md mx-2'/>
                <div className='ml-1 leading-snug'>
                  <h1 className='font-semibold text-white'>{props.item.name}</h1>
                  <div className='inline-flex'>
                    {props.item.artists.map((artist, index) => (
                      <h1 key={index} className="text-sm text-left text-text-grey flex-shrink-0">
                        {artist.name}
                        {index < props.item.artists.length - 1 && ",\u00A0"} {/* Add comma if not the last artist */}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-end'>
                <div className='inline-flex text-white'>
                  <LikeSVG width={25} height={25} className="mx-3 fill-current" />
                  {props.isPlaying ? <PauseSVG width={25} height={25} onClick={props.handlePlayPause} className="mx-3 fill-current"/>  :<PlaySVG width={25} height={25} onClick={props.handlePlayPause} className="mx-3 fill-current"/>}
                  
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: rgbColor, }} className={isPlayer ? 'absolute bottom-0 p-0 w-screen h-screen  text-white' : 'hidden'}>
            <div className='grid grid-cols-3 mx-4 mt-20'>
              <ArrowSVG width={25} height={25} onClick={handleClick}/>
              <div className='inline-flex text-center justify-center'>
                    {props.item.artists.map((artist, index) => (
                      <h1 key={index} className="text-sm  text-white flex-shrink-0">
                        {artist.name}
                        {index < props.item.artists.length - 1 && ",\u00A0"}
                      </h1>
                    ))}
                  </div>
              <DotSVG width={25} height={25} className="justify-self-end"/>
            </div>
            <div className='mx-6'>
              <img src={props.item.type === "track" ? (props.item.album.images.length ? props.item.album.images[0].url: "") : ""}  className='rounded-2xl mt-20 w-full max-w-sm mx-auto'/> 
            </div>
            <div className='grid grid-cols-2 mt-16 mx-4'>
              <div className='items-center'>
                <h1 className='text-2xl font-bold w-screen'>{props.item.name}</h1>
                <div className='inline-flex'>
                  {props.item.artists.map((artist, index) => (
                    <h1 key={index} className="text-sm text-left text-text-grey flex-shrink-0">
                      {artist.name}
                      {index < props.item.artists.length - 1 && ",\u00A0"}
                    </h1>
                  ))}
                </div>
              </div>
              <div className='inline-flex justify-end items-center'>
                <PlusSVG width={25} height={25} className=""/>
              </div>
            </div>
            <div className='inline-flex gap-12 mt-8 w-screen justify-center items-center'>
              <ShuffleSVG width={25} height={25} className=""/>
              <BackSVG width={25} height={25} className=""/>
              {props.isPlaying ? <PauseSVG width={64} height={64} onClick={props.handlePlayPause} className="mx-3 fill-current"/>  :<Play2SVG width={64} height={64} onClick={props.handlePlayPause} className="mx-3 fill-current"/>}
              <ForwardSVG width={25} height={25} className=""/>
              <LoopSVG width={25} height={25} className=""/>
            </div>
            <div className='grid grid-cols-2 mt-6 mx-4'>
              <ComputerSVG width={25} height={25} className=""/>
              <div className='inline-flex items-center gap-10 justify-end'>
                <ShareSVG width={25} height={25} className=""/>
                <HamburgerSVG width={25} height={25} className=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default PlayerComponent;