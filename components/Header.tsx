interface HeaderProps {
  title?: string;
}

export function Header({ title = "Где отдохнуть" }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      </div>
    </header>
  );
}
