import AlbumComponent from "./AlbumComponent";
import CardComponent from "./CardComponent";
import ArtistComponent from "./ArtistComponent";
import PodcastComponent from "./PodcastComponent";
import { useEffect, useState } from "react";
import axios from 'axios';
function HomeComponent(props) {
  const [recentData, setRecentData] = useState([]);
  const generateRecent = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        });
        console.log(data)
      } catch (error) {
        console.error("Error searching artists:", error);
      }
  };
  useEffect(() => {
    generateRecent();
  },[]);
    return (
      <div className="z-0 w-full absolute bg-dark-bg h-max bg-fixed">
      <div className="mx-4">
        <h1 className="text-4xl font-semibold text-white mt-8">Good evening</h1> 
        <div className='grid grid-cols-2 gap-2 mt-6 justify-center items-center'>
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
        <div className='overflow-y-hidden no-scrollbar -mx-4'>
          <div className="flex flex-row gap-2 mt-6 ml-4">
            <ArtistComponent title="A Call" artist="EDEN" type="Single" img="https://i.scdn.co/image/ab6761610000e5eb4c32f7043d79950ca79a7b0c"/>
            <PodcastComponent title="The Magnus Archives" artist="Rusty Quill" img="https://m.media-amazon.com/images/I/513qiu+MaBL._SL500_.jpg"/>
            <AlbumComponent title="Optifine" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
            <AlbumComponent title="SNAKE EYES" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
            <AlbumComponent title="Nothing" artist="Bruno Major" type="Single" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
            <AlbumComponent title="Sydney" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
            <AlbumComponent title="Ogden" artist="gabby start" type="Single" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
            <AlbumComponent title="CABIN FEVER" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-white mt-6">Your favourite artists</h1>
        <div className='overflow-y-hidden no-scrollbar -mx-4'>
          <div className="flex flex-row gap-2 mt-6 ml-4">
            <AlbumComponent title="A Call" artist="EDEN" type="Single" img="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg"/>
            <AlbumComponent title="bugging!" artist="brakence" type="Single" img="https://images.genius.com/08f7968612f58dfe31462ea1bbd29119.1000x1000x1.png"/>
            <AlbumComponent title="Optifine" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
            <AlbumComponent title="SNAKE EYES" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
            <AlbumComponent title="Nothing" artist="Bruno Major" type="Single" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
            <AlbumComponent title="Sydney" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
            <AlbumComponent title="Ogden" artist="gabby start" type="Single" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
            <AlbumComponent title="CABIN FEVER" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-white mt-6">Your favourite artists</h1>
        <div className='overflow-y-hidden no-scrollbar -mx-4'>
          <div className="flex flex-row gap-2 mt-6 ml-4">
            <AlbumComponent title="A Call" artist="EDEN" type="Single" img="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg"/>
            <AlbumComponent title="bugging!" artist="brakence" type="Single" img="https://images.genius.com/08f7968612f58dfe31462ea1bbd29119.1000x1000x1.png"/>
            <AlbumComponent title="Optifine" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg"/>
            <AlbumComponent title="SNAKE EYES" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-BnfipywjD8HVOvhQ-kcZLxA-t500x500.jpg"/>
            <AlbumComponent title="Nothing" artist="Bruno Major" type="Single" img="https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187"/>
            <AlbumComponent title="Sydney" artist="gabby start" type="Single" img="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg"/>
            <AlbumComponent title="Ogden" artist="gabby start" type="Single" img="https://images.genius.com/9173547e28544b1f66ff12a3b4e75b02.1000x1000x1.jpg"/>
            <AlbumComponent title="CABIN FEVER" artist="Aries" type="Single" img="https://i1.sndcdn.com/artworks-fcgacUsVJnMdw86Q-OYdcvw-t500x500.jpg"/>
          </div>
        </div>
        <div className="h-40">

        </div>
      </div>
    </div>
    );
  }
  
export default HomeComponent;