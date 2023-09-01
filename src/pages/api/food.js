// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      "restaurant_name": "Delicious Bites",
      "restaurant_address": "123 Main Street, Cityville",
      "restaurant_phone": "+1 (123) 456-7890",
      "restaurant_cuisine": ["Italian", "Mexican"],
      "menu_items": [
        {
          "item_name": "Masala Dosa",
          "item_photo":"food/1.jpg",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 60
        },
        {
          "item_name": "Medu Vada",
          "item_photo":"food/2.cms",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 70
        },
        {
          "item_name": "Biryani",
          "item_photo":"food/3.webp",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 150
        },
        {
          "item_name": "Vegetable Uttapam",
          "item_photo":"food/4.jpg",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 120
        },
        {
          "item_name": "Dosa",
          "item_photo":"food/1.jpg",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 80
        },
        {
          "item_name": "Idly",
          "item_photo":"food/5.jpg",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 60
        },
        {
          "item_name": "Samosa",
          "item_photo":"food/6.jpg",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 70
        },
        {
          "item_name": "Pongal",
          "item_photo":"food/7.cms",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 80
        },
        {
          "item_name": "Lemon Rice",
          "item_photo":"food/8.webp",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 180
        },
        {
          "item_name": "Rasam ",
          "item_photo":"food/9.webp",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 100
        },
        {
          "item_name": "Veg Biryani",
          "item_photo":"food/3.webp",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 200
        },
        {
          "item_name": "Curd Rice",
          "item_photo":"food/10.webp",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 160
        },
        {
          "item_name": "Thali",
          "item_photo":"food/item2.png",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 150
        },
        {
          "item_name": "Paruppu Payasam",
          "item_photo":"food/11.webp",
          "item_description": "South Indian, Burger, Fast Food, Street Food",
          "item_price": 220
        },
        {
          "item_name": "Tiramisu",
          "item_photo":"food/item3.png",
          "item_description": "Traditional Italian dessert with layers of ladyfingers, espresso, and mascarpone cream",
          "item_price": 140
        }
      ],
      "ratings": {
        "average_rating": 4.5,
        "total_reviews": 150
      },
      "opening_hours": {
        "monday": {
          "open": "09:00 AM",
          "close": "10:00 PM"
        },
        "tuesday": {
          "open": "09:00 AM",
          "close": "10:00 PM"
        },
        "wednesday": {
          "open": "09:00 AM",
          "close": "10:00 PM"
        },
        "thursday": {
          "open": "09:00 AM",
          "close": "10:00 PM"
        },
        "friday": {
          "open": "09:00 AM",
          "close": "11:00 PM"
        },
        "saturday": {
          "open": "10:00 AM",
          "close": "11:00 PM"
        },
        "sunday": {
          "open": "10:00 AM",
          "close": "09:00 PM"
        }
      }
    }
    

   
  ];

  res.status(200).json(data);
}
