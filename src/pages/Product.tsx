import potato from '../assets/potato.png';

const quantities = ["1kg", "2.5kg", "5kg", "10kg", "20kg", "50kg"];
function Product() {
    return (
        <div className="w-full max-w-7xl min-h-screen mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="shadow-md rounded-2xl border-b border-b-gray-300"><img className='object-contain p-1' src={potato} alt="" /></div>
                <div className="flex flex-col items-start gap-6">
                    <h1 className='text-4xl'>Title......</h1>
                    <p>Price:16/kg</p>
                    <div className="">
                        <p className='text-xl font-semibold'>Select Quantity:</p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                            {quantities.map((quantity) => (
                                <button key={quantity} className="border border-gray-400 rounded-full px-4 py-2 m-1 hover:bg-gray-200 cursor-pointer">{quantity}</button>
                            ))}

                        </div>
                    </div>

                    <div className="w-full mt-4 flex flex-col gap-8">
                        <button className='bg-yellow-400 py-2 rounded-2xl cursor-pointer'>ADD TO CART</button>
                        <button className='bg-yellow-600 py-2 rounded-2xl cursor-pointer'>BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                <h2 className='text-2xl font-semibold mb-4'>Product Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="">
                <h2 className='text-2xl font-semibold my-4'>⚡Additional Information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="">
                <h2 className='text-2xl font-semibold my-4'>🥸Seller Details</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Product