"use client";

import {
  Youtube,
  Github,
  Linkedin,
  Instagram,
  Globe,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export function getSocialIcon(iconType: string, className?: string) {
  const props = { className };
  switch (iconType) {
    case "youtube":
      return <Youtube {...props} />;
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <Linkedin {...props} />;
    case "tiktok":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.18 8.18 0 004.76 1.52V7.05a4.83 4.83 0 01-1-.36z" />
        </svg>
      );
    case "stackoverflow":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.72-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.905-1.94-9.702-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z" />
        </svg>
      );
    case "medium":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    case "hackerrank":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.896c-.07-.049-.162-.049-.232 0L7.42 6.429c-.072.045-.12.126-.12.221 0 .143.112.258.253.258h.705v10.141H7.553c-.141 0-.258.115-.258.258 0 .094.049.176.123.221l1.572 1.533c.072.049.16.049.232 0l1.571-1.533c.072-.045.12-.127.12-.221 0-.143-.112-.258-.253-.258h-.705v-5.447h4.074v5.595h-.701c-.141 0-.254.115-.254.258 0 .094.049.176.123.221l1.572 1.533c.07.049.162.049.232 0l1.571-1.533c.072-.045.12-.127.12-.221 0-.143-.112-.258-.253-.258h-.705V6.908h.701c.141 0 .258-.115.258-.258 0-.094-.049-.176-.123-.221L13.772 4.896c-.07-.049-.162-.049-.232 0l-1.571 1.533c-.072.045-.12.126-.12.221 0 .143.112.258.253.258z" />
        </svg>
      );
    case "instagram":
      return <Instagram {...props} />;
    case "website":
      return <Globe {...props} />;
    default:
      return <Globe {...props} />;
  }
}

export function getContactIcon(iconType: string, className?: string) {
  const props = { className };
  switch (iconType) {
    case "whatsapp":
      return <MessageCircle {...props} />;
    case "email":
      return <Mail {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "location":
      return <MapPin {...props} />;
    case "website":
      return <ExternalLink {...props} />;
    default:
      return <Globe {...props} />;
  }
}
