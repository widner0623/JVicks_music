import { motion } from "motion/react";
import artist from "../data/artist";

function Hero() {
  const genreLine = artist.genres.join(" · ");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
        alt={`${artist.name} concert performance placeholder`}
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="absolute inset-0 bg-black/30 sm:bg-black/15" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45 sm:via-black/75 sm:to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-32px))] pb-12 pt-28 sm:w-[min(1200px,calc(100%-48px))] sm:pb-16 sm:pt-32">
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
            className="mb-5 max-w-[90%] text-[10px] font-bold uppercase leading-5 tracking-[0.22em] text-[#c8ff00] sm:mb-7 sm:max-w-none sm:text-xs sm:tracking-[0.28em]"
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

          <div className="mb-6 sm:mb-8">
            <motion.span
              className="block font-serif text-[clamp(4.25rem,22vw,7rem)] font-bold leading-[0.82] text-[#c8ff00] sm:text-[clamp(5rem,9vw,9rem)]"
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
              {artist.name.charAt(0)}
            </motion.span>

            <motion.h1
              className="font-serif text-[clamp(4.25rem,23vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.07em] text-white sm:text-[clamp(5rem,11vw,10rem)]"
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
              {artist.name.slice(1).toUpperCase()}
            </motion.h1>
          </div>

          <motion.p
            className="mb-7 max-w-xl text-[13px] leading-6 text-neutral-300 sm:mb-9 sm:text-sm sm:leading-7 md:text-base"
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
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
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
              className="flex h-13 w-full items-center justify-center bg-[#c8ff00] px-6 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ddff51] sm:w-auto sm:min-w-36"
            >
              Listen Now
            </a>

            <a
              href="#about"
              className="flex h-13 w-full items-center justify-center border border-[#c8ff00]/30 bg-black/30 px-6 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00] hover:text-[#c8ff00] sm:w-auto sm:min-w-36"
            >
              About
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#music"
        className="absolute bottom-5 right-5 z-10 hidden items-end gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-500 md:flex"
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