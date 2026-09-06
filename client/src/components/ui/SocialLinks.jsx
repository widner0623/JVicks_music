import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/4lcVqCwtomwOiZlReVv2fm?si=N94jLq9UQQ2_rdB8e4elsw",
    icon: FaSpotify,
  },
  {
    name: "YouTube",
    href: "https://music.youtube.com/channel/UCKhrNXVT1IeBhgZJicnC7Ww?si=jXRAhza-yJLYtO17",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-neutral-400 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8ff00]/50 hover:text-[#c8ff00]"
          >
            <Icon size={17} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;