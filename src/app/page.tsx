"use client";
import Head from 'next/head';
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import FormExample from "../components/FormExample";
import SearchForm from "../components/SearchForm";
import { useCallback } from "react";



export default function Home() {
  
  const fetchAreaCodes = useCallback(async () => {
    const appId = "1061047019507500369"; // ←ここを自分のAPIキーに変更！
    const url = `https://app.rakuten.co.jp/services/api/Travel/GetAreaClass/20131024?format=json&applicationId=${appId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("地区コード一覧:", data);
    } catch (error) {
      console.error("エラー:", error);
    }
  },[]);

  return (

     <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">遠征 宿予約支援ツール</h1>
      <SearchForm />
    <div style={{ padding: "2rem" }}>
      <h1>楽天 地区コード取得テスト</h1>
      <button onClick={fetchAreaCodes}>地区コードを取得</button>
    </div>

    </main>  
    
    
  );
}
