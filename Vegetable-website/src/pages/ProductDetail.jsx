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

 