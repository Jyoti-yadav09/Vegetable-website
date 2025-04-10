import { useParams } from "react-router-dom";
import { useState } from "react";


const products = [
  {
    id: 1,
    name: "Apple ",    
    slug: "apple",
    price: 100,
    image: "apple.png",
    category: "Fruits",
    stock: 46,
    rating: 0,
    description:
      "Large, crunchy, and sweet from the land of the rising sun! Our Fuji Apples are from Aomori, Japan, where the fruit is very cherished. Produced with the richest of quality, our Fuji Apples guarantee the full experience of this irresistible. Packed with vitamins and dietary fibers. 'An apple a day keeps the doctor away' – why not make it our Fuji Apples?",
  },
  
   {
     id:2,
     name:"Avocado",
     slug:"avocado",
     price:100,
     image:"avocado.png",
     category:"Fruits",
     stock:46,
     rating:0,
     description:"hi"
   },

    {
       id:3,
       name:"Bamboo-shoot",
       slug:"bamboo-shoot",
       price:100,
       image:"bamboo-shoot.png",
       category:"Vegetables",
       stock:46,
       rating:0,
       description:"Hi"

    },

     {
       id:4,
       name:"Banana",
       slug:"banana",
       price:100,
       image:"banana.png",
       category:"Fruits",
       stock:46,
       rating:0,
       description:"Hi"
     },

     {
       id:5,
       name:"Beet-root",
       slug:"beet-root",
       price:100,
       image:"beet-root",
       stock:46,
       rating:0,
       description:"Hi"
     },

       {
         id:6,
         name:"Black-grape",
         slug:"black-grape",
         price:100,
         image:"black-grape",
         stock:46,
         rating:0,
         description:"Hi"
       },

       {
         id:7,
         name:"Brinjal",
         slug:"brinjal",
         price:100,
         image:"brinjal.png",
         stock:46,
         rating:0,
         description:"Hi"
       },

       {
         id:8,
         name:"Brocauli",
         slug:"brocauli",
         price:100,
         image:"cabbage.png",
         stock:46,
         rating:0,
         description:"Hi"
       },

       {
         id:9,
         name:"Cabbage",
         slug:"cabbage",
         price:100,
         image:"cabbage.png",
         stock:46,
         rating:0,
         description:"Hii"
       },

       {
         id:10,
         name:"Capsicum",
         slug:"capsicum",
         price:100,
         image:"capsicum.png",
         stock:46,
         rating:0,
         description:"Hii"
       },

        {
           id:11,
           name:"Carrot",
           slug:"carrot",
           price:100,
           image:"carrot.png",
           stock:46,
           rating:0,
          description:"Hii"

        },
         
        {
           id:12,
           name:"Cauliflower",
           slug:"cauliflower",
           price:100,
           image:"cauliflower.png",
           stock:46,
           rating:0,
           description:"Hii"
        },

         {
           id:13,
           name:"Chilly-red",
           slug:"chilly-red",
           price:100,
           image:"chilly-red.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:14,
           name:"Coconut",
           slug:"coconut",
           price:100,
           image:"coconut.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:15,
           name:"Coriander",
           slug:"coriander",
           price:100,
           image:"coriander.png",
           stock:46,
           rating:0,
           description:"Hii"

         },

         {
           id:16,
           name:"Cucumber",
           slug:"cucumber",
           price:100,
           image:"cucumber.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:17,
           name:"Garlic",
           slug:"garlic",
           price:100,
           image:"garlic.png",
           stock:47,
           rating:0,
           description:"HIii"
         },

         {
           id:18,
           name:"Green-bodi",
           slug:"green-bodi",
           price:100,
           image:"green-bodi.png",
           stock:47,
           rating:0,
           description:"Hii"
         },

         {
           id:19,
           name:"Green-chilly",
           slug:"green-chilly",
           price:100,
           image:"green-chilly.png",
           stock:47,
           rating:0,
           description:"Hii"
         },
          
         {
           id:20,
           name:"Green-garlic",
           slug:"green-garlic",
           price:100,
           image:"green-garlic.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:21,
           name:"Green-grape",
           slug:"green-grape",
           price:100,
           image:"green-grape.png",
           stock:47,
           rating:0,
           description:"Hii"
         },

         {
           id:22,
           name:"Jack-fruit",
           slug:"jack-fruit",
           price:100,
           image:"jack-fruit.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:23,
           name:"Karela",
           slug:"karela",
           price:100,
           image:"karela.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:24,
           name:"Lady-Finger",
           slug:"lady-finger",
           price:100,
           image:"lady-finger.png",
           stock:45,
           rating:0,
           description:"Hii"

         },

         {
           id:25,
           name:"Lauka",
           slug:"lauka",
           price:100,
           image:"Laukaa.png",
           stock:45,
           rating:0,
           description:"Hii"
         },

         {
           id:26,
           name:"Lemon",
           slug:"lemon",
           price:100,
           image:"lemon.png",
           stock:45,
           rating:0,
           description:"Hii"
         },

         {
           id:27,
           name:"Lettuce patta",
           slug:"lettuce patta",
           price:100,
           image:"lettuce-patta.png",
           stock:45,
           rating:0,
           description:"Hii"
         },

         {
           id:28,
           name:"litchi",
           slug:"litchi",
           price:100,
           image:"litchi.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:29,
           name:"long-beans",
           slug:"long-beans",
           price:100,
           image:"long-beans.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:30,
           name:"Mango",
           slug:"mango",
           price:100,
           image:"Mango.png",
           stock:47,
           rating:0,
           description:"Hii"
         },

         {
           id:31,
           name:"Methi-saag",
           slug:"methi-saag",
           price:100,
           image:"methi-saag.png",
           stock:47,
           rating:0,
           description:"Hii"
         },
          
         {
           id:32,
           name:"Mushroom-button",
           slug:"mushroom-button",
           price:100,
           image:"mushroom-button.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:33,
           name:"Mushroom-flat",
           slug:"mushroom-flat",
           price:100,
           image:"mushroom-flat.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:34,
           name:"Neuro",
           slug:"neuro",
           price:100,
           image:"neuro.png",
           stock:46,
           rating:0,
           description:"Hii"
         },

         {
           id:35,
           name:"Onion",
           slug:"onion",
           price:100,
           image:"onion.png",
           stock:47,
           rating:0,
           description:"Hii"
         },

         {
           id:36,
           name:"Orange",
           slug:"orange",
           price:100,
           image:"orange.png",
           stock:48,
           rating:0,
           description:"Hii"
         },

         {
          id:37,
          name:"Palak-saag",
          slug:"palak-saag",
          price:100,
          image:"palak-saag.png",
          stock:49,
          rating:0,
          description:"Hii"
         },

         {
           id:38,
           name:"Papaya",
           slug:"papaya",
           price:100,
           image:"papaya.png",
           stock:50,
           rating:0,
           description:"Hii"
         },

         {
           id:39,
           name:"Parwal",
           slug:"parwal",
           price:100,
           image:"parwal.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:40,
           name:"Pear",
           slug:"pear",
           price:100,
           image:"pear.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:41,
           name:"Pineapple",
           slug:"pineapple",
           price:100,
           image:"pineapple.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:42,
           name:"Pomogranate",
           slug:"pomogranate",
           price:100,
           image:"pomogranate.png",
           stock:45,
           rating:0,
           description:"Hii"
         },

         {
           id:43,
           name:"Potato",
           slug:"potato",
           price:100,
           image:"potato.png",
           stock:45,
           rating:0,
           description:"Hii"
         },

         {

           id:44,
           name:"Pumpkin",
           slug:"pumpkin",
           price:100,
           image:"pumpkin.png",
           stock:45,
           rating:0,
           description:"Hii"
         },

         {
           id:45,
           name:"Radish",
           slug:"radish",
           price:100,
           image:"radish.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:46,
           name:"Rayo-saag",
           slug:"rayo-saag",
           price:100,
           image:"rayo-saag.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:47,
           name:"Strawberry",
           slug:"strwberry",
           price:100,
           image:"strawberry.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:48,
           name:"Tarul",
           slug:"tarul",
           price:100,
           image:"tarul.png",
           stock:40,
           rating:0,
           description:"Ho"
         },

         {
           id:49,
           name:"Tomato",
           slug:"tomato",
           price:100,
           image:"tomato.png",
           stock:40,
           rating:0,
           description:"Hi"
         },

         {
           id:50,
           name:"Turnip",
           slug:"turnip",
           price:100,
           image:"turnip.png",
           stock:40,
           rating:0,
           description:"Hii"
         },

         {
           id:51,
           name:"Uskus",
           slug:"uskus",
           price:100,
           image:"uskus.png",
           stock:40,
           rating:0,
           description:"hII"
         },

         {
           id:52,
           name:"Watermelon",
           slug:"watermelon",
           price:100,
           image:"watermelon.png",
           stock:40,
           rating:0,
           description:"Hii"

         }


         
 

];

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (!product) {
    return <div className="text-center text-red-600 mt-10">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={`/assets/${product.image}`}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-xl shadow"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-2">
            SKU: 077-FB | Category: <span className="text-blue-500">{product.category}</span>
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">₹ {product.price}.00</p>
          <p className="text-sm text-green-600 mb-4">{product.stock} in stock</p>

          <div className="flex items-center gap-2 mb-6">
            <button className="px-4 py-2 bg-black text-white rounded">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Reviews (0)</h3>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h4 className="font-semibold mb-2">Ratings Breakdown</h4>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center mb-1">
              <span className="w-12">{star} Stars</span>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < star ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-4 text-sm italic text-gray-600">
            Average Star Rating: <span className="text-yellow-500 font-bold">0.0</span> out of 5 (0 vote)
          </p>
        </div>

        <h4 className="font-semibold mb-4">Be the first to review “{product.name}”</h4>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block font-medium">Name *</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Email *</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Your rating *</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="text-2xl text-yellow-500 focus:outline-none"
                >
                  {star <= (hover || rating) ? "★" : "☆"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium">Your review *</label>
            <textarea
              rows={4}
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Write your review..."
              required
            ></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-black text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
