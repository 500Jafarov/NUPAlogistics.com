import React from "react";

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className }) => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes textRotate3D {
            0% { transform: rotateZ(0deg); }
            100% { transform: rotateZ(360deg); }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      {/* 
        Using a robust dual-ring technique to simulate 3D intersection.
        Back ring has z-index: 0, Globe has z-index: 10, Front ring has z-index: 20
        with a clip-path to only show the front (bottom) half.
      */}
      <div className={`relative flex items-center justify-center ${className || ""}`}>
        
        {/* BACK RING (goes behind the globe) */}
        <div 
          className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] pointer-events-none z-0" 
          style={{ transform: "rotateX(60deg)" }}
        >
          <div className="w-full h-full" style={{ animation: "textRotate3D 25s linear infinite" }}>
            <svg viewBox="0 0 500 500" className="w-full h-full text-white drop-shadow-[0_0_8px_rgba(2,132,199,0.9)]">
              <path
                id="circlePathBg"
                d="M 250, 250 m -240, 0 a 240,240 0 1,1 480,0 a 240,240 0 1,1 -480,0"
                fill="transparent"
              />
              <text className="text-[28px] md:text-[32px] uppercase tracking-[16px] font-black" fill="currentColor">
                <textPath href="#circlePathBg" startOffset="0%">
                  NUPA LOGISTICS • NUPA LOGISTICS • NUPA LOGISTICS • NUPA LOGISTICS • NUPA LOGISTICS • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* GLOBE (middle layer) */}
        <div
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2),-5px_0_8px_#c3f4ff_inset,15px_2px_25px_#000_inset,-24px_-2px_34px_#c3f4ff99_inset,250px_0_44px_#00000066_inset,150px_0_38px_#000000aa_inset] z-10"
          style={{
            backgroundImage: "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            animation: "earthRotate 30s linear infinite",
          }}
        >
          {/* Stars */}
          <div className="absolute left-[-20px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling 3s infinite" }} />
          <div className="absolute left-[-40px] top-[30px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling-slow 2s infinite" }} />
          <div className="absolute left-[350px] top-[90px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling-long 4s infinite" }} />
          <div className="absolute left-[200px] top-[290px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling 3s infinite" }} />
          <div className="absolute left-[50px] top-[270px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling-fast 1.5s infinite" }} />
          <div className="absolute left-[250px] top-[-50px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling-long 4s infinite" }} />
          <div className="absolute left-[290px] top-[60px] w-1 h-1 bg-white rounded-full" style={{ animation: "twinkling-slow 2s infinite" }} />
        </div>

        {/* FRONT RING (goes in front of the globe, clipped to only show bottom half) */}
        <div 
          className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] pointer-events-none z-20" 
          style={{ 
            transform: "rotateX(60deg)",
            /* Clip the top half so it only renders the part that visually crosses over the front */
            clipPath: "polygon(-10% 50%, 110% 50%, 110% 110%, -10% 110%)"
          }}
        >
          <div className="w-full h-full" style={{ animation: "textRotate3D 25s linear infinite" }}>
            <svg viewBox="0 0 500 500" className="w-full h-full text-white drop-shadow-[0_0_14px_rgba(2,132,199,1)]">
              <path
                id="circlePathFg"
                d="M 250, 250 m -240, 0 a 240,240 0 1,1 480,0 a 240,240 0 1,1 -480,0"
                fill="transparent"
              />
              <text className="text-[28px] md:text-[32px] uppercase tracking-[16px] font-black" fill="currentColor">
                <textPath href="#circlePathFg" startOffset="0%">
                  NUPA LOGISTICS • NUPA LOGISTICS • NUPA LOGISTICS • NUPA LOGISTICS • NUPA LOGISTICS • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>

      </div>
    </>
  );
};

export default Globe;
