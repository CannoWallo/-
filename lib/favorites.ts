const FAVORITES_KEY = "favorite_place_ids";

function readFavorites(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(FAVORITES_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeFavorites(ids: string[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

export function getFavoriteIds(): string[] {
  return readFavorites();
}

export function isFavorite(placeId: string): boolean {
  return readFavorites().includes(placeId);
}

export function toggleFavorite(placeId: string): boolean {
  const current = readFavorites();
  const next = current.includes(placeId)
    ? current.filter((id) => id !== placeId)
    : [...current, placeId];

  writeFavorites(next);

  return next.includes(placeId);
}
