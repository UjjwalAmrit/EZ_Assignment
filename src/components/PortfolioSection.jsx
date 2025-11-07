
import { useState } from 'react';
import Container from './UI/Container.jsx';


const videos = [
  {
    poster: '/portfolio/thumbnail.png',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    poster: '/portfolio/thumbnail.png',
    url: 'https://www.youtube.com/watch?v=... (another video URL)',
  },
  {
    poster: '/portfolio/thumbnail.png',
    url: 'https://www.youtube.com/watch?v=... (a third video URL)', 
  },
];

export default function PortfolioSection() {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
   
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
  };

  const nextVideo = () => {
   
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
  };

  const currentVideo = videos[currentIndex]; 

  return (
   
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      
    
      <img
        src="/portfolio/cam-group.svg"
        alt="camera decorative"
        className="pointer-events-none select-none hidden md:block absolute left-0 top-28 w-48 opacity-80"
        draggable={false}
      />

     
      <img
        src="/portfolio/Footer-Vector.svg"
        alt="decorative pattern"
        className="pointer-events-none select-none hidden md:block absolute right-0 bottom-0 w-64 opacity-90"
        draggable={false}
      />

      <Container>
      
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-ink">The Highlight Reel</h2>
          <p className="mt-2 text-ink/80">Watch the magic we've captured.</p>
        </div>

     
        <div className="relative mx-auto mt-8 max-w-4xl">
          
          
          <img
            src="/portfolio/Group11.jpg"
            alt="film frame"
            className="w-full h-auto select-none"
            draggable={false}
          />

          {/* Video area */}
          <div className="absolute inset-0 flex items-center justify-center px-[8%]">
            <div className="relative w-full aspect-[16/9] bg-black/5 overflow-hidden">
              
              <img src={currentVideo.poster} alt="reel poster" className="w-full h-full object-cover"/>
              
              {/* Play button */}
              <a
                href={currentVideo.url} 
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 grid place-items-center"
                aria-label="Play highlight reel"
              >
               
                <span className="grid place-items-center rounded-lg" style={{ width: 70, height: 50, background: '#FE0000' }}>
                  
                  
                  <img 
                    src="/portfolio/play-icon.png" 
                    alt="Play" 
                    className="w-8 h-8" 
                  />
                 

                </span>
              </a>
              
              
            </div>
            <button
                onClick={prevVideo}
                className="absolute left-[1.5%] top-1/2 -translate-y-1/2 p-2 opacity-80 hover:opacity-100"
                aria-label="Previous video"
              >
                {/* Replaced inline SVG with img tag */}
                <img
                  src="/portfolio/Vector10.png"
                  alt="Previous"
                  className="w-6 h-auto"
                />
              </button>
              
              {/* Right Arrow Button */}
              <button
                onClick={nextVideo}
                className="absolute right-[1%] top-1/2 -translate-y-1/2 p-2 opacity-80 hover:opacity-100"
                aria-label="Next video"
              >
                {/* Replaced inline SVG with img tag */}
                <img
                  src="/portfolio/Vector9.png"
                  alt="Next"
                  className="w-6 h-auto"
                />
              </button>
          </div>
        </div>
      </Container>
    </section>
  );
}