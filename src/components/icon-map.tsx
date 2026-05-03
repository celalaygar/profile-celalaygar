"use client";

import {
  Gamepad2, Bird, Box, Ghost, Square, Type, Grid3x3, Brain, Activity,
  AlignLeft, Hash, Mountain, Rocket, Plane, Layers, Building2, Search,
  CircleHelp, Container, Leaf, Workflow, Settings, Database,
  Languages, Globe, Briefcase, Braces, Globe2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Gamepad2, Bird, Box, Ghost, Square, Type, Grid3x3, Brain, Activity,
  AlignLeft, Hash, Mountain, Rocket, Plane, Layers, Building2, Search,
  CircleHelp, Container, Leaf, Workflow, Settings, Database,
  Languages, Globe, Briefcase, Braces, Globe2,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Gamepad2;
}
