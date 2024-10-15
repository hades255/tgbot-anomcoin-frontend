import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { earnAirdrop, stopAirdrop } from "../../../redux/coinSlice";

const CoinAirdrop = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [coins, setCoins] = useState([]);

  const img = useMemo(() => new Image(), []);
  img.src = "/Alpcoin.png";

  useEffect(() => {
    setTimeout(() => {
      dispatch(stopAirdrop());
    }, 10000);
  }, [dispatch]);

  const generateCoins = () => {
    const newCoins = [];
    for (let i = 0; i < 120; i++) {
      newCoins.push({
        x: Math.random() * 280 + 50,
        y: -(Math.random() * 1200),
        radius: 40,
      });
    }
    setCoins(newCoins);
  };

  useEffect(() => {
    generateCoins();
    const interval = setInterval(() => {
      setCoins((prevCoins) =>
        prevCoins.map((coin) => ({
          ...coin,
          y: coin.y + 5,
        }))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    cancelAnimationFrame(animationRef.current);
    const canvas = canvasRef.current;
    const parentElement = canvas.parentElement;
    let rect = null;
    const setCanvasSize = () => {
      rect = parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawCoins = () => {
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        coins.forEach((coin) => {
          ctx.drawImage(img, coin.x - 60, coin.y - 60, 120, 120);
        });
      };
      animationRef.current = requestAnimationFrame(drawCoins);
    };

    drawCoins();
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [img, coins]);

  const handleMouseMove = useCallback(
    (e) => {
      const mouseX = e.nativeEvent.offsetX;
      const mouseY = e.nativeEvent.offsetY;
      let remain = [],
        erase = [];
      coins.forEach((coin) => {
        const diff = Math.sqrt((mouseX - coin.x) ** 2 + (mouseY - coin.y) ** 2);
        if (diff < coin.radius) {
          erase.push({
            ...coin,
            key:
              coin.x + "-" + mouseX + "-" + coin.y + "-" + mouseY + "-" + diff,
            type: "airdrop",
          });
        } else {
          remain.push(coin);
        }
      });
      setCoins(remain);
      if (erase.length) {
        dispatch(earnAirdrop(erase));
      }
    },
    [coins, dispatch]
  );

  const handleTouchMove = useCallback(
    (e) => {
      const mouseX = e.touches[0].clientX;
      const mouseY = e.touches[0].clientY;
      let remain = [],
        erase = [];
      coins.forEach((coin) => {
        const diff = Math.sqrt((mouseX - coin.x) ** 2 + (mouseY - coin.y) ** 2);
        if (diff < coin.radius) {
          erase.push({
            ...coin,
            key:
              coin.x + "-" + mouseX + "-" + coin.y + "-" + mouseY + "-" + diff,
            type: "airdrop",
          });
        } else {
          remain.push(coin);
        }
      });
      setCoins(remain);
      if (erase.length) {
        dispatch(earnAirdrop(erase));
      }
    },
    [coins, dispatch]
  );

  const handleTouchStart = useCallback(
    (e) => {
      const mouseX = e.touches[0].clientX;
      const mouseY = e.touches[0].clientY;
      let remain = [],
        erase = [];
      coins.forEach((coin) => {
        const diff = Math.sqrt((mouseX - coin.x) ** 2 + (mouseY - coin.y) ** 2);
        if (diff < coin.radius) {
          erase.push({
            ...coin,
            key:
              coin.x + "-" + mouseX + "-" + coin.y + "-" + mouseY + "-" + diff,
            type: "airdrop",
          });
        } else {
          remain.push(coin);
        }
      });
      setCoins(remain);
      if (erase.length) {
        dispatch(earnAirdrop(erase));
      }
    },
    [coins, dispatch]
  );

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0">
        <canvas
          ref={canvasRef}
          style={{ display: "block" }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        />
      </div>
    </>
  );
};

export default CoinAirdrop;
