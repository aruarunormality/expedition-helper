"use client";
import React, { useState } from "react";

export default function FormExample() {
  const [area, setArea] = useState(""); // 入力された地域名

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("入力された地域名:", area);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label className="block mb-2 text-lg font-semibold">
        行きたい地域
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="例：札幌、仙台など"
        />
      </label>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        検索
      </button>
    </form>
  );
}
