"use client";
import React, { useState } from "react";
import { prefectures } from "../data/prefectures";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [area, setArea] = useState("");
  const [adultNum, setAdultNum] = useState(1);
  const router = useRouter(); // ← 初期化

  //チェックイン日選んだら翌日がチェックアウト日になる
  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const selectedDate = e.target.value;
  setCheckinDate(selectedDate);

  const nextDay = new Date(selectedDate);
  nextDay.setDate(nextDay.getDate() + 1);

  // yyyy-mm-dd 形式に変換
  const nextDayStr = nextDay.toISOString().split("T")[0];
  setCheckoutDate(nextDayStr);
};



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      regionCode: area,
      checkinDate,
      checkoutDate,
      adultNum: adultNum.toString(),
    }).toString();
    router.push(`/results?${query}`);

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow rounded max-w-md mx-auto">

      <div>
        <label className="block mb-1 font-medium">チェックイン日</label>
        <input
          type="date"
          value={checkinDate}
          onChange={handleCheckinChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-medium">チェックアウト日</label>
        <input
          type="date"
          value={checkoutDate}
          onChange={(e) => setCheckoutDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>


      <div>
        <label className="block mb-1 font-medium">地域</label>
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
            <option value="">選択してください</option>
            {prefectures.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">人数</label>
        <input
          type="number"
          value={adultNum}
          onChange={(e) => setAdultNum(parseInt(e.target.value))}
          min={1}
          max={10}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        検索する
      </button>
    </form>
  );
}
