import type { GradientVariant } from "@/data";

export function getGradientClasses(gradient: GradientVariant): string {
  switch (gradient) {
    case "primary":
      return "from-violet-500 to-purple-600";
    case "secondary":
      return "from-pink-500 to-rose-600";
    case "accent":
      return "from-amber-500 to-orange-600";
    case "yellow":
      return "from-yellow-400 to-amber-500";
    case "green":
      return "from-emerald-500 to-green-600";
    default:
      return "from-violet-500 to-purple-600";
  }
}

export function getGradientBgClass(gradient: GradientVariant): string {
  switch (gradient) {
    case "primary":
      return "bg-gradient-to-br from-violet-500 to-purple-600";
    case "secondary":
      return "bg-gradient-to-br from-pink-500 to-rose-600";
    case "accent":
      return "bg-gradient-to-br from-amber-500 to-orange-600";
    case "yellow":
      return "bg-gradient-to-br from-yellow-400 to-amber-500";
    case "green":
      return "bg-gradient-to-br from-emerald-500 to-green-600";
    default:
      return "bg-gradient-to-br from-violet-500 to-purple-600";
  }
}
