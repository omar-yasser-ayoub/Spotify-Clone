import AlbumComponent from "./AlbumComponent";
import CardComponent from "./CardComponent";
import ArtistComponent from "./ArtistComponent";
import PodcastComponent from "./PodcastComponent";
import { useEffect, useState } from "react";
import axios from 'axios';
function HomeComponent(props) {
  const [recentData, setRecentData] = useState([]);
  const [favouriteArtists, setFavouriteArtists] = useState([]);
  const [savedTracks, setSavedTracks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const generateRecent = async () => {
    if (props.token != "") {
    try {
      const [topArtistsResponse, topTracksResponse, savedTracksResponse] = await Promise.all([
        axios.get("https://api.spotify.com/v1/me/top/artists", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }),
        axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }),
        axios.get("https://api.spotify.com/v1/me/tracks", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }),
      ]);
      
      const savedTracksData = savedTracksResponse.data;
      const topArtistsData = topArtistsResponse.data;
      const topTracksData = topTracksResponse.data;

      var finalArray = new Set();

      for (var i = 0; finalArray.size < 8; i++) {
        var added = false
        finalArray.add(topArtistsData.items[i]);
        for (var j = 0; j < 20 && added === false; j++) {
          if (topTracksData.items[j]) {
            for (var k = 0; k < topTracksData.items[j].artists.length; k++) {
              if (topTracksData.items[j].artists[k].name === topArtistsData.items[i].name) {
                finalArray.add(topTracksData.items[j]);
                added = true;
              }
            }
          }
        }    
      }

      const genres = new Set()
      for (i = 0; i <topArtistsData.items.length; i++) {
        for (j = 0; j <topArtistsData.items[i].genres.length; j++) {
          genres.add(topArtistsData.items[i].genres[j])
        }
      } 
      const genresArray = Array.from(genres).slice(0,3)
      const genresString = genresArray.join(', ');

      const artists = new Set()
      for (i = 0; i <topArtistsData.items.length; i++) {
        artists.add(topArtistsData.items[i].id);
      } 
      const artistsArray = Array.from(artists).slice(0,1)
      const artistString = artistsArray.join(', ');

      const tracks = new Set()
      for (i = 0; i <topTracksData.items.length; i++) {
        tracks.add(topTracksData.items[i].id);
      } 
      const tracksArray = Array.from(tracks).slice(0,1)
      const tracksString = tracksArray.join(', ');

      const { data } = await axios.get("https://api.spotify.com/v1/recommendations", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          params: {
            seed_artists: artistString,
            seed_genres: genresString,
            seed_tracks: tracksString
          }
      });

      setRecommendations(data.tracks)
      setRecentData(Array.from(finalArray))
      console.log(topArtistsData, topTracksData)
      setFavouriteArtists(topArtistsData.items)
      setSavedTracks(savedTracksData.items)
      setLoaded(true)
    } catch (error) {
      console.error("Error searching artists:", error);
    }
  }
  };
  useEffect(() => {
    generateRecent();
  },[props.token]);

  const renderRecent = () => {
    return recentData.map((item, index) => (
      <div key={item.id} className={(index === 6 || index === 7) ? "md:hidden" : ""}>
        {item.type === "artist" 
          ?
          (<div>
            <CardComponent title={item.name} img={item.images[0].url} isLoaded={isLoaded} />
          </div>)
          : 
          (<div>
            <CardComponent isPlaying={props.isPlaying} pause = {props.pause} play={props.play}  item={item} title={item.name} img={item.album.images[0].url} isLoaded={isLoaded} />
          </div>)
        }
      </div>
    ))
  }
  
  const renderArtists = () => {
    return favouriteArtists.map(item => (
      <ArtistComponent key={item.id} artist={item.name} img={item.images.length ? item.images[0].url : ""} />
    ))
  }

  const renderTracks = () => {
    return savedTracks.map(item => (
      <AlbumComponent isPlaying={props.isPlaying} pause = {props.pause} play={props.play} item={item.track}  key={item.track.id} title={item.track.name} artist={item.track.artists[0].name} img={item.track.album.images.length ? item.track.album.images[0].url : "" }/>
    ))
  }

  const renderRecommendations = () => {
    return recommendations.map(item => (
      <AlbumComponent isPlaying={props.isPlaying} pause = {props.pause} play={props.play} item={item}  key={item.id} title={item.name} artist={item.artists[0].name} img={item.album.images.length ? item.album.images[0].url : "" }/>
    ))
  }
  const recentLoadingDiv = () => {
    const items = []
    for (let i = 0; i < 8; i++) {
      items.push(
        <div key={i} className={`h-16 w-full rounded-md bg-light-bg text-white justify-start items-center inline-flex ${i === 6 || i === 7 ? 'md:hidden' : ''}`}>
          <div className="h-full rounded-l-md aspect-square bg-text-grey animate-pulse" />
          <div className="grid grid-cols-2 w-full px-4">
            <div className="h-2 w-full col-span-2 rounded bg-text-grey animate-pulse">
            </div>
          </div>
        </div>
      );
    }
    return items 
  }
  const tracksLoadingDiv = () => {
    const items = []
  for (let i = 0; i < 8; i++) {
    items.push(
      <div key={i} className="h-6/12 w-5/12 max-w-56 rounded-md justify-start items-center flex-shrink-0 text-sm pr-4 leading-tight">
        <div className="w-full aspect-square animate-pulse bg-light-bg max-w-52" />
        <div className=" w-3/4 rounded h-2 mt-2 bg-light-bg animate-pulse max-w-52" />
        <div className=" w-3/5 rounded h-2 mt-2 bg-light-bg animate-pulse max-w-40" />
      </div>
    );
  }
  return items
  }


    return (
      <div className="z-0 w-full absolute top-20 bg-dark-bg h-max font-SpotifyCircular-Light md:static md:h-full bg-fixed">
      <div className="mx-4">
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 mt-6 justify-center items-center'>
          {isLoaded ? renderRecent() : recentLoadingDiv()}
        </div>
        <h1 className="text-2xl font-semibold text-white mt-6 font-SpotifyCircular-Medium">Jump back in</h1>
        <div className='overflow-y-hidden no-scrollbar -mx-4'>
          <div className="flex flex-row gap-2 mt-6 ml-4 md:gap-6">
            {isLoaded ? renderTracks() : tracksLoadingDiv()}
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-white mt-6 font-SpotifyCircular-Medium">Your favourite artists</h1>
        <div className=' overflow-y-hidden no-scrollbar -mx-4'>
          <div className="w-full flex flex-row gap-2 mt-6 ml-4 md:gap-6">
          {isLoaded ? renderArtists() : tracksLoadingDiv()}
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-white mt-6 font-SpotifyCircular-Medium">Recommended Songs</h1>
        <div className='overflow-y-hidden no-scrollbar -mx-4'>
          <div className="flex flex-row gap-2 mt-6 ml-4 md:gap-6">
          {isLoaded ? renderRecommendations() :tracksLoadingDiv()}
          </div>
        </div>
        <div className="h-44 md:h-4">

        </div>
      </div>
    </div>
    );
  }
  
export default HomeComponent;