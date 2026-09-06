function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
        alt="Concert performance"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-48px))] pt-24">
        <div className="max-w-2xl">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff00]">
            Rap · Hip-Hop · Country · Rock
          </p>

          <div className="mb-8">
            <span className="block font-serif text-[clamp(5rem,9vw,9rem)] font-bold leading-[0.85] text-[#c8ff00]">
              J
            </span>

            <h1 className="font-serif text-[clamp(5rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.07em]">
              VICK
            </h1>
          </div>

          <p className="mb-9 max-w-xl text-sm leading-7 text-neutral-300 md:text-base">
            J Vick doesn't follow trends — he sets them. Coming up through the
            streets of Owensboro, J Vick built a sound that hits hard across rap,
            country, hiphop, and more.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#music"
              className="flex h-13 min-w-36 items-center justify-center bg-[#c8ff00] px-6 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:-translate-y-0.5 hover:bg-[#ddff51]"
            >
              Listen Now
            </a>

            <a
              href="#about"
              className="flex h-13 min-w-36 items-center justify-center border border-[#c8ff00]/30 bg-black/30 px-6 text-xs font-bold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 hover:border-[#c8ff00] hover:text-[#c8ff00]"
            >
              About
            </a>
          </div>
        </div>
      </div>

      <a
        href="#music"
        className="absolute right-5 bottom-5 z-10 hidden items-end gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-500 md:flex"
      >
        <span>Scroll</span>

        <span className="h-12 w-px bg-gradient-to-b from-[#c8ff00] to-transparent" />
      </a>
    </section>
  );
}

export default Hero;