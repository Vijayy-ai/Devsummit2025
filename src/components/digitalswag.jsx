import React, { useState, useRef} from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.webp";
import bgDevSummit from "../assets/bgDevSummit.png";
import EllipseGreen from "../assets/EllipseGreen.webp";
import HackerText from "../assets/H A C K E R.webp";

import iicLogo from "../assets/IIC-LOGO 1.webp";
import juLogo from "../assets/UNIVERSITY NEW LOGO 3.png";
import naacLogo from "../assets/agrade 2.webp";
import Rectangel from "../assets/Rectangle 1079.webp";
import starImage from "../assets/StarImage.webp";
import {
  fadeInUp,
  staggerContainer,
  SectionTransition,
  FloatingParticles,
} from "../utils/animations";

const DigitalSwag = () => {
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState("");
  const canvasRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Optimize initial frame generation
  React.useEffect(() => {
    const loadInitialFrame = async () => {
      setIsLoading(true);
      try {
        // Pre-load images
        await Promise.all([
          loadImage(EllipseGreen),
          loadImage(Rectangel),
          loadImage(starImage),
          loadImage(iicLogo),
          loadImage(juLogo),
          loadImage(naacLogo),
          loadImage(Logo),
          loadImage(HackerText),
        ]);

        generateSwag();
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialFrame();
  }, []); // Empty dependency array means this runs once on mount

  // Helper function to pre-load images
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUserImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const generateSwag = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size (square format)
    canvas.width = 1500;
    canvas.height = 1800;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear previous drawings to prevent color blending issues
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background rectangle image
    const ellipseImg = new Image();
    const rectangleImg = new Image();
    const starImg = new Image();

    ellipseImg.src = EllipseGreen;
    rectangleImg.src = Rectangel;
    starImg.src = starImage;

    try {
      // Load all images sequentially
      await new Promise((resolve) => {
        ellipseImg.onload = () => {
          ctx.globalAlpha = 1;
          ctx.drawImage(ellipseImg, 0, 0, canvas.width, canvas.height);
          ctx.globalAlpha = 1.0;
          resolve();
        };
      });

      await new Promise((resolve) => {
        rectangleImg.onload = () => {
          ctx.drawImage(rectangleImg, 0, 0, canvas.width, canvas.height);
          resolve();
        };
      });

      // Ensure proper green tone application
      ctx.fillStyle = "rgba(11, 61, 11, 0.3)"; // Add a dark green tint layer
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await new Promise((resolve) => {
        starImg.onload = () => {
          ctx.globalAlpha = 0.3; // Increased the green dark color
          ctx.drawImage(starImg, 0, 0, canvas.width, canvas.height);
          ctx.globalAlpha = 1.0;
          resolve();
        };
      });

      // Draw header and main title
      await drawHeader(ctx, centerX);
      await drawMainTitle(ctx, centerX);

      // Draw photo frame with HACKER text
      await drawPhotoFrame(ctx, centerX, centerY);

      if (userImage) {
        const userImg = new Image();
        await new Promise((resolve) => {
          userImg.onload = () => {
            drawEmptyFrame(ctx, centerX, centerY);
            drawUserImage(ctx, centerX, centerY, userImg);
            drawNameSection(
              ctx,
              userName || "ENTER NAME HERE",
              centerX,
              centerY + 380
            );
            drawBottomTagline(ctx, centerX, canvas.height - 150);
            setPreviewImage(canvas.toDataURL('image/png', 1.0));
            resolve();
          };
          userImg.src = userImage;
        });
      } else {
        drawEmptyFrame(ctx, centerX, centerY);
        drawNameSection(
          ctx,
          userName || "ENTER NAME HERE",
          centerX,
          centerY + 380
        );
        drawBottomTagline(ctx, centerX, canvas.height - 150);
        setPreviewImage(canvas.toDataURL('image/png', 1.0));
      }
    } catch (error) {
      console.error("Error generating swag:", error);
    }
  };

  const drawHeader = (ctx, centerX) => {
    // Draw white angular header that takes 50% width in center
    const headerWidth = ctx.canvas.width * 0.65; // 50% of canvas width
    const headerStart = centerX - headerWidth / 2;
    const headerEnd = centerX + headerWidth / 2;

    ctx.beginPath();
    ctx.moveTo(headerStart, 0);
    ctx.lineTo(headerEnd, 0);
    ctx.lineTo(headerEnd - 100, 180);
    ctx.lineTo(headerStart + 100, 180);
    ctx.closePath();
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    // Draw logos with proper aspect ratios
    const loadPromises = [];

    // Load all three logos
    const naacImg = new Image();
    const juImg = new Image();
    const iicImg = new Image();

    naacImg.src = naacLogo;
    juImg.src = juLogo;
    iicImg.src = iicLogo;

    // Set heights for each logo with adjusted sizes
    const naacHeight = 80;
    const juHeight = 80;
    const iicHeight = 80;

    // Calculate widths based on original aspect ratios
    let naacWidth, juWidth, iicWidth;

    // Wait for all images to load, then calculate proper dimensions and draw
    return Promise.all([
      new Promise(resolve => {
        naacImg.onload = () => {
          // Calculate width based on original aspect ratio
          naacWidth = (naacImg.width / naacImg.height) * naacHeight;
          resolve();
        };
      }),
      new Promise(resolve => {
        juImg.onload = () => {
          // Calculate width based on original aspect ratio
          juWidth = (juImg.width / juImg.height) * juHeight;
          resolve();
        };
      }),
      new Promise(resolve => {
        iicImg.onload = () => {
          // Calculate width based on original aspect ratio
          iicWidth = (iicImg.width / iicImg.height) * iicHeight;
          resolve();
        };
      })
    ]).then(() => {
      // Calculate total width needed for all logos with spacing
      const spacing = 50;
      const totalWidth = naacWidth + juWidth + iicWidth + spacing * 2;

      // Calculate starting X position to center all logos
      const startX = centerX - totalWidth / 2;

      // Draw all logos with proper positioning
      ctx.drawImage(naacImg, startX, 50, naacWidth, naacHeight);
      ctx.drawImage(juImg, startX + naacWidth + spacing, 50, juWidth, juHeight);
      ctx.drawImage(iicImg, startX + naacWidth + juWidth + spacing * 2, 50, iicWidth, iicHeight);

      // Update preview
      setPreviewImage(canvasRef.current.toDataURL('image/png', 1.0));
    });
  };

  const drawMainTitle = (ctx, centerX) => {
    const devSummitLogo = new Image();
    devSummitLogo.src = Logo;
    devSummitLogo.onload = () => {
      // Draw the logo image
      const logoWidth = 1100;
      const logoHeight = 200;
      const logoX = centerX - logoWidth / 2;
      const logoY = 250; // Increased from 280 to add more bottom padding
      ctx.drawImage(devSummitLogo, logoX, logoY, logoWidth, logoHeight);
    };
    setPreviewImage(canvasRef.current.toDataURL('image/png', 1.0));
  };

  const drawBanner = (ctx, centerX, y, text) => {
    // Draw green banner
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX - 300, y - 40);
    ctx.lineTo(centerX + 300, y - 40);
    ctx.lineTo(centerX + 320, y);
    ctx.lineTo(centerX - 320, y);
    ctx.closePath();
    ctx.fillStyle = "#A7FF40";
    ctx.fill();

    // Add text
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(text, centerX, y - 5);
    ctx.restore();
  };

  const drawPhotoFrame = (ctx, centerX, centerY) => {
    // Draw main square frame with rounded corners
    const frameSize = 600;
    ctx.beginPath();
    roundedRect(
      ctx,
      centerX - frameSize / 2,
      centerY - frameSize / 2,
      frameSize,
      frameSize,
      20
    );
    ctx.strokeStyle = "#A7FF40"; // Bright neon green
    ctx.lineWidth = 7; // Make the border thicker
    ctx.stroke();

    // Add a glow effect to the frame
    ctx.save();
    ctx.shadowColor = "#A7FF40";
    ctx.shadowBlur = 15;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // Load and draw HACKER text images on both sides
    const hackerImg = new Image();
    hackerImg.src = HackerText;

    // Wait for the image to load before drawing
    return new Promise((resolve) => {
      hackerImg.onload = () => {
        // Left side HACKER
        ctx.save();
        ctx.drawImage(
          hackerImg,
          centerX - frameSize / 2 - 250,
          centerY - 280,
          100,
          600
        );

        // Right side HACKER
        ctx.drawImage(
          hackerImg,
          centerX + frameSize / 2 + 150,
          centerY - 280,
          100,
          600
        );
        ctx.restore();
        resolve();
      };
    });
  };

  const drawNameSection = (ctx, name, centerX, y) => {
    // Draw name container with rounded ends
    ctx.beginPath();
    roundedRect(
      ctx,
      centerX - 300, // Increased width by making it start further left
      y - 50, // Increased top padding
      600, // Increased width from 500 to 600
      100, // Increased height from 80 to 100
      30
    );
    ctx.fillStyle = "#A7FF40"; // Bright neon green
    ctx.fill();

    // Add a slight gradient for depth
    const gradient = ctx.createLinearGradient(
      centerX - 300,
      y - 50,
      centerX - 300,
      y + 50
    );
    gradient.addColorStop(0, "#A7FF40");
    gradient.addColorStop(1, "#65D000");
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add name text
    ctx.font = "bold 60px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(name, centerX, y + 25); // Adjusted vertical position to center in taller box
  };

  const drawBottomTagline = (ctx, centerX, y) => {
    // Add bottom margin by adjusting y position
    const bottomMargin = 120;
    const adjustedY = y - bottomMargin;

    // Draw "29 - 30" text above the image
    ctx.font = "bolder 65px Arial";
    ctx.fillStyle = "#A7FF40";
    ctx.textAlign = "center";
    ctx.fillText("29-30 March", centerX, adjustedY - 1000);

    // Add shadow effect for better visibility
    ctx.shadowColor = "rgba(167, 255, 64, 0.8)";
    ctx.shadowBlur = 10;
    
    // Draw "I'm joining the Arena🚀" text
    ctx.font = "bold 70px Arial";
    ctx.fillStyle = "#A7FF40";
    ctx.textAlign = "center";
    ctx.fillText("I'm joining the Arena🚀", centerX, adjustedY - 70);

    // Draw main tagline with equal spacing
    ctx.font = "bold 65px Arial";
    ctx.fillStyle = "#A7FF40";
    ctx.textAlign = "center";
    const tagline = "INNOVATE - COLLABORATE - COMPETE";
    ctx.fillText(tagline, centerX, adjustedY + 45);
    
    // Clear shadow
    ctx.shadowBlur = 0;
  };

  const roundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  };

  const drawEmptyFrame = (ctx, centerX, centerY) => {
    const frameSize = 590;
    const x = centerX - frameSize / 2;
    const y = centerY - frameSize / 2;

    // Create clipping path for the frame
    ctx.save();
    ctx.beginPath();
    roundedRect(ctx, x, y, frameSize, frameSize, 20);
    ctx.clip();

    // Create deep green background matching the example images
    const bgGradient = ctx.createLinearGradient(
      centerX,
      y,
      centerX,
      y + frameSize
    );
    bgGradient.addColorStop(0, "#0B3D0B"); // Dark green top
    bgGradient.addColorStop(0.5, "#0F5E0F"); // Mid green center
    bgGradient.addColorStop(1, "#0B3D0B"); // Dark green bottom

    ctx.fillStyle = bgGradient;
    ctx.fillRect(x, y, frameSize, frameSize);

    // Add stars to the frame
    for (let i = 0; i < 200; i++) {
      const starX = x + Math.random() * frameSize;
      const starY = y + Math.random() * frameSize;
      const starSize = Math.random() * 1.5;
      const opacity = Math.random() * 0.8 + 0.2;

      // Draw star
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add some larger glowing stars
    for (let i = 0; i < 15; i++) {
      const starX = x + Math.random() * frameSize;
      const starY = y + Math.random() * frameSize;
      const starSize = Math.random() * 2 + 1;

      // Create glow effect
      const glow = ctx.createRadialGradient(
        starX,
        starY,
        0,
        starX,
        starY,
        starSize * 3
      );
      glow.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      glow.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(starX, starY, starSize * 3, 0, Math.PI * 2);
      ctx.fill();

      // Star center
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  };

  const drawUserImage = (ctx, centerX, centerY, userImg) => {
    const frameSize = 590;
    const frameX = centerX - frameSize / 2;
    const frameY = centerY - frameSize / 2;
    
    // Create clip path for the frame
    ctx.save();
    ctx.beginPath();
    roundedRect(
      ctx,
      frameX,
      frameY,
      frameSize,
      frameSize,
      20
    );
    ctx.clip();

    // Calculate dimensions to center-crop the image
    // This ensures the image fills the entire frame area regardless of dimensions
    const aspectRatio = userImg.width / userImg.height;
    let sourceX = 0;
    let sourceY = 0;
    let sourceWidth = userImg.width;
    let sourceHeight = userImg.height;
    
    // Center crop the source image if needed
    if (aspectRatio > 1) {
      // Image is wider than tall - crop the sides
      sourceWidth = userImg.height;
      sourceX = (userImg.width - sourceWidth) / 2;
    } else if (aspectRatio < 1) {
      // Image is taller than wide - crop the top/bottom
      sourceHeight = userImg.width;
      sourceY = (userImg.height - sourceHeight) / 2;
    }
    
    // Draw the cropped image to fill the frame completely
    ctx.drawImage(
      userImg,
      sourceX, sourceY, sourceWidth, sourceHeight, // Source rectangle
      frameX, frameY, frameSize, frameSize // Destination rectangle
    );

    ctx.restore();
  };

  const downloadSwag = () => {
    const link = document.createElement("a");
    const fileName = `devsummit-2025-${userName
      .toLowerCase()
      .replace(/\s+/g, "-")}.png`;
    link.download = fileName;
    
    // Force high quality output with maximum quality setting
    const quality = 1.0;
    const dataUrl = canvasRef.current.toDataURL("image/png", quality);
    link.href = dataUrl.replace("image/png", "image/octet-stream");
    link.click();
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bgDevSummit})` }}
        />
        <div className="animated-bg" />
        <FloatingParticles count={30} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <SectionTransition>
          <motion.h2
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Digital Swag
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12"
            variants={fadeInUp}
          >
            Create your personalized DevSummit Hackathon frame
          </motion.p>
        </SectionTransition>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Preview Section */}
            <div
              className="md:order-2 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
              border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="text-white text-xl mb-4">Preview</h3>
                <div className="relative aspect-4/5 w-full max-w-sm mx-auto mb-4 bg-black/30 rounded-lg overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#A7FF40]"></div>
                    </div>
                  ) : (
                    previewImage && (
                      <img src={previewImage} alt="Preview" className="w-full h-full object-contain" />
                    )
                  )}
                </div>
                {userImage && previewImage && (
                  <button
                    onClick={downloadSwag}
                    className="px-6 py-3 bg-[#A7FF40] text-black rounded-lg font-semibold 
                      hover:bg-[#8FE032] transition-colors duration-300"
                  >
                    Download Swag
                  </button>
                )}
              </div>
            </div>

            {/* Input Section - Changed order for mobile */}
            <div
              className="md:order-1 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
              border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 transition-all duration-300
              flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-lg font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#A7FF40]/20 
                      text-white focus:border-[#A7FF40] focus:outline-none text-lg"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-white text-lg font-semibold mb-2">Your Photo</label>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full 
                        file:border-0 file:text-sm file:font-semibold file:bg-[#A7FF40]/20 
                        file:text-[#A7FF40] hover:file:bg-[#A7FF40]/30"
                    />
                    
                    {userImage && (
                      <div className="mt-2 p-2 border border-dashed border-[#A7FF40]/30 rounded-lg flex justify-center">
                        <img 
                          src={userImage} 
                          alt="Selected" 
                          className="h-16 w-16 object-cover rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-white text-sm mb-3">Badge Preview</h4>
                  <ul className="text-gray-300 text-xs space-y-2 pl-4">
                    <li className="flex items-center">
                      <span className="mr-2 text-[#A7FF40]">✓</span> Your profile picture
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-[#A7FF40]">✓</span> Your name displayed
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-[#A7FF40]">✓</span> DevSummit 2025 branding
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-[#A7FF40]">✓</span> High quality shareable image
                    </li>
                  </ul>
                </div>

                <button
                  onClick={generateSwag}
                  className="w-full px-6 py-4 bg-[#A7FF40] text-black rounded-lg font-semibold 
                    hover:bg-[#8FE032] transition-colors duration-300 text-lg shadow-lg shadow-[#A7FF40]/20"
                >
                  Generate Swag
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Hidden canvas for image generation */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <style jsx>{`
        .animated-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(167, 255, 64, 0.1) 0%,
            transparent 50%
          );
          opacity: 0.5;
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default DigitalSwag;
