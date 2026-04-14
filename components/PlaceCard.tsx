import Link from "next/link";

import type { Place } from "@/types/place";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link
      href={`/places/${place.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      aria-label={`Открыть ${place.name}`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-slate-900">{place.name}</h3>

        <div className="space-y-1 text-sm text-slate-600">
          <p>Район: {place.district}</p>
          <p>Средний чек: {place.price} ₽</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
