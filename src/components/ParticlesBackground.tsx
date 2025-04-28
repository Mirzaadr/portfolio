import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useState, useEffect } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          // background: {
          //   color: {
          //     value: "#f8f9fa", // background color, optional
          //   },
          // },
          fullScreen: {
            enable: false, // important! so it stays inside Hero section only
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                // area: 800,
              },
            },
            color: {
              value: "#3b82f6", // particle color (your primary blue)
            },
            links: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200,
                },
                // rotateX: 600,
                // rotateY: 1200,
              },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: 0.5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "attract", // attraction when near cursor
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.2,
                speed: 0.5,
              },
            },
          },
          detectRetina: true,
        }}
      />
    );
  }

  return <></>;
}
