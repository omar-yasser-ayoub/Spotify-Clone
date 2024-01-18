import { ReactComponent as PlaySVG } from '../Assets/Play.svg';
import { ReactComponent as LikeSVG } from '../Assets/Heart.svg';

function PlayerComponent() {
    return (
        <div className="absolute bottom-16 w-full h-20">
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
    )
}
export default PlayerComponent;