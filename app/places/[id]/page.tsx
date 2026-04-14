import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { getPlaceById } from "@/lib/api";

interface PlaceDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function PlaceDetailsPage({ params }: PlaceDetailsPageProps) {
  const place = await getPlaceById(params.id);

  if (!place) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header title={place.name} />

      <section className="mx-auto w-full max-w-5xl px-4 py-6">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
          <div className="aspect-[16/8] w-full overflow-hidden bg-slate-100">
            <img
              src={place.image}
              alt={place.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Премиум подборка</p>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{place.name}</h1>
            </div>

            <p className="max-w-3xl text-base leading-7 text-slate-700">{place.description}</p>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Адрес</p>
              <p className="mt-1 text-base text-slate-900">{place.address}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {place.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              В избранное
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
