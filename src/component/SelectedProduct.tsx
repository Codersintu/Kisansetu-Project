import veg1 from "../assets/veg1.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartItem, ProductItem, type ProductItemProps } from "../atom";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function SelectedProduct() {
  const productsItem = useRecoilValue(ProductItem);
  const setProductItem = useSetRecoilState(ProductItem);

  const cart = useRecoilValue<Record<number, number>>(CartItem);
  const setCart = useSetRecoilState<Record<number, number>>(CartItem);


  const isInCart = (id: number) => (cart[id] ?? 0) > 0;
  const getQty = (id: number) => cart[id] ?? 0;

  function addToCart(id: number) {
    const product = productsItem.find(p => p.id === id);
    if (!product || product.quantity === 0) return;

    setCart(prev => ({ ...prev, [id]: 1 }));
  }

  function increment(id: number) {
    const product = productsItem.find(p => p.id === id);
    if (!product) return;

    setCart(prev => {
      const current = prev[id] ?? 0;
      if (current >= product.quantity) return prev; 
      return { ...prev, [id]: current + 1 };
    });
  }

  
  function decrement(id: number) {
    setCart(prev => {
      const current = prev[id] ?? 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: current - 1 };
    });
  }

  
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BACKEND_URL}/api/post/all`);
      const data = response.data.products || [];

      const sortedData = data.sort(
        (a: ProductItemProps, b: ProductItemProps) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setProductItem(sortedData);
      localStorage.setItem("productscached", JSON.stringify(sortedData));
    })();
  }, [setProductItem]);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl shadow-2xl px-10 py-5 rounded-2xl">
        <h1 className="text-2xl bg-green-400 w-full font-medium px-4 py-2">
          Buy Vegetable Online
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {productsItem.map(item => (
            <div
              key={item.id}
              className="relative w-64 min-h-80 p-5 border border-green-500 rounded-2xl flex flex-col gap-5"
            >
              
              {item.quantity === 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                  Out of Stock
                </div>
              )}

              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={veg1}
                  alt="vegetable"
                  className="object-contain hover:scale-110 transition duration-300"
                />
              </div>

              {/* Info */}
              <div>
                <p className="text-xs">⌚ 16 MINS</p>
                <h1 className="font-medium">{item.title}</h1>
              </div>

              {/* Price + Cart Actions */}
              <div className="flex justify-between items-center">
                <p>💰 {item.price}/{item.unit}</p>

                {isInCart(item.id) ? (
                  <div className="flex items-center bg-green-700 px-5 py-2 gap-2 text-white rounded-2xl">
                    <button onClick={() => decrement(item.id)}>-</button>

                    <p>{getQty(item.id)}</p>

                    <button
                      onClick={() => increment(item.id)}
                      disabled={getQty(item.id) >= item.quantity}
                      className={
                        getQty(item.id) >= item.quantity
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={item.quantity === 0}
                    onClick={() => addToCart(item.id)}
                    className={`px-5 py-2 rounded-xl text-sm font-medium
                      ${
                        item.quantity === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "border border-green-600 bg-green-100 text-green-500"
                      }
                    `}
                  >
                    {item.quantity === 0 ? "OUT OF STOCK" : "ADD"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
