"use client";

import { useEffect, useMemo, useState } from "react";

import { Filters } from "@/components/Filters";
import { Header } from "@/components/Header";
import { PlaceCard } from "@/components/PlaceCard";
import { getPlaces } from "@/lib/api";
import type { Place } from "@/types/place";

const DEFAULT_CATEGORY = "Все категории";
const DEFAULT_PRICE = "Любой чек";
const DEFAULT_DISTRICT = "Все районы";

function matchesPrice(priceFilter: string, placePrice: number): boolean {
  if (priceFilter === "Любой чек") return true;
  if (priceFilter === "до 1000 ₽") return placePrice <= 1000;
  if (priceFilter === "1000–2000 ₽") return placePrice > 1000 && placePrice <= 2000;
  if (priceFilter === "2000–3500 ₽") return placePrice > 2000 && placePrice <= 3500;
  if (priceFilter === "от 3500 ₽") return placePrice >= 3500;

  return true;
}

export default function PlacesPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [price, setPrice] = useState(DEFAULT_PRICE);
  const [district, setDistrict] = useState(DEFAULT_DISTRICT);

  useEffect(() => {
    let isMounted = true;

    async function loadPlaces() {
      const data = await getPlaces();

      if (!isMounted) return;
      setPlaces(data);
      setIsLoading(false);
    }

    loadPlaces();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesCategory = category === DEFAULT_CATEGORY || place.category === category;
      const matchesDistrict = district === DEFAULT_DISTRICT || place.district === district;
      const matchesByPrice = matchesPrice(price, place.price);

      return matchesCategory && matchesDistrict && matchesByPrice;
    });
  }, [category, district, places, price]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header title="Места для отдыха" />

      <section className="mx-auto w-full max-w-6xl space-y-4 px-4 py-6">
        <Filters
          category={category}
          price={price}
          district={district}
          onCategoryChange={setCategory}
          onPriceChange={setPrice}
          onDistrictChange={setDistrict}
        />

        {isLoading ? (
          <p className="text-sm text-slate-600">Загрузка мест...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
