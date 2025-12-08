import { useEffect, useState } from "react";

function OrderPlaced({ onClose }: any) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50);
    setTimeout(() => onClose(), 2500); // close after animation
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl p-6 w-72 text-center transition-all duration-500 ${
          animate ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {/* Green Circle Animation */}
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center animate-ping"></div>
          <div className="absolute w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-white text-4xl">
            ✓
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-4 text-green-700">Order Placed!</h2>
        <p className="text-xs text-gray-600">
          Your order has been successfully placed.
        </p>
      </div>
    </div>
  );
}

export default OrderPlaced;
