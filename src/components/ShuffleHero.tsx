import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sample1,
  Sample10,
  Sample11,
  Sample12,
  Sample2,
  Sample3,
  Sample5,
  Sample6,
  Sample7,
  Sample8,
  Sample9,
} from "@/assets/images";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <section className="relative grid items-center w-full max-w-full grid-cols-1 gap-8 px-24 py-12 mx-auto md:grid-cols-2">
      <div>
        <span className="block mb-4 text-xs font-medium text-primary md:text-sm">
          Trinitian Center for Education and Technology
        </span>
        <h3 className="text-4xl font-semibold md:text-6xl">
          Empowering Everyone, Enriching Futures
        </h3>
        <p className="my-4 text-base md:text-lg text-slate-700 md:my-6">
          Transforming Education Through Innovation and Technology: Empowering
          Students for a Brighter Future!
        </p>
       <Link to="/calendar">
       <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Schedule Now!

      <div className="absolute from-purple-600 to-blue-600 gradient_sample " />
    </button></Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: Sample1,
  },
  {
    id: 2,
    src: Sample2,
  },
  {
    id: 3,
    src: Sample3,
  },
  {
    id: 4,
    src: Sample5,
  },
  {
    id: 5,
    src: Sample6,
  },
  {
    id: 6,
    src: Sample7,
  },
  {
    id: 7,
    src: Sample8,
  },
  {
    id: 8,
    src: Sample9,
  },
  {
    id: 9,
    src: Sample10,
  },
  {
    id: 10,
    src: Sample11,
  },
  {
    id: 11,
    src: Sample12,
  },
  {
    id: 12,
    src: Sample1,
  },
  {
    id: 13,
    src: Sample2,
  },
  {
    id: 14,
    src: Sample3,
  },
  {
    id: 15,
    src: Sample6,
  },
  {
    id: 16,
    src: Sample5,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[800px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
