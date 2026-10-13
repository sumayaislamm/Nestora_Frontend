
const NestoraBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <svg
        viewBox="0 0 800 300"
        className="h-auto w-[120%] max-w-none sm:w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="400"
          y="180"
          textAnchor="middle"
          fontSize="150"
          fontWeight="500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          letterSpacing="6"
          className="text-accent"
        >
          NESTORA
        </text>
      </svg>
    </div>
  );
};

export default NestoraBackground;
