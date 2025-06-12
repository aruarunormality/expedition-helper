"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const params = useSearchParams();

  const keyword = params.get("keyword") || "東京";
  const checkinDate = params.get("checkinDate") || "2025-07-10";
  const adultNum = params.get("adultNum") || "1";

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?applicationId=1061047019507500369&format=json&keyword=${encodeURIComponent(
        keyword
      )}&checkinDate=${checkinDate}&adults=${adultNum}&hits=10`;

      const res = await fetch(url);
      const data = await res.json();
      console.log("楽天APIの返り値:", data);

      if (data.hotels) {
        setHotels(data.hotels);
      } else {
        setHotels([]);
      }
    };

    fetchHotels();
  }, [keyword, checkinDate, adultNum]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        検索結果：{keyword}（{checkinDate}〜 / 大人{adultNum}人）
      </h1>
      {hotels.length === 0 ? (
        <p>空いてる宿が見つかりませんでした。</p>
      ) : (
        <ul className="space-y-4">
          {hotels.map((h: any, i) => (
            <li key={i} className="border p-4 rounded shadow">
              <p className="font-semibold text-lg">
                {h.hotel[0].hotelBasicInfo.hotelName}
              </p>
              <p>
                <a
                  href={h.hotel[0].hotelBasicInfo.hotelInformationUrl}
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  詳細を見る
                </a>
              </p>
              <p>料金: ¥{h.hotel[0].hotelBasicInfo.hotelMinCharge?.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
