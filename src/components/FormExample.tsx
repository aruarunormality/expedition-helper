"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormExample() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/results?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <label className="block mb-1 font-semibold">地域・施設名など</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="例：東京、新宿、名古屋…"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        検索する
      </button>
    </form>
  );
}
