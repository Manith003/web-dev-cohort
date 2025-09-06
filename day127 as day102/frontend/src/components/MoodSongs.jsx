import { useState } from "react";

const MoodSongs = () => {
  const [Songs, setSongs] = useState([
    {
      title: "Song 1",
      artist: "Artist 1",
      url: "test_url",
    },
    {
      title: "Song 1",
      artist: "Artist 1",
      url: "test_url",
    },
    {
      title: "Song 1",
      artist: "Artist 1",
      url: "test_url",
    },
    {
      title: "Song 1",
      artist: "Artist 1",
      url: "test_url",
    },
  ]);

  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <div className="bg-neutral-700">
      <h2 className="text-3xl font-bold px-45 py-4 pt-10 text-white">
        Recommended Songs
      </h2>
      {Songs.map((Song, index) => {
        return (
          <div
            key={index}
            className="px-45 py-4 pt-10 flex items-center justify-between p-4 border-b border-gray-200"
          >
            <div className="title">
              <h3 className="text-xl font-semibold">{Song.title}</h3>
              <p className="text-gray-600">{Song.artist}</p>
            </div>
            <div
              className="play-pause-btn"
              onClick={() => handlePlayPause(index)}
            >
              {playingIndex === index ? (
                <i className="ri-pause-line cursor-pointer text-2xl"></i>
              ) : (
                <i className="ri-play-large-fill cursor-pointer text-2xl"></i>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoodSongs;
