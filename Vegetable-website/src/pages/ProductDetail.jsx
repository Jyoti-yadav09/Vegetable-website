import { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Apple (Fuji)",
    price: 300,
    image: "apple.jpg",
    description: "Fresh and sweet Fuji apples, perfect for snacking!",
  },
  {
    id: 2,
    name: "Avocado",
    price: 400,
    image: "avocado.jpg",
    description: "Creamy and healthy avocados for your daily nutrients!",
  },
  {
    id: 3,
    name: "Bamboo Shoot",
    price: 200,
    discountedPrice: 180,
    image: "bamboo.jpg",
    description: "Tender and crunchy bamboo shoots, great for cooking!",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="w-full md:w-1/2 rounded-xl shadow"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">{product.description}</p>
          <div className="text-2xl font-semibold text-green-600 mb-4">
            ₹{product.discountedPrice || product.price}
            {product.discountedPrice && (
              <span className="text-gray-500 line-through text-lg ml-3">
                ₹{product.price}
              </span>
            )}
          </div>

          <div className="flex items-center mb-6">
            <button className="px-4 py-2 border rounded-l">-</button>
            <span className="px-4 py-2 border-t border-b">1</span>
            <button className="px-4 py-2 border rounded-r">+</button>
            <button className="ml-4 px-6 py-2 bg-black text-white rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 mb-6">{product.description}</p>

        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <p className="text-gray-600 mb-2">There are no reviews yet.</p>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">
            Be the first to review “{product.name}”
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ name, email, rating, review });
              alert("Review submitted!");
              setName("");
              setEmail("");
              setRating(0);
              setReview("");
            }}
          >
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name *</label>
              <input
                required
                className="w-full px-4 py-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email *</label>
              <input
                required
                type="email"
                className="w-full px-4 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Your Rating</label>
              <div className="flex space-x-1 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Your Review</label>
              <textarea
                className="w-full px-4 py-2 border rounded"
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
