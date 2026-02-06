import {
  Plane,
  PlaneLanding,
  CableCar,
  Car,
  Hotel,
  Store,
  Sparkles,
  FerrisWheel,
  Utensils,
  Moon,
  Waves,
  Coffee,
  Sunset,
  Leaf,
  ShoppingBag,
  Camera,
  Luggage,
  Heart,
  MapPin,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  plane: Plane,
  "plane-landing": PlaneLanding,
  "cable-car": CableCar,
  car: Car,
  hotel: Hotel,
  store: Store,
  sparkles: Sparkles,
  "ferris-wheel": FerrisWheel,
  utensils: Utensils,
  moon: Moon,
  waves: Waves,
  coffee: Coffee,
  sunset: Sunset,
  leaf: Leaf,
  "shopping-bag": ShoppingBag,
  camera: Camera,
  luggage: Luggage,
  heart: Heart,
};

export function ActivityIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = iconMap[name] || MapPin;
  return <Icon {...props} />;
}
