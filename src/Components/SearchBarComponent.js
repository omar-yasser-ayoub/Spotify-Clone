import { useEffect, useState } from 'react';
import { ReactComponent as SearchSVG } from '../Assets/Search.svg';
import axios from 'axios';
import SearchArtist from './SearchArtist.js'
import SearchAlbum from './SearchAlbum.js'
function SearchBarComponent(props) {
  const [isSearching, setSearching] = useState(false);
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [tracks, setTracks] = useState([])
  const [searchKey, setSearchKey] = useState("")


  function handleSearch(e) {
    setSearchKey(e.target.value)
    searchArtists();
  }
  const searchArtists = async () => {
    if (searchKey.length > 1) {
      try {
        const artist = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          params: {
            q: searchKey,
            type: "artist"
          }
        });
        const album = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          params: {
            q: searchKey,
            type: "album"
          }
        });
        const track = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          params: {
            q: searchKey,
            type: "track"
          }
        });
        var totalItems = [...artist.data.artists.items, ...track.data.tracks.items];
        totalItems.sort((a,b) => b.popularity - a.popularity);
        
        
        setTracks(totalItems);
        setAlbums(album.data.albums.items);
        setArtists(artist.data.artists.items);
        console.log(totalItems)

      } catch (error) {
        console.error("Error searching artists:", error);
      }
    }
  };
  const renderTotal = () => {
    return tracks.map(track => (
      <div key={track.id}>
        {track.type === "track" ? 
        (track.album.images.length ? <SearchAlbum name={track.name} img={track.album.images[0].url} artist={track.artists} /> : <SearchArtist artist={track.name} img="" />) :
        (track.images.length ? <SearchArtist artist={track.name} img={track.images[0].url} /> : <SearchArtist artist={track.name} img="" />)
        }
      </div>
    ))
  }

  const renderArtists = () => {
    return artists.map(artist => (
      <div key={artist.id}>
        {artist.images.length ? <SearchArtist artist={artist.name} img={artist.images[0].url} /> : <SearchArtist artist={artist.name} img="" />}
      </div>
    ))
  }
  const renderAlbums = () => {
    return albums.map(album => (
      <div key={album.id}>
        {album.images.length ? <SearchAlbum name={album.name} img={album.images[0].url} artist={album.artists} /> : <SearchArtist artist={album.name} img="" />}
        
      </div>
    ))
  }
  const renderTracks = () => {
    return tracks.map(track => (
      <div key={track.id}>
        {track.album.images.length ? <SearchAlbum name={track.name} img={track.album.images[0].url} artist={track.artists} /> : <SearchArtist artist={track.name} img="" />}
        
      </div>
    ))
  }

  function handleClick() {
    setSearching(!isSearching);
    setSearchKey("");
    searchArtists();
  }
    return (
      <div>
        <div className="inline-flex rounded-md bg-white p-3 mt-4 w-full" onClick={handleClick}>
              <SearchSVG width={20} height={20} className="mx-2 text-black"/>
              <h1 className="text-sm text-black">What do you want to listen to?</h1>
        </div>


        <div className= {isSearching ? 'absolute w-screen min-h-full bg-dark-bg left-0 top-0 z-10' : 'hidden' }>
          <div className='bg-search-bar-bg-light h-16 p-4 grid grid-cols-7 w-screen items-center'>
            <div className='bg-search-bar-bg p-2 col-span-6 text-sm text-text-grey rounded-xl inline-flex'>
              <SearchSVG width={20} height={20} className="mr-2 ml-1 text-text-grey"/>
              <input className='bg-search-bar-bg w-full' placeholder="What do you want to listen to?" onChange={handleSearch} ></input>
            </div>
            <div onClick={handleClick}>
              <h1 className='text-xs text-center ml-2'>Cancel</h1>
            </div>
          </div>
        <div className='mx-4 mt-4'>
          {renderTotal()}

        </div>  
        </div>
      </div>
    );
  }
  
  export default SearchBarComponent;