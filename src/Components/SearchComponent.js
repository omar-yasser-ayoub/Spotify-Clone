import VideoComponent from "./VideoComponent";
import vid1 from "./Videos/Brakence.mp4";
import vid2 from "./Videos/Eden.mp4";
import vid3 from "./Videos/Riff.mp4";
import GenreComponent from "./GenreComponent";
import SearchBarComponent from "./SearchBarComponent";
function SearchComponent(props) {
    return (
      <div className="z-0 w-full absolute text-white bg-dark-bg h-max font-SpotifyCircular-Bold md:static bg-fixed">
        <div className="mx-4">
          <h1 className="text-2xl mt-8 md:hidden">Search</h1> 
          <SearchBarComponent token={props.token} />
          <h1 className="mt-8 md:hidden">Explore your genres</h1>
          <div className="grid grid-cols-3 -mx-2 mt-4 md:hidden">
            <VideoComponent genre="glitch" vid={vid1}/>
            <VideoComponent genre="emo rap" vid={vid2}/>
            <VideoComponent genre="energetic" vid={vid3}/>
          </div>
          <h1 className="mt-8">Browse all</h1>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-iU8I8bH903XgdVTM-e92KNg-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-iU8I8bH903XgdVTM-e92KNg-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-iU8I8bH903XgdVTM-e92KNg-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-iU8I8bH903XgdVTM-e92KNg-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qtTeFHOJZRXR-0-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-r8yJcb53CvzhMqrC-XqRXTQ-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
            <GenreComponent title="Music" imageUrl="https://i1.sndcdn.com/artworks-qqdzEemx0vyT2Rr9-s2yzZw-t500x500.jpg" />
          </div>
          <div className="h-40">

        </div>
        </div>
      </div>
    );
  }
  
  export default SearchComponent;