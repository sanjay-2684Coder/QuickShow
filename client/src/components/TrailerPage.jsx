import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { PlayCircleIcon } from 'lucide-react';

const dummyTrailers = [
  {
    image: 'https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM',
  },
  {
    image: 'https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8',
  },
  {
    image: 'https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y',
  },
  {
    image: 'https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g',
  },
];

const TrailerPage = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Watch Trailers</h1>

      {/* Main Video Player */}
      <div className="relative mx-auto max-w-[960px]">
        <ReactPlayer
          key={currentTrailer.videoUrl}
          url={currentTrailer.videoUrl}
          playing
          muted={false}
          controls
          width="100%"
          height="540px"
          className="rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrailer(trailer)}
            className={`relative cursor-pointer rounded-xl overflow-hidden ${
              currentTrailer.videoUrl === trailer.videoUrl ? 'ring-2 ring-pink-500' : ''
            }`}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-full object-cover brightness-75 hover:brightness-100 transition"
            />
            <PlayCircleIcon
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-90"
              size={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerPage;
