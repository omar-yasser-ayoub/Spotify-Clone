import { useState } from 'react';
import { ReactComponent as SearchSVG } from '../Assets/Search.svg';
import axios from 'axios';
import SearchArtist from './SearchArtist.js'
import SearchAlbum from './SearchAlbum.js'
function SearchBarComponent(props) {
  const [isSearching, setSearching] = useState(false);
  const [searchitems, setSearchItems] = useState([])
  const [searchKey,setSearchKey] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  function handleSearch(e) {
    setSearchKey(e.target.value)
    setLoaded(false)
    searchArtists();
  }
  const searchArtists = async () => {
    if (searchKey.length <= 1){
      setSearchItems([]);
    }
    if (searchKey.length > 1) {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          params: {
            q: searchKey,
            type: "artist,track,album"
          }
        });

        var artists = data.artists;
        var albums = data.albums;
        var tracks = data.tracks;
        var total = new Set();

        for (var i = 0; i < artists.items.length; i++) {
          total.add(artists.items[i]);
          for (var k = 0; k < tracks.items.length; k++) {
            for (var j = 0; j < tracks.items[k].artists.length; j++) {
              if (tracks.items[k].artists[j].name === artists.items[i].name) {
                total.add(tracks.items[k]);
              }
            }
          }
          for (k = 0; k < albums.items.length; k++) {
            for (j = 0; j < albums.items[k].artists.length; j++) {
              if (albums.items[k].artists[j].name === artists.items[i].name) {
                total.add(albums.items[k]);
              }
            }
          }
          total.add(albums.items[i])
          total.add(tracks.items[i])
        }
        console.log(Array.from(total))
        setSearchItems(Array.from(total));
        setLoaded(true)
      } catch (error) {
        console.error("Error searching artists:", error);
      }
    }
  };
  const renderTotal = () => {
    return searchitems.map(item => (
      <div key={item.id}>
        {item.type === "artist" 
        ?
        (item.images.length ? <SearchArtist artist={item.name} img={item.images[0].url} /> : <SearchArtist artist={item.name} img="" />)
        : 
          (item.type === "track" 
          ?
          (item.album.images.length ? <SearchAlbum item={item}/> : <SearchAlbum artist={item.name} img="" />)
          :
          (item.images.length ? <SearchAlbum item={item} name={item.name} img={item.images[0].url} artist={item.artists} /> : <SearchAlbum artist={item.name} img="" />)
          )
        }
      </div>
    ))
  }
  const renderLoadingDiv = () => {
    const items = []
    for (let i = 0; i < 15; i++) {
      items.push(
        <div key={i} className="items-center grid grid-cols-1 my-2">
          <div className="inline-flex h-16 items-center justify-start">
               <div className="h-4/5 aspect-square bg-light-bg animate-pulse" />            
              <div className="h-2 w-3/4 bg-light-bg ml-2" />
          </div>
        </div>
      );
    }
    return items 
  }

  function handleClick() {
    setSearching(!isSearching);
    setSearchKey("");
    searchArtists();
  }
    return (
      <div className='md:relative -mx-4'>
        <div className={isSearching ? "hidden" :"inline-flex rounded-md bg-white p-3 mt-4 w-full font items-center mx-4"} onClick={handleClick}>
              <SearchSVG width={20} height={20} className="mx-2 text-black"/>
              <h1 className="text-sm text-black">What do you want to listen to?</h1>
        </div>
        <div className= {isSearching ? 'absolute w-screen md:min-h-screen md:w-full min-h-full md:min-h-content bg-dark-bg left-0 top-0 z-10 ' : 'hidden' }>
          <div className='bg-search-bar-bg-light md:bg-dark-bg h-16 p-4 grid grid-cols-7 w-full items-center'>
            <div className='bg-search-bar-bg p-2 col-span-6 text-sm text-text-grey rounded-xl inline-flex md:col-span-2' >
              <SearchSVG width={20} height={20} className="mr-2 ml-1 text-text-grey"/>
              <input className='bg-search-bar-bg w-full' placeholder="What do you want to listen to?" onChange={handleSearch} ></input>
            </div>
            <div onClick={handleClick}>
              <h1 className='text-xs text-center ml-2'>Cancel</h1>
            </div>
          </div>
          <div className='mx-4 mt-4'>
            {!isLoaded && searchKey.length > 1 ? renderLoadingDiv() : renderTotal()}
          </div>  
        </div>
      </div>
    );
  }
  
  export default SearchBarComponent;