import { motion } from "motion/react";
import artist from "../data/artist";

function Hero() {
  const genreLine = artist.genres.join(" · ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
        alt={`${artist.name} concert performance placeholder`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-48px))] pt-24">
        <motion.div
          className="max-w-2xl"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]"
            initial={{
              opacity: 0,
              x: -18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {genreLine}
          </motion.p>

          <div className="mb-8">
            <motion.span
              className="block font-serif text-[clamp(5rem,9vw,9rem)] font-bold leading-[0.85] text-[#c8ff00]"
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              J
            </motion.span>

            <motion.h1
              className="font-serif text-[clamp(5rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.07em]"
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.48,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              VICK
            </motion.h1>
          </div>

          <motion.p
            className="mb-9 max-w-xl text-sm leading-7 text-neutral-300 md:text-base"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.62,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {artist.tagline} {artist.heroDescription}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.74,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href="#music"
              className="flex h-13 min-w-36 items-center justify-center bg-[#c8ff00] px-6 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ddff51]"
            >
              Listen Now
            </a>

            <a
              href="#about"
              className="flex h-13 min-w-36 items-center justify-center border border-[#c8ff00]/30 bg-black/30 px-6 text-xs font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00] hover:text-[#c8ff00]"
            >
              About
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#music"
        className="absolute right-5 bottom-5 z-10 hidden items-end gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-500 md:flex"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
      >
        <span>Scroll</span>

        <motion.span
          className="h-12 w-px bg-gradient-to-b from-[#c8ff00] to-transparent"
          animate={{
            scaleY: [1, 0.65, 1],
            opacity: [1, 0.45, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.a>
    </section>
  );
}

export default Hero;