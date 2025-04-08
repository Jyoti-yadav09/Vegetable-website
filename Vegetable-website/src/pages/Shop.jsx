import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 300,
    image: "apple.png",
  },
  {
    id: 2,
    name: "Avocado",
    price: 200,
    image: "avocado.png",
  },
  {
    id: 3,
    name: "Bamboo shoot",
    price: 180,
    image: "bamboo-shoot.png",
  },
  {
    id: 4,
    name: "Banana",
    price: 100,
    image: "banana.png",
  },
   {
     id:5,
     name:"Beet root",
     price:100,
     image:"beet-root.png",
   },
    {
       id:6,
       name:"Black Grapes",
       price:100,
       image:"black-grape.png",
    },
     {
       id:7,
       name:"Brinjal",
       price:80,
       image:"brinjal.png",
     },
      
     {
       id:8,
       name:"Brocauli",
       price:100,
       image:"brocauli.png",
     },
      
     {
       id:9,
       name:"Cabbage",
       price:70,
       image:"cabbage.png",
     },
      
     {
       id:10,
       name:"Capsicum",
       price:100,
       image:"capsicum.png",
     },
      
     {
       id:11,
       name:"Carrot",
       price:100,
       image:"carrot.png",
     },

      {
         id:12,
         name:"Cauliflower",
         price:100,
         image:"cauliflower.png",
      },
       
       {
         id:13,
         name:""
       }
];

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={`/assets/${product.image}`} 
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">
              {product.name}
            </h3>
            <p className="mt-2 text-center font-bold text-gray-800">
              ₹{product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
