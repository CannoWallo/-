"use client";

import { useState } from "react";

import { isFavorite, toggleFavorite } from "@/lib/favorites";

interface FavoriteButtonProps {
  placeId: string;
}

export function FavoriteButton({ placeId }: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState(() => isFavorite(placeId));

  const handleClick = () => {
    const next = toggleFavorite(placeId);
    setFavorite(next);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
    >
      {favorite ? "Удалить из избранного" : "В избранное"}
    </button>
  );
}
