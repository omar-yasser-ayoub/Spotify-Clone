import LibraryCard from "./LibraryCard";
import { ReactComponent as FilterSVG } from '../Assets/Filter.svg';

function LibraryComponent(props) {
    return (
      <div className="z-0 w-full absolute bg-dark-bg h-full bg-fixed text-white font-SpotifyCircular-Medium overflow-y-scroll">
        <div className="mx-4">
          <div className="fixed w-full z-10">
            <div className="bg-dark-bg">
              <h1 className="text-2xl pt-8">Your Library</h1>
              <div className="inline-flex gap-2 mt-5 mb-2">
                <div className="bg-light-bg py-2 px-4 rounded-full">
                  <h1>Playlists</h1>
                </div>
                <div className="bg-light-bg py-2 px-4 rounded-full">
                  <h1>Albums</h1>
                </div>
                <div className="bg-light-bg py-2 px-4 rounded-full">
                  <h1>Artists</h1>
                </div>
              </div>
            </div>
            <div className="-mx-4 h-1 bg-gradient-to-t to-black from-transparent"></div>
          </div>
          <div className="h-full absolute top-32 pt-4">
            <div className="mb-3">
              <div className="inline-flex gap-2 items-center">
                <FilterSVG className="w-5"/>
                <h2 className="mt-1">Recents</h2>
              </div>
            </div>
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <div className="h-36 md:hidden">

          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LibraryComponent;