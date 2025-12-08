import { useRecoilValue } from "recoil";
import { CartItem } from "../atom";
import { categories } from "./SelectedProduct";
import { useState } from "react";
import OrderPlaced from "./OrderPlaced";

function Cart({ setIsCartOpen }:any) {
  const cart = useRecoilValue(CartItem);
 const [showOrder, setShowOrder] = useState(false);
  // CALCULATE TOTAL PRICE
  const itemsTotal = Object.entries(cart).reduce<number>((total, [id, qty]) => {
    const found = categories.find((x) => x.id === Number(id));
    return total + (found ? found.price * (qty as number) : 0);
  }, 0);

  const handlingCharge = 2;
  const grandTotal = itemsTotal + handlingCharge;

  return (
    <>      {showOrder && <OrderPlaced onClose={() => setShowOrder(false)} />}

    <div className="fixed right-0 top-0 bg-white h-screen w-72 shadow-2xl rounded-md flex flex-col gap-5 px-2 z-50">

      {/* CART HEADER — unchanged */}
      <div className="flex items-center justify-between p-3 bg-gray-50 shadow-sm">
        <h1 className="text-xl font-medium">My Cart</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor"
          onClick={() => setIsCartOpen(false)}
          className="size-6 cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      {/* DELIVERY BOX — unchanged */}
      <div className="bg-gray-100 rounded-xl px-3 py-3">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="size-10 bg-cyan-100 rounded-full p-2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="flex flex-col">
            <p className="font-semibold">Delivery in 11 minutes</p>
            <p className="text-xs text-gray-600">Shipment of items</p>
          </div>
        </div>

        {/* ITEM LIST — unchanged */}
        <div className="mt-2">
          {Object.entries(cart).map(([id, qty]) => {
            const found = categories.find((x) => x.id === Number(id));

            return found ? (
              <div key={id} className="flex justify-between items-center py-1">
                <span className="text-sm">{found.label}</span>
                <span className="font-semibold text-sm">
                  {found.quantity} ❎ {qty as number}
                </span>
              </div>
            ) : null;
          })}
        </div>
      </div>

      {/* BILL DETAILS */}
      <div className="bg-white rounded-xl border p-3">
        <h2 className="font-semibold text-sm mb-2">Bill details</h2>

        <div className="flex justify-between text-sm py-1">
          <span>Items total</span>
          <span className="font-medium">₹{itemsTotal}</span>
        </div>

        <div className="flex justify-between text-sm py-1">
          <span className="flex items-center gap-1">🚚 Delivery charge</span>
          <span className="line-through text-gray-500">₹25</span>
          <span className="text-green-600 font-medium ml-1">FREE</span>
        </div>

        <div className="flex justify-between text-sm py-1">
          <span className="flex items-center gap-1">⚙ Handling charge</span>
          <span className="font-medium">₹{handlingCharge}</span>
        </div>

        <div className="flex justify-between font-semibold text-base mt-2 pt-2 border-t">
          <span>Grand total</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>

      {/* CANCELLATION POLICY */}
      <div className="bg-gray-100 rounded-xl p-3 text-sm text-gray-700">
        <h2 className="font-semibold mb-1">Cancellation Policy</h2>
        <p className="text-xs leading-tight">
          Orders cannot be cancelled once packed for delivery.
          In case of unexpected delays, a refund will be provided, if applicable.
        </p>
      </div>

      {/* BOTTOM BUTTON (Sticky) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-3 shadow-lg">
        <div className="flex items-center justify-between">

          <span className="font-semibold text-lg">₹{grandTotal}</span>

          <button  onClick={() => {setShowOrder(true)}} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-xl text-sm font-medium">
            Click to Buy →
          </button>

        </div>
      </div>

    </div>
    </>
  );
}

export default Cart;
