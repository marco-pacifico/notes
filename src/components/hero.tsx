"use client";
import React from "react";
export function Hero() {
  const [dark, setDark] = React.useState(true);
  const [cellSize, setCellSize] = React.useState(100);
  const gridWidth = cellSize;
  const gridHeight = cellSize;
  const [gridOpacity, setGridOpacity] = React.useState(0.5);
  // const [gridColor, setGridColor] = React.useState("rgba(255,255,255,0.5)");

  const [glowOnTop, setGlowOnTop] = React.useState(true);
  const [glowOpactiy, setGlowOpactiy] = React.useState(0.15);
  const [glowHeight, setGlowHeight] = React.useState("800");
  const [glowWidth, setGlowWidth] = React.useState("1100");
  const [glowColor, setGlowColor] = React.useState("#800080");

  const [squareColor, setSquareColor] = React.useState("#800080");
  const [squareOpacity, setSquareOpacity] = React.useState(0.15);
  const [maskCoverage, setMaskCoverage] = React.useState(50);

  return (
    <div
      className={`relative h-full ${
        dark ? "bg-slate-950" : "bg-slate-100"
      } overflow-hidden`}
    >
      <div
        aria-hidden
        className={`absolute top-0 ${
          glowOnTop && "z-10"
        } left-1/2 -translate-x-1/2 -translate-y-1/2 
        }] pointer-events-none`}
        style={{
          backgroundImage: `radial-gradient(${glowColor}, transparent 40%)`,
          opacity: glowOpactiy,
          height: `${glowHeight}px`,
          width: `${glowWidth}px`,
        }}
      />
      {/* <div className="p-8">
        <svg
          width="100%"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
        >
          <path d="M100 200 V.5 M.5 .5 H200" strokeWidth={1} stroke="green" />
          <path d="M300 200 V.5 M200.5 .5 H400" strokeWidth={1} stroke="green" />
        </svg>
      </div> */}
      <svg
        style={{
          stroke: `rgba(${dark ? "255,255,255" : "0,0,0"},${gridOpacity})`,
          maskImage: `radial-gradient(100% ${maskCoverage}% at top center, white, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), transparent)`,
          WebkitMaskImage: `radial-gradient(100% ${maskCoverage}% at top center, white, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), transparent)`,
        }}
        className={`absolute pointer-events-none inset-0 h-full w-full`}
        aria-hidden
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={gridWidth}
            height={gridHeight}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M${gridWidth / 2} ${gridHeight} V.5 M0 .5 H${gridWidth}`}
              fill="none"
            />
          </pattern>
        </defs>
        <svg
          x="50%"
          y={-1}
          style={{ fill: squareColor, opacity: squareOpacity }}
          className={`overflow-visible`}
        >
          <path
            d={`M-${gridWidth / 2 + 0.5} 0 
                h${gridWidth + 1} v${gridHeight + 1} h-${gridWidth + 1}Z 
                M${gridWidth * 3.5 - 0.5} 0 h${gridWidth + 1} v${
              gridHeight + 1
            } h-${gridWidth + 1}Z 
                M${gridWidth * 1.5 - 0.5} ${gridHeight * 2} h${
              gridWidth + 1
            } v${gridHeight + 1} h-${gridWidth + 1}Z  
                M-${gridWidth * 1.5 + 0.5} ${gridHeight * 3} h${
              gridWidth + 1
            } v${gridHeight + 1} h-${gridWidth + 1}Z  `}
            strokeWidth={0}
          />
        </svg>

        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="max-w-2xl mx-auto pt-10 h-[800px]">
        <fieldset
          className={`flex flex-col gap-4 relative ${
            dark ? "text-white" : "text-black"
          } items-start mb-10`}
        >
          <label className="flex gap-3" htmlFor="darkmode">
            <input
              type="checkbox"
              id="darkmode"
              checked={dark}
              onChange={(event) => {
                setDark(event.target.checked);
              }}
            />
            Darkmode
          </label>
        </fieldset>
        <fieldset
          className={`flex flex-col gap-4 relative ${
            dark ? "text-white" : "text-black"
          } items-start mb-10`}
        >
          <h2 className="text-xl font-semibold">Grid settings</h2>

          <label className="flex gap-3" htmlFor="cellSize">
            <input
              type="range"
              id="cellSize"
              min={20}
              max={400}
              step={20}
              value={cellSize}
              onChange={(e) => setCellSize(+e.target.value)}
            />
            Cell Size {cellSize}px
          </label>
          <label className="flex gap-3" htmlFor="gridOpacity">
            <input
              type="range"
              id="gridOpacity"
              min={0}
              max={1}
              step={0.05}
              value={gridOpacity}
              onChange={(e) => setGridOpacity(+e.target.value)}
            />
            Grid opacity {Math.floor(gridOpacity * 100)}%
          </label>
          <label className="flex gap-3" htmlFor="squareColor">
            <input
              type="color"
              id="squareColor"
              value={squareColor}
              onChange={(e) => setSquareColor(e.target.value)}
            />
            Square color {squareColor}
          </label>
          <label className="flex gap-3" htmlFor="squareOpacity">
            <input
              type="range"
              id="squareOpacity"
              min={0}
              max={1}
              step={0.05}
              value={squareOpacity}
              onChange={(e) => setSquareOpacity(+e.target.value)}
            />
            Square opacity {Math.floor(squareOpacity * 100)}%
          </label>

          <button
            onClick={() => {
              setCellSize(100);
              setGridOpacity(0.5);
              setSquareColor("#800080");
              setSquareOpacity(0.15);
            }}
          >
            Reset
          </button>
        </fieldset>
        <fieldset
          className={`flex flex-col gap-4 relative ${
            dark ? "text-white" : "text-black"
          } items-start mb-10`}
        >
          <h2 className="text-xl font-semibold">Mask settings</h2>
          <label className="flex gap-3" htmlFor="maskCoverage">
            <input
              type="range"
              id="maskCoverage"
              min={0}
              max={100}
              step={1}
              value={maskCoverage}
              onChange={(e) => setMaskCoverage(+e.target.value)}
            />
            Mask Coverage {maskCoverage}%
          </label>
          <button
            onClick={() => {
              setMaskCoverage(50);
            }}
          >
            Reset
          </button>
        </fieldset>
        <fieldset className="flex flex-col gap-4 relative items-start">
          <h2 className="text-xl font-semibold">Glow settings</h2>
          <label className="flex gap-3" htmlFor="glowOnTop">
            <input
              type="checkbox"
              id="glowOnTop"
              checked={glowOnTop}
              onChange={(event) => {
                setGlowOnTop(event.target.checked);
              }}
            />
            Glow in front
          </label>

          <label className="flex gap-3" htmlFor="glowOpacity">
            <input
              type="range"
              id="glowOpacity"
              min={0}
              max={1}
              step={0.05}
              value={glowOpactiy}
              onChange={(e) => setGlowOpactiy(+e.target.value)}
            />
            Glow opacity {Math.floor(glowOpactiy * 100)}%
          </label>
          <label className="flex gap-3" htmlFor="glowHeight">
            <input
              type="range"
              id="glowHeight"
              min={200}
              max={1200}
              step={20}
              value={glowHeight}
              onChange={(e) => setGlowHeight(e.target.value)}
            />
            Glow height {glowHeight}px
          </label>
          <label className="flex gap-3" htmlFor="glowWidth">
            <input
              type="range"
              id="glowWidth"
              min={800}
              max={2000}
              step={20}
              value={glowWidth}
              onChange={(e) => setGlowWidth(e.target.value)}
            />
            Glow width {glowWidth}px
          </label>
          <label className="flex gap-3" htmlFor="glowColor">
            <input
              type="color"
              id="glowColor"
              value={glowColor}
              onChange={(e) => setGlowColor(e.target.value)}
            />
            Glow color {glowColor}
          </label>
          <button
            onClick={() => {
              setGlowOnTop(true);
              setGlowHeight("800");
              setGlowWidth("1100");
              setGlowOpactiy(0.15);
              setGlowColor("#800080");
            }}
          >
            Reset
          </button>
        </fieldset>
      </div>
    </div>
  );
}
