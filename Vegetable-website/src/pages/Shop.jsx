import { Link } from "react-router-dom";

const products = [
  {
    slug: "apple",
    name: "Apple",
    price: 300,
    image: "apple.png",
  },
  {
    slug:"avocado",
    name: "Avocado",
    price: 200,
    image: "avocado.png",
  },
  {
    slug:"bamboo-shoot",
    name: "Bamboo shoot",
    price: 180,
    image: "bamboo-shoot.png",
  },
  {
    slug:"banana",
    name: "Banana",
    price: 100,
    image: "banana.png",
  },

   {
      slug:"beet-root",
     name:"Beet root",
     price:100,
     image:"beet-root.png",
   },
    {
       slug:"black-grape",
       name:"Black Grapes",
       price:100,
       image:"black-grape.png",
    },
     {
       slug:"brinjal",
       name:"Brinjal",
       price:80,
       image:"brinjal.png",
     },
      
     {
       slug:"brocauli",
       name:"Brocauli",
       price:100,
       image:"brocauli.png",
     },
      
     {
        slug:"cabbage",
       name:"Cabbage",
       price:70,
       image:"cabbage.png",
     },
      
     {
       slug:"capsicum",
       name:"Capsicum",
       price:100,
       image:"capsicum.png",
     },
      
     {
       slug:"carrot",
       name:"Carrot",
       price:100,
       image:"carrot.png",
     },

      {
         slug:"cauliflower",
         name:"Cauliflower",
         price:100,
         image:"cauliflower.png",
      },
       
       {
         slug:"chilly-red",
         name:"Chilly-red",
         price:100,
         image:"chilly-red.png",
       },

        {
           slug:"coconut",
           name:"Coconut",
           price:100,
           image:"coconut.png",
        },
           
        {
           slug:"coriander",
           name:"Coriander",
           price:100,
           image:"coriander.png",
        },

        {
           slug:"cucumber",
           name:"Cucumber",
           price:100,
           image:"cucumber.png",
        },

        {
           slug:"garlic",
          name:"Garlic",
          price:100,
          image:"garlic.png",
       },

       {
        slug:"green-bodi",
        name:"Green bodi",
        price:100,
        image:"green-bodi.png",
     },

     {
      slug:"green-chilly",
      name:"Greeen-chilly",
      price:100,
      image:"green-chilly.png",
     },

       {
        slug:"green-garlic",
        name:"Green garlic",
        price:100,
        image:"green-garlic.png",
     },

     {
       slug:"green-grape",
      name:"Green grapes",
      price:100,
      image:"green-grape.png",
   },
 
   {
    slug:"green-peas",
    name:"Green peas",
    price:100,
    image:"green-peas.png",
 },

    {
     slug:"jackfruit",
     name:"Jackfruit",
    price:100,
    image:"jack-fruit.png",
   },

    {
       slug:"karela",
       name:"Karela",
       price:100,
       image:"karela.png",
    },

    {
       slug:"lady-finger",
       name:"Lady finger",
       price:100,
       image:"lady-finger.png",
    },

      {
         slug:"laukaa",
         name:"Lauka",
         price:100,
         image:"laukaa.png",
      },

       {
         slug:"lemon",
         name:"Lemon",
         price:100,
         image:"lemon.png",
       },

        {
           slug:"lettuce-patta",
           name:"Lettuce patta",
           price:100,
           image:"lettuce patta.png",
        },
         
        {
           slug:"litchi",
           name:"Litchi",
           price:100,
           image:"litchi.png",
        },

        {
           slug:"long-beans",
           name:"Long beans",
           price:100,
           image:"long-beans.png",
        },

        {
          slug:"mango",
          name:"Mango",
          price:100,
          image:"Mango.png",
        },

         {
           slug:"methi-saag",
           name:"Methi saag",
           price:100,
           image:"methi-saag.png",
         },

         {
           slug:"mushroom-button",
           name:"Mushroom button",
           price:100,
           image:"mushroom-button.png",
         },

         {
           slug:"mushroom-flat",
           name:"Mushroom flat",
           price:100,
           image:"mushroom-flat.png",
         },

          {
             slug:"neuro",
             name:"Neuro",
             price:100,
             image:"neuro.png",
          },
 
          {
             slug:"onion",
             name:"Onion",
             price:100,
             image:"onion.png",
          },
      
          {
             slug:"orange",
             name:"Orange",
             price:100,
             image:"orange.png",
          },

          {
             slug:"palak-saag",
             name:"Palak saag",
             price:100,
             image:"palak-saag.png",

          },

           {
             slug:"papaya",
             name:"Papaya",
             price:100,
             image:"papaya.png",
           },

           {
             slug:"parwal",
             name:"Parwal",
             price:100,
             image:"parwal.png",
           },

           {
             slug:"pear",
             name:"Pear",
             price:100,
             image:"pear.png",
           },

           {
             slug:"pineapple",
             name:"Pineapple",
             price:100,
             image:"pineapple.png",
           },
            
           {
             slug:"potato",
             name:"Potato",
             price:100,
             image:"potato.png",
           },

           { 
            slug:"pumpkin",
            name:"Pumpkin",
            price:100,
            image:"pumpkin.png",
           },

           {
             slug:"radish",
             name:"Radish",
             price:100,
             image:"rayo-saag.png",
             
           },

           {
             slug:"strawberry",
             name:"Strawberry",
             price:130,
             image:"strawberry.png"
           },

           {
             slug:"tarul",
             name:"Tarul",
             price:120,
             image:"tarul.png",
           },

           {
             slug:"tomato",
             name:"Tomato",
             price:100,
             image:"tomato.png",
           },

           {
             slug:"turnip",
             name:"Turnip",
             price:100,
             image:"turnip.png",
           },

           {
             slug:"uskus",
             name:"Uskus",
             price:100,
             image:"uskus.png",
           },

           {
             slug:"watermelon",
             name:"Watermelon",
             price:100,
             image:"watermelon.png"
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
           <Link to={`/product/${product.slug}`} key={product.slug}
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
