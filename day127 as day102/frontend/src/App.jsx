import { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import Navbar from "./components/Navbar";
import MoodSongs from "./components/MoodSongs";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle selecting a song from the list
  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  // Function to close the player
  const handleClosePlayer = () => {
    setIsPlaying(false);
    setCurrentSongIndex(null);
  };
  
  // Functions for player controls
  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const currentSong = currentSongIndex !== null ? songs[currentSongIndex] : null;

  return (
    <div className="bg-neutral-900 text-white min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <FacialExpression setSongs={setSongs} />
        {songs.length > 0 && (
          <MoodSongs
            songs={songs}
            onSongSelect={handleSongSelect}
            currentSongIndex={currentSongIndex}
          />
        )}
      </div>
      
      {/* Conditionally render the animated AudioPlayer modal */}
      {currentSong && (
        <AudioPlayer
          song={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={handleClosePlayer}
        />
      )}
    </div>
  );
};

export default App;