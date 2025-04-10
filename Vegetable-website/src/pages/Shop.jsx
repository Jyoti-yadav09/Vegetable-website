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
         name:"Chilly-red",
         price:100,
         image:"chilly-red.png",
       },

        {
           id:14,
           name:"Coconut",
           price:100,
           image:"coconut.png",
        },
           
        {
           id:15,
           name:"Coriander",
           price:100,
           image:"coriander.png",
        },

        {
           id:16,
           name:"Cucumber",
           price:100,
           image:"cucumber.png",
        },

        {
          id:17,
          name:"Garlic",
          price:100,
          image:"garlic.png",
       },

       {
        id:18,
        name:"Green bodi",
        price:100,
        image:"green-bodi.png",
     },

     {
      id:19,
      name:"Greeen-chilly",
      price:100,
      image:"green-chilly.png",
     },

       {
        id:19,
        name:"Green garlic",
        price:100,
        image:"green-garlic.png",
     },

     {
      id:20,
      name:"Green grapes",
      price:100,
      image:"green-grape.png",
   },
 
   {
    id:21,
    name:"Green peas",
    price:100,
    image:"green-peas.png",
 },

    {
     id:22,
     name:"Jackfruit",
    price:100,
    image:"jack-fruit.png",
   },

    {
       id:23,
       name:"Karela",
       price:100,
       image:"karela.png",
    },

    {
       id:24,
       name:"Lady finger",
       price:100,
       image:"lady-finger.png",
    },

      {
         id:25,
         name:"Lauka",
         price:100,
         image:"laukaa.png",
      },

       {
         id:26,
         name:"Lemon",
         price:100,
         image:"lemon.png",
       },

        {
           id:27,
           name:"Lettuce patta",
           price:100,
           image:"lettuce patta.png",
        },
         
        {
           id:28,
           name:"Litchi",
           price:100,
           image:"litchi.png",
        },

        {
           id:29,
           name:"Long beans",
           price:100,
           image:"long-beans.png",
        },

        {
          id:30,
          name:"Mango",
          price:100,
          image:"Mango.png",
        },

         {
           id:31,
           name:"Methi saag",
           price:100,
           image:"methi-saag.png",
         },

         {
           id:32,
           name:"Mushroom button",
           price:100,
           image:"mushroom-button.png",
         },

         {
           id:33,
           name:"Mushroom flat",
           price:100,
           image:"mushroom-flat.png",
         },

          {
             id:34,
             name:"Neuro",
             price:100,
             image:"neuro.png",
          },
 
          {
             id:35,
             name:"Onion",
             price:100,
             image:"onion.png",
          },
      
          {
             id:36,
             name:"Orange",
             price:100,
             image:"orange.png",
          },

          {
             id:37,
             name:"Palak saag",
             price:100,
             image:"palak-saag.png",

          },

           {
             id:38,
             name:"Papaya",
             price:100,
             image:"papaya.png",
           },

           {
             id:39,
             name:"Parwal",
             price:100,
             image:"parwal.png",
           },

           {
             id:40,
             name:"Pear",
             price:100,
             image:"pear.png",
           },

           {
             id:41,
             name:"Pineapple",
             price:100,
             image:"pineapple.png",
           },
            
           {
             id:42,
             name:"Potato",
             price:100,
             image:"potato.png",
           },

           { 
            id:43,
            name:"Pumpkin",
            price:100,
            image:"pumpkin.png",
           },

           {
             id:44,
             name:"Radish",
             price:100,
             image:"rayo-saag.png",
             
           },

           {
             id:45,
             name:"Strawberry",
             price:130,
             image:"strawberry.png"
           },

           {
             id:46,
             name:"Tarul",
             price:120,
             image:"tarul.png",
           },

           {
             id:47,
             name:"Tomato",
             price:100,
             image:"tomato.png",
           },

           {
             id:48,
             name:"Turnip",
             price:100,
             image:"turnip.png",
           },

           {
             id:49,
             name:"Uskus",
             price:100,
             image:"uskus.png",
           }

];

const Shop = () => {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <h2 className="mb-27 text-center font-bold text-3xl mt-20">
        Our Products
      </h2>
       <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          products.map((product)=>
          (
           <Link to={`/product/${product.id}`} key={product.id}
           className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
           > 
           
           <div className="overflow-hidden h-68 rounded-xl">
            <img src={`/assets/${product.image}`}
            alt={product.name}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
           </div>

           <h3 className="mt-4 text-lg font-semibold text-center">{product.name}</h3>
           <p className="text-center mt-2  text-gray-800">Rs {product.price.toFixed(2)}</p>
           </Link>
        
              
         ))
        }
       </div>

    </div>
  );
};

export default Shop;
