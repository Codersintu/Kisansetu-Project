import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function SellerPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    vegetable: "",
    price: "",
    quantity: "",
    unit: "kg",
    img: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      await axios.post(
        `${BACKEND_URL}/api/post/create`,
        {
          title: form.title,
          description: form.description,
          vegetable: form.vegetable,
          price: Number(form.price),
          quantity: Number(form.quantity),
          unit: form.unit,
          img: form.img,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );

      setMessage("Product uploaded successfully ✅");
      setForm({
        title: "",
        description: "",
        vegetable: "",
        price: "",
        quantity: "",
        unit: "kg",
        img: "",
      });
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to upload product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-xl p-6 rounded-2xl flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-green-600">
          Seller – Add Product
        </h1>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="border p-2 rounded"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="border p-2 rounded"
          required
        />

        <input
          name="vegetable"
          value={form.vegetable}
          onChange={handleChange}
          placeholder="Vegetable Name"
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="border p-2 rounded"
          required
        />

        <select
          name="unit"
          value={form.unit}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="kg">kg</option>
          <option value="piece">piece</option>
          <option value="dozen">dozen</option>
          <option value="litre">litre</option>
        </select>

        <input
          name="img"
          value={form.img}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 cursor-pointer text-white py-2 rounded-xl"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-500 text-sm">{message}</p>}
      </form>
    </div>
  );
}
