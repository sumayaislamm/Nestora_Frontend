const NestoraBackground = () => {
  return (
    <div className="absolute bg-primary inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <svg viewBox="0 0 800 300" className="w-full h-auto">
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
          className=" text-accent"
        >
          NESTORA
        </text>
      </svg>
    </div>
  );
};

export default NestoraBackground;