"use client";
import Head from 'next/head';
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import FormExample from "../components/FormExample";
import SearchForm from "../components/SearchForm";

export default function Home() {


  return (

     <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">遠征 宿予約支援ツール</h1>
      <SearchForm />
    </main>   
  );
}
