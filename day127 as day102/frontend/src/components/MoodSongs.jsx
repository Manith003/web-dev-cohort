import { FaPlay, FaMusic } from "react-icons/fa";

const MoodSongs = ({ songs, onSongSelect, currentSongIndex }) => {
  if (!songs || songs.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 mb-20">
      <div className="px-4 md:px-0">
        <h2 className="text-3xl font-bold text-white mb-2">
          Recommended Songs
        </h2>
        <p className="text-lg text-neutral-400 mb-6">
          Based on your mood:{" "}
          <span className="font-semibold text-cyan-400 capitalize">
            {songs[0]?.mood}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {songs.map((song, index) => {
          const isActive = index === currentSongIndex;
          return (
            <div
              key={index}
              className={`
                flex items-center justify-between p-4 rounded-lg cursor-pointer
                transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "bg-cyan-500/20"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }
              `}
              onClick={() => onSongSelect(index)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`text-xl ${
                    isActive ? "text-cyan-400" : "text-neutral-500"
                  }`}
                >
                  {isActive ? <FaPlay /> : <FaMusic />}
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      isActive ? "text-cyan-300" : "text-white"
                    }`}
                  >
                    {song.title}
                  </h3>
                  <p className="text-neutral-400">{song.artist}</p>
                </div>
              </div>
              <button
                className="hidden md:block bg-cyan-500 text-black font-bold py-2 px-5 rounded-full
                           hover:bg-cyan-400 transition-colors duration-200"
                onClick={() => onSongSelect(index)}
              >
                Play
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSongs;
