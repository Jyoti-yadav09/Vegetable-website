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
     description:"Avocados are oval shaped fruits with a thick green and a bumpy, leathery outer skin. They have a unique-texture, with a creamy and light green coloured flesh that has a buttery flavour and special aroma. Avocados are also known as an alligator pear or butter fruit. Fresho avocados delivered to you, will not just entice your taste buds but will also ensure your well being"
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
       description:"Bamboo shoots contain phytochemicals, which have antibacterial and antiviral effects in the body. They are a good source of dietary fibre. Bamboo shoots contain potassium, important for a healthy heart and to maintain normal blood pressure."

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
       description:"Tiny and small sized, this variety is called Yelakki in Bangalore and Elaichi in Mumbai. Despite its small size, they are naturally flavoured, aromatic and sweeter compared to regular bananas. Yelakki bananas are around 3- 4 inches long and contain a thinner skin and better shelf life than Robusta bananas."
     },

     {
       id:5,
       name:"Beet-root",
       slug:"beet-root",
       price:100,
       image:"beet-root",
       category:"Vegetables",
       stock:46,
       rating:0,
       description:"Baby candy beetroot is an eye-catching garnish and is a fantastic addition to any salad. Beautiful served whole or cut diagonally through the middle to show off those mysterious pink and white rings."
     },

       {
         id:6,
         name:"Black-grape",
         slug:"black-grape",
         price:100,
         image:"black-grape",
         category:"Fruits",
         stock:46,
         rating:0,
         description:"black blue grapes have a foxy flavour and a brisky pungent taste.We have neatly packed the best quality grapes to make your day fresh and healthy."
       },

       {
         id:7,
         name:"Brinjal",
         slug:"brinjal",
         price:100,
         image:"brinjal.png",
         category:"Vegetables",
         stock:46,
         rating:0,
         description:"They’re usually split, not quite through, along the centre, which helps them cook more evenly."
       },

       {
         id:8,
         name:"Brocauli",
         slug:"brocauli",
         price:100,
         image:"cabbage.png",
         category:"Vegetables",
         stock:46,
         rating:0,
         description:"Organic head of broccoli."
       },

       {
         id:9,
         name:"Cabbage",
         slug:"cabbage",
         price:100,
         image:"cabbage.png",
         category:"Vegetables",
         stock:46,
         rating:0,
         description:"Also know as Hispi or Sweetheart this cabbage is sweet and tender when cooked."
       },

       {
         id:10,
         name:"Capsicum",
         slug:"capsicum",
         price:100,
         image:"capsicum.png",
         category:"Vegetables",
         stock:46,
         rating:0,
         description:"They can be eaten raw, with a mild flavour and crunch, or they can be roasted which brings out their sweetness. Try roasting with parmesan and a drizzle of olive oil for a delicious summer side dish."
       },

        {
           id:11,
           name:"Carrot",
           slug:"carrot",
           price:100,
           image:"carrot.png",
           category:"Vegetables",
           stock:46,
           rating:0,
          description:"Fine Food Specialist’s baby carrots are so fresh, they still have their carrot tops on. Tender and sweet, they are very small and so tender so they are delicious raw."

        },
         
        {
           id:12,
           name:"Cauliflower",
           slug:"cauliflower",
           price:100,
           image:"cauliflower.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Cauliflower arrives almost all season and is always a welcome addition to our vegetable gathering. They really look superb and really work well on the plate."
        },

         {
           id:13,
           name:"Chilly-red",
           slug:"chilly-red",
           price:100,
           image:"chilly-red.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Glossy and bright, sweet peppers have a wonderfully intense flavour, and are endlessly versatile."
         },

         {
           id:14,
           name:"Coconut",
           slug:"coconut",
           price:100,
           image:"coconut.png",
           category:"Fruits",
           stock:46,
           rating:0,
           description:"The minerals in coconut are involved in many functions in your body. Coconuts are especially high in manganese, which is essential for bone health and the metabolism of carbohydrates, proteins, and cholesterol"
         },

         {
           id:15,
           name:"Coriander",
           slug:"coriander",
           price:100,
           image:"coriander.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"The leaves and stalks can be used to flavour soups, salads, beans & mutton curries. Coriander has a very versatile flavour, working with a wide range of ingredients"

         },

         {
           id:16,
           name:"Cucumber",
           slug:"cucumber",
           price:100,
           image:"cucumber.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Try pickling these for your own homemade cucumber pickles for home-made sandwiches or to nibble at picnics."
         },

         {
           id:17,
           name:"Garlic",
           slug:"garlic",
           price:100,
           image:"garlic.png",
           category:"Vegetables",
           stock:47,
           rating:0,
           description:"“You’ll sleep alone, but you’ll sleep really well!” Packed with vitamins and mineral, health benefits from treating infections to reducing blood pressure, Garlic is great for you on so many levels, not to mention the flavor it provides. At Online Tarkari, we bring you quality Garlic from China and Nepal that’s produced under the strictest of safety and quality standards second to none."
         },

         {
           id:18,
           name:"Green-bodi",
           slug:"green-bodi",
           price:100,
           image:"green-bodi.png",
           category:"Vegetables",
           stock:47,
           rating:0,
           description:"Tender, crispy and sweet tasting green cowpea beans have a succulent and pale flesh. These long and slender beans contain lime green peas. They are also known as black-eyed peas and lobia."
         },

         {
           id:19,
           name:"Green-chilly",
           slug:"green-chilly",
           price:100,
           image:"green-chilly.png",
           category:"Vegetables",
           stock:47,
           rating:0,
           description:"Loaded with Vitamin C and beta-carotene, green chillies are great for healthy eyes, skin and immune system. Make sure to store the green chillies at a dark cool area because chillies lose their Vitamin C, when they are exposed to heat, light and air."
         },
          
         {
           id:20,
           name:"Green-garlic",
           slug:"green-garlic",
           price:100,
           image:"green-garlic.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Green garlic adds a delicate garlicky flavor to spring and early summer dishes."
         },

         {
           id:21,
           name:"Green-grape",
           slug:"green-grape",
           price:100,
           image:"green-grape.png",
           category:"Fruits",
           stock:47,
           rating:0,
           description:"Juicy and snappy, with a beautiful balance of sweet and tart flavour, these grape bunches have a lingering taste."
         },

         {
           id:22,
           name:"Jack-fruit",
           slug:"jack-fruit",
           price:100,
           image:"jack-fruit.png",
           category:"Fruits",
           stock:46,
           rating:0,
           description:"jackfruit supplies plenty of nutritional perks: It’s low in calories, naturally fat- and sodium-free, provides ample vitamin A (in the form of beta-carotene) and vitamin C, and packs in a surprising blood pressure-lowering potassium"
         },

         {
           id:23,
           name:"Karela",
           slug:"karela",
           price:100,
           image:"karela.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"The most bitter among all fruits, bitter gourds come with a rough, bumpy and green skin. The off-white translucent flesh tastes crispy with the combination of the bitter seeds that are present inside."
         },

         {
           id:24,
           name:"Lady-Finger",
           slug:"lady-finger",
           price:100,
           image:"lady-finger.png",
           category:"Vegetables",
           stock:45,
           rating:0,
           description:"The small thin pods contain tiny seeds, and have a delicate and subtle flavour. The flavour of okra becomes more nutty when fried, and a sweeter taste with a more fluid texture when they are boiled. In Asian dishes they are typically sautéed and then thrown into curries and stews to add a crunchy texture."

         },

         {
           id:25,
           name:"Lauka",
           slug:"lauka",
           price:100,
           image:"Laukaa.png",
           category:"Vegetables",
           stock:45,
           rating:0,
           description:"The interior flesh is creamy white with petite seeds that when young are tender and edible but when more mature become hard and should be removed prior to consumption."
         },

         {
           id:26,
           name:"Lemon",
           slug:"lemon",
           price:100,
           image:"lemon.png",
           category:"Fruits",
           stock:45,
           rating:0,
           description:"Organic lemons are an all-round powerhouse of the kitchen, turning anything they touch to culinary gold and boosting your health in the process."
         },

         {
           id:27,
           name:"Lettuce patta",
           slug:"lettuce patta",
           price:100,
           image:"lettuce-patta.png",
           category:"Vegetables",
           stock:45,
           rating:0,
           description:"Sweet and fresh these lettuce are the backbone of any successful salad."
         },

         {
           id:28,
           name:"litchi",
           slug:"litchi",
           price:100,
           image:"litchi.png",
           category:"Fruits",
           stock:46,
           rating:0,
           description:"The Empress’s fruit! Lychee was one of the original fruits our company was founded on. The exotic yet familiar taste has followers spanning multiple demographics and cultures. Sweet and aromatic, Lychee is packed with Vitamins C, B2, B6, and Copper."
         },

         {
           id:29,
           name:"long-beans",
           slug:"long-beans",
           price:100,
           image:"long-beans.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Tender, crispy and sweet tasting green cowpea beans have a succulent and pale flesh. These long and slender beans contain lime green peas. They are also known as black-eyed peas and lobia."
         },

         {
           id:30,
           name:"Mango",
           slug:"mango",
           price:100,
           image:"Mango.png",
           category:"Fruits",
           stock:47,
           rating:0,
           description:"Alphonso Mango is premium quality mango in terms of sweetness, richness and flavour. It is famous for its unique fragrance and mouth-watering taste."
         },

         {
           id:31,
           name:"Methi-saag",
           slug:"methi-saag",
           price:100,
           image:"methi-saag.png",
           category:"Vegetables",
           stock:47,
           rating:0,
           description:"Methi leaves are a very popular ingredient in Nepalese and Indian dishes that has a bitter taste and strong aroma."
         },
          
         {
           id:32,
           name:"Mushroom-button",
           slug:"mushroom-button",
           price:100,
           image:"mushroom-button.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Buttom mushrooms are very small sized mushrooms with smooth round caps and short stems. They have a mild flavour with a good texture that becomes more fragrant and meaty when cooked."
         },

         {
           id:33,
           name:"Mushroom-flat",
           slug:"mushroom-flat",
           price:100,
           image:"mushroom-flat.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Oyster mushrooms are pale to dark gray in colour and have a shape like that of an oyster with a soft and slightly chewy texture."
         },

         {
           id:34,
           name:"Neuro",
           slug:"neuro",
           price:100,
           image:"neuro.png",
           category:"Vegetables",
           stock:46,
           rating:0,
           description:"Fiddlehead ferns are fat free, saturated fat free, cholesterol free, sodium free, a good source of vitamin B2, copper, phosphorous and potassium. An excellent source of vitamin B3 and C and manganese."
         },

         {
           id:35,
           name:"Onion",
           slug:"onion",
           price:100,
           image:"onion.png",
           category:"Vegetables",
           stock:47,
           rating:0,
           description:"Onion is a vegetable which is almost like a staple in Nepalese food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavour and fragrance once they are fried; it is due to the sulphur compound in the vegetable."
         },

         {
           id:36,
           name:"Orange",
           slug:"orange",
           price:100,
           image:"orange.png",
           category:"Fruits",
           stock:48,
           rating:0,
           description:"Bursting with sweetness and sunshine these organic oranges will bring a smile to all faces."
         },

         {
          id:37,
          name:"Palak-saag",
          slug:"palak-saag",
          price:100,
          image:"palak-saag.png",
          category:"Vegetables",
          stock:49,
          rating:0,
          description:"With a sweet, nutty and tangent flavour, Palaks are green leafy vegetables that are succulent and spoon shaped."
         },

         {
           id:38,
           name:"Papaya",
           slug:"papaya",
           price:100,
           image:"papaya.png",
           category:"Fruits",
           stock:50,
           rating:0,
           description:"Semi ripe papayas have blend of sweet buttery consistency and sour taste. They are half green and half yellow. Ripe papaya have orange flesh and black coloured seeds at the centre."
         },

         {
           id:39,
           name:"Parwal",
           slug:"parwal",
           price:100,
           image:"parwal.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"With a yellowish green skin, Parwal is short, slightly pointed at one end and blunt on the other."
         },

         {
           id:40,
           name:"Pear",
           slug:"pear",
           price:100,
           image:"pear.png",
           category:"Fruits",
           stock:40,
           rating:0,
           description:"Sweet, crunchy, delicious, and best of all, extended season and shelf life!"
         },

         {
           id:41,
           name:"Pineapple",
           slug:"pineapple",
           price:100,
           image:"pineapple.png",
           category:"Fruits",
           stock:40,
           rating:0,
           description:"With the shape of a pine cone, the fruit is loosely fibrous and juicy with white to yellowish flesh. The edible center part is firm, leathery and sweet."
         },

         {
           id:42,
           name:"Pomogranate",
           slug:"pomogranate",
           price:100,
           image:"pomogranate.png",
           category:"Fruits",
           stock:45,
           rating:0,
           description:"Fresho pomegranates can be used to add a lot of bright colour to your fruit salad"
         },

         {
           id:43,
           name:"Potato",
           slug:"potato",
           price:100,
           image:"potato.png",
           category:"Vegetables",
           stock:45,
           rating:0,
           description:"One of the highlights of Spring – these early variety new potatoes have a nutty, earthy flavour"
         },

         {

           id:44,
           name:"Pumpkin",
           slug:"pumpkin",
           price:100,
           image:"pumpkin.png",
           category:"Vegetables",
           stock:45,
           rating:0,
           description:"These Green pumpkin have a delicate and sweet taste. Perfect to fry and use as a garnish, or simply chop and use in pasta sauces and ratatouille."
         },

         {
           id:45,
           name:"Radish",
           slug:"radish",
           price:100,
           image:"radish.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"Raddish can be enjoyed raw or cooked; they absorb all flavours when cooked but withstand their firm texture and original peppery taste."
         },

         {
           id:46,
           name:"Rayo-saag",
           slug:"rayo-saag",
           price:100,
           image:"rayo-saag.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"Green vegetable used mostly in south asia. These products are from nearby bhaktapur"
         },

         {
           id:47,
           name:"Strawberry",
           slug:"strwberry",
           price:100,
           image:"strawberry.png",
           category:"Fruits",
           stock:40,
           rating:0,
           description:"The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness."
         },

         {
           id:48,
           name:"Tarul",
           slug:"tarul",
           price:100,
           image:"tarul.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"Tarul or yam is one of the most popular and healthy vegetables consumed in Nepal. Its importance increases during the Nepali festival maghe sangkranti"
         },

         {
           id:49,
           name:"Tomato",
           slug:"tomato",
           price:100,
           image:"tomato.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"Organic tomatoes are free from harmful chemicals and toxins, plus they are also rich in antioxidants that helps fight diseases like cancer. It also a healthy source of Vitamin C and A (being rich in beta-carotene) along with niacin and folate."
         },

         {
           id:50,
           name:"Turnip",
           slug:"turnip",
           price:100,
           image:"turnip.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"The turnip or white turnip (Brassica rapa subsp. rapa) is a root vegetable commonly grown in temperate climates worldwide for its white, fleshy taproot."
         },

         {
           id:51,
           name:"Uskus",
           slug:"uskus",
           price:100,
           image:"uskus.png",
           category:"Vegetables",
           stock:40,
           rating:0,
           description:"Known wordlwide for its delicious seeds, roots, shoots, flowers, leaves and fruit, Chow chow also known as Chayote, is a roughly pear-shaped, mild flavoured and green vegetable."
         },

         {
           id:52,
           name:"Watermelon",
           slug:"watermelon",
           price:100,
           image:"watermelon.png",
           category:"Fruits",
           stock:40,
           rating:0,
           description:"With greenish black to smooth dark green surface, Fresho watermelons are globular in shape and are freshly picked for you directly from our farmers"

         }

];

   const ProductDetail=()=>
   {
     const {slug}=useParams();
     const product=products.find((p)=>p.slug===slug);
     const[rating, setRating]=useState(0);
     const[hover, setHover]=useState(0);

     if(!product)
     {
       return <div className="text-center text-red-600 mt-10">Product not found.</div>;
     }

      return(
        <div className="max-w-5xl mx-auto px-4 py-52">
          <div className="flex flex-col md:flex-row gap-10 ">
            <img src={`/assets/${product.image}`}
             alt={product.name}
             className="w-full md:w-1/2 h-126 rounded-xl shadow"
             />

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Category:<span className="text-blue-500">{product.category}</span>
                </p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2"> Rs {product.price}.00</p>
                <p className="text-sm text-green-600 mb-4">{product.stock} in stock</p>
                <div className="flex items-center gap-2 mb-6">
                  <button className="px-4 py-2 bg-black text-white rounded">Add to cart</button>
                </div>
              </div>
          </div>

          {/* Review Section */}

          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4 ">Reviews(0)</h3>
            <div className="bg-gray-100 p-6 rounded-lg mb-8 ">
              <h4 className="font-semibold mb-2">Rating Breakdown</h4>
              {[5,4,3,2,1].map((star)=>
              (
                <div key={star} className="flex items-center mb-1">
                  <span className="w-12">{star} Stars</span>
                  <div className="flex">
                    {[...Array(5)].map((_, index)=>
                    {
                      return( 
                      <span key={index} className={index < star ? "text-yellow-500" : "text-gray-300"}>
                         ★
                      </span>
                      );
                    })}
                  </div>
                </div>
              ))}
              <p className="mt-4 text-sm italic text-gray-600">
                Average Star Rating: <span className="text-yellow-500 font-bold">0.0</span> out of 5(0 vote)
              </p>
            </div>
              <h4 className="font-semibold mb-4">Be the first to review "{product.name}"</h4>
              <form className="space-y-4 bg-white p-6 rounded-lg shadow">
                <div>
                  <label className="block font-medium">Name *</label>
                  <input type="text" className="w-full border px-3 py-2 rounded mt-1" placeholder="Your name" required/>
                </div>
                <div>
                  <label className="block font-medium">Email *</label>
                  <input type="email" className="w-full border px-3 py-2 rounded mt-1" placeholder="Your email" required/>
                </div>
                <div>
                  <label className="block font-medium">Your rating *</label>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star)=>
                    (
                      <button key={star} type="button" onClick={()=>setRating(star)}
                         onMouseEnter={()=>setHover(star)}
                         onMouseLeave={()=>setHover(0)}
                         className="text-2xl text-yellow-500 focus:outline-none">
                          {star <= (hover || rating) ? "★":"☆"}
                         </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-medium">Your review *</label>
                  <textarea rows={4} className="w-full border px-3 py-2 rounded mt-1" placeholder="Write your review..." required></textarea>
                </div>
                <button type="submit" className="px-6 py-2 bg-black text-white rounded">Submit</button>
              </form>
          </div>
        </div>
      );
   };

    export default ProductDetail;