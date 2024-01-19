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
import { useState } from 'react';

function PlayerComponent() {
  const [isPlayer,setPlayer] = useState(false);
  function handleClick() {
    setPlayer(!isPlayer);
  }
    return (
      <div>
        <div className="absolute bottom-16 w-full h-20 ">
          <div className="bg-gray-600 h-4/5 rounded-md mx-2 grid grid-cols-2 justify-center items-center" onClick={handleClick}>
            <div className='inline-flex'>
              <img src='https://i.scdn.co/image/ab67616d0000b2730cffe2d0b92e5fa76c36913d' width={48} height={48} className='rounded-md mx-2'/>
              <div className='ml-1 leading-snug'>
                <h1 className='font-semibold text-white'>Reaching 2</h1>
                <h1 className='text-text-grey'>EDEN</h1>
              </div>
            </div>
            <div className='flex items-center justify-end'>
              <div className='inline-flex text-white'>
                <LikeSVG width={25} height={25} className="mx-3 fill-current" />
                <PlaySVG width={25} height={25} className="mx-3 fill-current"/>
              </div>
            </div>
          </div>
        </div>
        <div className={isPlayer ? 'absolute bottom-0 p-0 w-screen h-screen bg-gray-600  text-white' : 'hidden'}>
          <div className='grid grid-cols-3 mx-4 mt-20'>
            <ArrowSVG width={25} height={25} onClick={handleClick}/>
            <h1 className='text-center'>EDEN</h1>
            <DotSVG width={25} height={25} className="justify-self-end"/>
          </div>
          <div className='mx-6'>
            <img src='https://i.scdn.co/image/ab67616d0000b2730cffe2d0b92e5fa76c36913d' className='rounded-2xl mt-20 w-full'/> 
          </div>
          <div className='grid grid-cols-2 mt-16 mx-4'>
            <div className='items-center'>
              <h1 className='text-2xl font-bold'>Reaching 2</h1>
              <h1 className='text-sm text-text-grey'>EDEN</h1>
            </div>
            <div className='inline-flex justify-end items-center'>
              <PlusSVG width={25} height={25} className=""/>
            </div>
          </div>
          <div className='inline-flex gap-14 mt-8 w-screen justify-center items-center'>
            <ShuffleSVG width={25} height={25} className=""/>
            <BackSVG width={25} height={25} className=""/>
            <Play2SVG width={64} height={64} className=""/>
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
    )
}
export default PlayerComponent;