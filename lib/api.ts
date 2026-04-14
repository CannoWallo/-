import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "@/lib/firebase";
import type { Place } from "@/types/place";

export async function getPlaces(): Promise<Place[]> {
  const snapshot = await getDocs(collection(db, "places"));

  return snapshot.docs.map((item) => {
    const data = item.data() as Omit<Place, "id">;

    return {
      id: item.id,
      ...data,
    };
  });
}

export async function getPlaceById(id: string): Promise<Place | null> {
  const snapshot = await getDoc(doc(db, "places", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Place, "id">),
  };
}
