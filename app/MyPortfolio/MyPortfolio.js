"use client";
import React, { useState, useMemo } from "react";
import { RxArrowRight } from "react-icons/rx";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

export default function CarGallery() {
  const TOTAL = 30;

  // Fixed URLs
  const customImages = useMemo(
    () => [
      { image: "https://i.ibb.co/NgjyPTvV/1753940448036.jpg", description: "" },
      { image: "https://i.ibb.co/1NDHGzr/1753941327185.jpg", description: "" },
      { image: "https://i.ibb.co/Y5scVbp/1753941326895.jpg", description: "" },
      { image: "https://i.ibb.co/jPcv0JNw/1753941327117.jpg", description: "" },
      { image: "https://i.ibb.co/XkL38q0f/1753941326893.jpg", description: "" },
      { image: "https://i.ibb.co/ZRPvtZVm/1753941326953.jpg", description: "" },
      { image: "https://i.ibb.co/4nmBg8y3/1753941327078.jpg", description: "" },
      { image: "https://i.ibb.co/XrTxMDrW/1753941327162.jpg", description: "" },
      { image: "https://i.ibb.co/QjCNR1Hk/Screenshot-79.png", description: "" },
      { image: "https://i.ibb.co/mFdbhkG/2f3136af9542ea7fec9beb2d66cc9a38.jpg", description: "" },
    ],
    []
  );

  const randomImages = useMemo(
    () =>
      Array.from({ length: TOTAL - customImages.length }).map((_, i) => ({
        id: customImages.length + i + 1,
        title: `Car Model ${customImages.length + i + 1}`,
        image: `https://source.unsplash.com/640x420/?car&sig=${i + 1}`,
        description: `Brief info about Car Model ${customImages.length + i + 1}`,
      })),
    [customImages.length]
  );

  const cars = useMemo(() => [...customImages, ...randomImages], [customImages, randomImages]);

  const [pageSize, setPageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL / pageSize);

  const [modalCar, setModalCar] = useState(null);

  const goToPage = (n) => {
    const newPage = Math.min(Math.max(1, n), totalPages);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const visibleCars = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return cars.slice(startIndex, startIndex + pageSize);
  }, [cars, currentPage, pageSize]);

  // Small buttons
  const createButton = (label, disabled, onClick, extraClasses = "") => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`px-2 py-1 rounded text-xs border disabled:opacity-50 ${extraClasses}`}
    >
      {label}
    </button>
  );

  return (
    <div id="car-gallery" className="max-w-7xl mx-auto p-6 relative">
      {/* Page controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs ml-5">Items per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-2 py-1 rounded border text-xs"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
          </select>
        </div>

        <div className="text-xs mt-2 sm:mt-0">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* Gallery */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleCars.map((car, idx) => (
          <article
            key={idx}
            className="relative text-sm font-bold rounded-xl px-3 py-2 shadow hover:shadow-cyan-400/60 transition duration-300 bg-gradient-to-r cursor-default"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={car.image}
                alt={car.title || `Car ${idx + 1}`}
                className="object-cover w-full rounded-xl h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              {car.title && <h2 className="text-sm font-semibold">{car.title}</h2>}
              {car.description && <p className="text-xs mt-1">{car.description}</p>}
              <div className="mt-3 flex justify-between items-center">
                <Link href="/Contact">
                  <button className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium shadow hover:shadow-cyan-400/60 transition duration-300">
                    See <RxArrowRight size={12} />
                  </button>
                </Link>
                <button
                  onClick={() => setModalCar(car)}
                  className="ml-1 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition px-2 py-1 text-xs"
                >
                  View
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-6 flex flex-wrap justify-center gap-2">
        {createButton("First", currentPage === 1, () => goToPage(1))}
        {createButton("Prev", currentPage === 1, () => goToPage(currentPage - 1))}
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          const show =
            pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 2;
          if (!show) return null;
          return createButton(pageNum, false, () => goToPage(pageNum));
        })}
        {createButton("Next", currentPage === totalPages, () => goToPage(currentPage + 1))}
        {createButton("Last", currentPage === totalPages, () => goToPage(totalPages))}
      </nav>

      {/* Footer */}
      <footer className="mt-4 text-center text-xs">
        Showing {visibleCars.length} items on this page — total {TOTAL} cars.
      </footer>

      {/* Scroll-to-top button */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#ffb400] w-10 h-10 rounded-full flex items-center justify-center text-black text-lg shadow hover:shadow-lg transition-shadow"
      >
        <FaCode size={14} />
      </button>

      {/* Modal */}
      {modalCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModalCar(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalCar.image}
              alt={modalCar.title || "Car"}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              {modalCar.title && <h2 className="text-lg font-bold mb-1">{modalCar.title}</h2>}
              {modalCar.description && <p className="text-gray-700 text-sm">{modalCar.description}</p>}
              <button
                onClick={() => setModalCar(null)}
                className="mt-3 px-3 py-1 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
