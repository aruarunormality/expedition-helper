"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import FormExample from "../components/FormExample";

export default function Home() {

  const [date, setDate] = useState("");
  const [area, setArea] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


        <h1 className="text-2xl font-bold mb-4"> 全ツ遠征 宿予約支援ツール(仮) </h1>
        <p>ここに将来、ライブ日程・会場・宿泊情報とかを表示する予定！</p>

        <Link href="/FormExample"> フォーム</Link>


        <h1 className="text-2xl font-bold mb-6">宿を探す</h1>


        <form className="space-y-4">
          <div>
            <label className="block mb-1">宿泊日</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1">地域</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            >
              <option value="">選択してください</option>
              <option value="sapporo">札幌</option>
              <option value="sendai">仙台</option>
              <option value="tokyo">東京</option>
              <option value="fukuoka">福岡</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            検索
          </button>
        </form>

      </main>

    </div>

    
  );
}
