
const MoodSongs = ({ Songs }) => {
  return (
    <div className="bg-neutral-700">
      <h2 className="text-3xl font-bold px-45 py-4 pt-10 text-white">
        Recommended Songs
      </h2>
      <p className="text-3xl px-45 py-4 text-white">your mood is {Songs[0]?.mood}</p>
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
            <div className="play-pause-btn">
              <audio src={Song.audio} controls></audio>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoodSongs;
