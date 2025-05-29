// app/search/page.tsx

export default function SearchPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">宿検索フォーム</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">都道府県</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="例: 東京" />
        </div>
        <div>
          <label className="block mb-1 font-medium">日付</label>
          <input type="date" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">人数</label>
          <input type="number" className="w-full border rounded px-3 py-2" min="1" max="10" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          検索
        </button>
      </form>
    </div>
  );
}
