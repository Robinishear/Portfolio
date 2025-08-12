"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-red-600 text-2xl font-bold">কিছু ভুল হয়েছে!</h2>
      <p className="mt-2 text-gray-700">{error?.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}
