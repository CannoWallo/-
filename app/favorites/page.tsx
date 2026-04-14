"use client";

import { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { PlaceCard } from "@/components/PlaceCard";
import { getPlaces } from "@/lib/api";
import { getFavoriteIds } from "@/lib/favorites";
import type { Place } from "@/types/place";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      const [places, favoriteIds] = await Promise.all([getPlaces(), Promise.resolve(getFavoriteIds())]);
      const favoriteSet = new Set(favoriteIds);

      setFavorites(places.filter((place) => favoriteSet.has(place.id)));
      setIsLoading(false);
    }

    loadFavorites();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header title="Избранное" />

      <section className="mx-auto w-full max-w-6xl px-4 py-6">
        {isLoading ? (
          <p className="text-sm text-slate-600">Загрузка избранного...</p>
        ) : favorites.length === 0 ? (
          <p className="text-sm text-slate-600">Пока нет избранных мест.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
