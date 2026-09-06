import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import artist from "../../data/artist";

const socials = [
  {
    name: "Instagram",
    href: artist.socials.instagram,
    icon: FaInstagram,
  },
  {
    name: "Spotify",
    href: artist.socials.spotify,
    icon: FaSpotify,
  },
  {
    name: "YouTube",
    href: artist.socials.youtube,
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: artist.socials.tiktok,
    icon: FaTiktok,
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        if (!social.href) {
          return (
            <span
              key={social.name}
              aria-label={`${social.name} coming soon`}
              title={`${social.name} coming soon`}
              className="flex h-10 w-10 cursor-not-allowed items-center justify-center border border-white/5 bg-white/[0.02] text-neutral-700"
            >
              <Icon size={17} />
            </span>
          );
        }

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${artist.name} on ${social.name}`}
            title={social.name}
            className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/50 hover:bg-[#c8ff00]/5 hover:text-[#c8ff00]"
          >
            <Icon
              size={17}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;