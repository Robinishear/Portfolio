"use client";
import React, { useState, useMemo } from "react";
import { RxArrowRight } from "react-icons/rx";
import { FaCode } from "react-icons/fa";

export default function CarGallery() {
  const TOTAL = 30;

  // Custom images (fixed commas, ids, urls)
  const customImages = useMemo(
    () => [
      {
        image: "https://i.ibb.co.com/NgjyPTvV/1753940448036.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/1NDHGzr/1753941327185.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/Y5scVbp/1753941326895.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/jPcv0JNw/1753941327117.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/XkL38q0f/1753941326893.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/ZRPvtZVm/1753941326953.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/4nmBg8y3/1753941327078.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/XrTxMDrW/1753941327162.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/QjCNR1Hk/Screenshot-79.png",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/mFdbhkG0/2f3136af9542ea7fec9beb2d66cc9a38.jpg",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Mx8hxb1Z/a28c702e44c768a4717cee285915a23e.jpg",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Rp5HP48X/still-444f7285a51d364d7cf4a777ab35b23b.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/1J9pB7QX/original-a28a10024dbd3a3d804a4d4dcf9f66f6.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Q3V4YHC3/b19adc31914991d427a5cbc8775805f2-1.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Q3V4YHC3/b19adc31914991d427a5cbc8775805f2-1.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/N6Xn35r5/256a798d2c6f29d98fdf15b9511156c1.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/mCrYq2bY/still-69c315d4fad2a9263660b3f8ef60bf63.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/TMdBr0jM/original-09c4de43ccbc102652916f4e8b162dbb.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/rKFNZrp6/original-a8ccfb572e9af326c5e91232cf20569a.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/JwnfhfXV/a1fa195ac6eee6c5649617170694e351.webp",
        description: "",
      },

      {
        image: "https://i.ibb.co.com/NgjyPTvV/1753940448036.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/1NDHGzr/1753941327185.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/Y5scVbp/1753941326895.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/jPcv0JNw/1753941327117.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/XkL38q0f/1753941326893.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/ZRPvtZVm/1753941326953.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/4nmBg8y3/1753941327078.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/XrTxMDrW/1753941327162.jpg",
        description: "",
      },
      {
        image: "https://i.ibb.co.com/QjCNR1Hk/Screenshot-79.png",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/mFdbhkG0/2f3136af9542ea7fec9beb2d66cc9a38.jpg",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Mx8hxb1Z/a28c702e44c768a4717cee285915a23e.jpg",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Rp5HP48X/still-444f7285a51d364d7cf4a777ab35b23b.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/1J9pB7QX/original-a28a10024dbd3a3d804a4d4dcf9f66f6.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Q3V4YHC3/b19adc31914991d427a5cbc8775805f2-1.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/Q3V4YHC3/b19adc31914991d427a5cbc8775805f2-1.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/N6Xn35r5/256a798d2c6f29d98fdf15b9511156c1.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/mCrYq2bY/still-69c315d4fad2a9263660b3f8ef60bf63.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/TMdBr0jM/original-09c4de43ccbc102652916f4e8b162dbb.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/rKFNZrp6/original-a8ccfb572e9af326c5e91232cf20569a.webp",
        description: "",
      },
      {
        image:
          "https://i.ibb.co.com/JwnfhfXV/a1fa195ac6eee6c5649617170694e351.webp",
        description: "",
      },
    ],
    []
  );

  // Random Unsplash images
  const randomImages = useMemo(
    () =>
      Array.from({ length: TOTAL - customImages.length }).map((_, i) => ({
        id: customImages.length + i + 1,
        title: `Car Model ${customImages.length + i + 1}`,
        image: `https://source.unsplash.com/640x420/?car&sig=${i + 1}`,
        description: `Brief info about Car Model ${
          customImages.length + i + 1
        }`,
      })),
    [customImages.length]
  );

  const cars = useMemo(
    () => [...customImages, ...randomImages],
    [customImages, randomImages]
  );

  const [pageSize, setPageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL / pageSize);

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

  const createButton = (label, disabled, onClick, extraClasses = "") => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`px-3 py-1 rounded-md border  disabled:opacity-50 ${extraClasses}`}
    >
      {label}
    </button>
  );

  return (
    <div id="car-gallery" className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm ml-5 ">Items per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-3 py-1 rounded-md border"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
          </select>
        </div>

        <div className="text-sm  mt-2 sm:mt-0">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleCars.map((car) => (
          <article
            key={car.id}
            className="relative text-xl sm:text-2xl font-bold  rounded-2xl px-4 sm:px-5 py-2 shadow-lg hover:shadow-amber-600/50 transition duration-2500 bg-gradient-to-r "
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={car.image}
                alt={car.title}
                className="object-cover w-full rounded-2xl h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{car.title}</h2>
              <p className="text-sm  mt-1">{car.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  type="button"
                  className="inline-flex items-center -ml-4 gap-2 px-4 py-2 rounded-xl  text-sm font-medium  shadow-lg hover:shadow-amber-600/50 transition duration-2500 "
                >
                  See More <RxArrowRight />
                </button>
                <span className="text-xs 0">{car.id}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <nav className="mt-8 flex flex-wrap justify-center gap-3">
        {createButton("First", currentPage === 1, () => goToPage(1))}
        {createButton("Prev", currentPage === 1, () =>
          goToPage(currentPage - 1)
        )}
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          const show =
            pageNum === 1 ||
            pageNum === totalPages ||
            Math.abs(pageNum - currentPage) <= 2;
          if (!show) return null;
          return createButton(
            pageNum,
            false,
            () => goToPage(pageNum),
            pageNum === currentPage ? "" : ""
          );
        })}
        {createButton("Next", currentPage === totalPages, () =>
          goToPage(currentPage + 1)
        )}
        {createButton("Last", currentPage === totalPages, () =>
          goToPage(totalPages)
        )}
      </nav>

      <footer className="mt-6 text-center text-sm ">
        Showing {visibleCars.length} items on this page — total {TOTAL} cars.
      </footer>

      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#ffb400] w-12 h-12 rounded-full flex items-center justify-center text-black text-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        <FaCode />
      </button>
    </div>
  );
}
