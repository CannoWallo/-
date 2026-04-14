interface FiltersProps {
  category: string;
  price: string;
  district: string;
  onCategoryChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onDistrictChange: (value: string) => void;
}

const categoryOptions = ["Все категории", "Ресторан", "Кафе", "Бар", "Спа", "Культура", "Прогулка"];
const priceOptions = ["Любой чек", "до 1000 ₽", "1000–2000 ₽", "2000–3500 ₽", "от 3500 ₽"];
const districtOptions = ["Все районы", "Центральный", "Северный", "Южный", "Западный", "Восточный"];

export function Filters({
  category,
  price,
  district,
  onCategoryChange,
  onPriceChange,
  onDistrictChange,
}: FiltersProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-slate-700">Категория</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5">
          <span className="text-sm font-medium text-slate-700">Цена</span>
          <select
            value={price}
            onChange={(event) => onPriceChange(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
          >
            {priceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5">
          <span className="text-sm font-medium text-slate-700">Район</span>
          <select
            value={district}
            onChange={(event) => onDistrictChange(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
          >
            {districtOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
