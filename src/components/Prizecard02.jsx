import React from "react";

const PrizeCard = () => {
  return (
    <div className="relative">
      <svg
        width="353"
        height="320"
        viewBox="0 0 353 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M149.847 0H22.6273C10.1306 0 0 10.1305 0 22.6272V349.214C0 361.711 10.1306 371.841 22.6273 371.841H330.358C342.855 371.841 352.985 361.711 352.985 349.214V120.679V118.098C352.985 111.192 347.387 105.594 340.481 105.594H267.804C261.52 105.594 255.519 102.981 251.239 98.3801L166.413 7.21381C162.132 2.61324 156.131 0 149.847 0Z"
          fill="url(#paint0_linear_142_3831)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_142_3831"
            x1="104.463"
            y1="86.7379"
            x2="196.48"
            y2="371.841"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D0FF9A" />
            <stop offset="1" stopColor="#A9DC6E" />
          </linearGradient>
        </defs>

        {/* Text Elements */}
        <text
          x="30"
          y="60"
          fill="#000"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          ₹15K
        </text>
        <text
          x="30"
          y="90"
          fill="#000"
          fontSize="20"
          fontFamily="Arial, sans-serif"
        >
          Cash Prize
        </text>
        <text
          x="30"
          y="140"
          fill="#000"
          fontSize="18"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          2nd Prize
        </text>
        <text
          x="30"
          y="180"
          fill="#000"
          fontSize="14"
          fontFamily="Arial, sans-serif"
          className="text-[16px]"
        >
          Granted to the team that achieves second
        </text>
        <text
          x="30"
          y="200"
          fill="#000"
          fontSize="14"
          fontFamily="Arial, sans-serif"
          className="text-[16px]"
        >
          place with an outstanding and impactful
        </text>
        <text
          x="30"
          y="220"
          fill="#000"
          fontSize="14"
          fontFamily="Arial, sans-serif"
          className="text-[16px]"
        >
          solution.
        </text>
      </svg>

      {/* Button */}
      <div
        className="absolute top-[15rem] left-[40px] bg-black text-white text-center rounded-lg cursor-pointer w-[120px] h-[40px] flex items-center justify-center"
        onClick={() => alert("View Details Clicked")}
      >
        view details →
      </div>
    </div>
  );
};

export default PrizeCard;
