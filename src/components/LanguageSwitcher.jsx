import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div className="flex space-x-2">
      <select
        className="p-2 border border-red-900 focus:ring-2 focus:outline-none focus:ring-red-700 rounded-md cursor-pointer"
        onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            null,
            { locale: e.target.value }
          )
        }
      >
        <option value="uz">Uzbek</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
}
