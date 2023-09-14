import React, { useEffect, useState } from "react";

const Mybookshelf = (props) => {
  const [mybookshelf, setMybookshelf] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("book")) {
      setMybookshelf(JSON.parse(localStorage.getItem("book")));
    }
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-center items-center pt-8">
          <h2 className="font-bold text-2xl">My BookShelf</h2>
        </div>

        <div className="mt-14 h-screen w-full">
          <div className="px-56 pt-10 grid grid-cols-3 gap-8">
            {mybookshelf &&
              mybookshelf.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 border-[#003d29] py-6 px-6 flex flex-col gap-y-16 h-72 w-72 bg-white rounded-lg"
                  >
                    <div className="flex flex-row gap-x-2">
                      <h3 className="font-bold">Book Title:</h3>
                      <span className="font-semibold">
                        {element.title.slice(0, 50)}
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <h3 className="font-bold">Edition count:</h3>
                      <span className="font-semibold">
                        {element.edition_count}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mybookshelf;
