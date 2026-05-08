import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: 'Wireless Earbuds Pro',
    category: 'electronics',
    description: 'Premium quality wireless earbuds pro for everyday use.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200',
    price: 80,
    stock: 48
  },
  {
    name: '4K Action Camera',
    category: 'electronics',
    description: 'Premium quality 4k action camera for everyday use.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
    price: 296,
    stock: 26
  },
  {
    name: 'Portable Speaker',
    category: 'electronics',
    description: 'Premium quality portable speaker for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 83,
    stock: 39
  },
  {
    name: 'Mechanical Keyboard',
    category: 'electronics',
    description: 'Premium quality mechanical keyboard for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 136,
    stock: 49
  },
  {
    name: 'USB-C Hub',
    category: 'electronics',
    description: 'Premium quality usb-c hub for everyday use.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200',
    price: 58,
    stock: 26
  },
  {
    name: 'LED Desk Lamp',
    category: 'electronics',
    description: 'Premium quality led desk lamp for everyday use.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200',
    price: 33,
    stock: 27
  },
  {
    name: 'Webcam HD',
    category: 'electronics',
    description: 'Premium quality webcam hd for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 61,
    stock: 40
  },
  {
    name: 'Noise Cancelling Headset',
    category: 'electronics',
    description: 'Premium quality noise cancelling headset for everyday use.',
    image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=1200',
    price: 149,
    stock: 52
  },
  {
    name: 'Gaming Mouse',
    category: 'electronics',
    description: 'Premium quality gaming mouse for everyday use.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200',
    price: 66,
    stock: 43
  },
  {
    name: 'External SSD 1TB',
    category: 'electronics',
    description: 'Premium quality external ssd 1tb for everyday use.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
    price: 114,
    stock: 45
  },
  {
    name: 'Tablet Stand',
    category: 'electronics',
    description: 'Premium quality tablet stand for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 33,
    stock: 26
  },
  {
    name: 'Power Bank 20000mAh',
    category: 'electronics',
    description: 'Premium quality power bank 20000mah for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 46,
    stock: 27
  },
  {
    name: 'Smart Home Hub',
    category: 'electronics',
    description: 'Premium quality smart home hub for everyday use.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200',
    price: 89,
    stock: 41
  },
  {
    name: 'Wireless Charger',
    category: 'electronics',
    description: 'Premium quality wireless charger for everyday use.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200',
    price: 32,
    stock: 20
  },
  {
    name: 'Mini Projector',
    category: 'electronics',
    description: 'Premium quality mini projector for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 208,
    stock: 52
  },
  {
    name: 'VR Headset',
    category: 'electronics',
    description: 'Premium quality vr headset for everyday use.',
    image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=1200',
    price: 406,
    stock: 27
  },
  {
    name: 'Drone Camera',
    category: 'electronics',
    description: 'Premium quality drone camera for everyday use.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200',
    price: 501,
    stock: 44
  },
  {
    name: 'Smart Speaker',
    category: 'electronics',
    description: 'Premium quality smart speaker for everyday use.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
    price: 96,
    stock: 20
  },
  {
    name: 'Digital Camera',
    category: 'electronics',
    description: 'Premium quality digital camera for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 558,
    stock: 28
  },
  {
    name: 'E-reader',
    category: 'electronics',
    description: 'Premium quality e-reader for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 151,
    stock: 35
  },
  {
    name: 'Gaming Controller',
    category: 'electronics',
    description: 'Premium quality gaming controller for everyday use.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200',
    price: 68,
    stock: 42
  },
  {
    name: 'Monitor 27 inch',
    category: 'electronics',
    description: 'Premium quality monitor 27 inch for everyday use.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200',
    price: 338,
    stock: 48
  },
  {
    name: 'Laptop Stand',
    category: 'electronics',
    description: 'Premium quality laptop stand for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 44,
    stock: 36
  },
  {
    name: 'Bluetooth Tracker',
    category: 'electronics',
    description: 'Premium quality bluetooth tracker for everyday use.',
    image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=1200',
    price: 23,
    stock: 45
  },
  {
    name: 'Smart Thermostat',
    category: 'electronics',
    description: 'Premium quality smart thermostat for everyday use.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200',
    price: 139,
    stock: 57
  },
  {
    name: 'Security Camera',
    category: 'electronics',
    description: 'Premium quality security camera for everyday use.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
    price: 88,
    stock: 56
  },
  {
    name: 'Robot Vacuum',
    category: 'electronics',
    description: 'Premium quality robot vacuum for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 301,
    stock: 18
  },
  {
    name: 'Air Purifier',
    category: 'electronics',
    description: 'Premium quality air purifier for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 197,
    stock: 58
  },
  {
    name: 'Smart Light Bulb',
    category: 'electronics',
    description: 'Premium quality smart light bulb for everyday use.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200',
    price: 18,
    stock: 30
  },
  {
    name: 'Fitness Tracker',
    category: 'electronics',
    description: 'Premium quality fitness tracker for everyday use.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200',
    price: 86,
    stock: 44
  },
  {
    name: 'Portable Monitor',
    category: 'electronics',
    description: 'Premium quality portable monitor for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 219,
    stock: 45
  },
  {
    name: 'Drawing Tablet',
    category: 'electronics',
    description: 'Premium quality drawing tablet for everyday use.',
    image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=1200',
    price: 183,
    stock: 47
  },
  {
    name: 'USB Microphone',
    category: 'electronics',
    description: 'Premium quality usb microphone for everyday use.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200',
    price: 91,
    stock: 25
  },
  {
    name: 'HDMI Capture Card',
    category: 'electronics',
    description: 'Premium quality hdmi capture card for everyday use.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
    price: 89,
    stock: 45
  },
  {
    name: 'Wi-Fi Extender',
    category: 'electronics',
    description: 'Premium quality wi-fi extender for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 50,
    stock: 19
  },
  {
    name: 'Leather Wallet',
    category: 'fashion',
    description: 'Premium quality leather wallet for everyday use.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
    price: 50,
    stock: 41
  },
  {
    name: 'Classic Sunglasses',
    category: 'fashion',
    description: 'Premium quality classic sunglasses for everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200',
    price: 95,
    stock: 10
  },
  {
    name: 'Canvas Tote Bag',
    category: 'fashion',
    description: 'Premium quality canvas tote bag for everyday use.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?q=80&w=1200',
    price: 42,
    stock: 48
  },
  {
    name: 'Silk Scarf',
    category: 'fashion',
    description: 'Premium quality silk scarf for everyday use.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200',
    price: 74,
    stock: 31
  },
  {
    name: 'Leather Belt',
    category: 'fashion',
    description: 'Premium quality leather belt for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 49,
    stock: 35
  },
  {
    name: 'Wool Beanie',
    category: 'fashion',
    description: 'Premium quality wool beanie for everyday use.',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200',
    price: 25,
    stock: 53
  },
  {
    name: 'Denim Jacket',
    category: 'fashion',
    description: 'Premium quality denim jacket for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 112,
    stock: 50
  },
  {
    name: 'Running Shorts',
    category: 'fashion',
    description: 'Premium quality running shorts for everyday use.',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200',
    price: 29,
    stock: 14
  },
  {
    name: 'Sports Bra',
    category: 'fashion',
    description: 'Premium quality sports bra for everyday use.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
    price: 30,
    stock: 21
  },
  {
    name: 'Yoga Pants',
    category: 'fashion',
    description: 'Premium quality yoga pants for everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200',
    price: 65,
    stock: 34
  },
  {
    name: 'Casual T-Shirt',
    category: 'fashion',
    description: 'Premium quality casual t-shirt for everyday use.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?q=80&w=1200',
    price: 32,
    stock: 34
  },
  {
    name: 'Polo Shirt',
    category: 'fashion',
    description: 'Premium quality polo shirt for everyday use.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200',
    price: 47,
    stock: 55
  },
  {
    name: 'Chinos Slim Fit',
    category: 'fashion',
    description: 'Premium quality chinos slim fit for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 87,
    stock: 44
  },
  {
    name: 'Hoodie Pullover',
    category: 'fashion',
    description: 'Premium quality hoodie pullover for everyday use.',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200',
    price: 58,
    stock: 58
  },
  {
    name: 'Windbreaker Jacket',
    category: 'fashion',
    description: 'Premium quality windbreaker jacket for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 105,
    stock: 38
  },
  {
    name: 'Formal Dress Shirt',
    category: 'fashion',
    description: 'Premium quality formal dress shirt for everyday use.',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200',
    price: 72,
    stock: 41
  },
  {
    name: 'Summer Dress',
    category: 'fashion',
    description: 'Premium quality summer dress for everyday use.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
    price: 80,
    stock: 17
  },
  {
    name: 'Maxi Skirt',
    category: 'fashion',
    description: 'Premium quality maxi skirt for everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200',
    price: 78,
    stock: 20
  },
  {
    name: 'Crop Top',
    category: 'fashion',
    description: 'Premium quality crop top for everyday use.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?q=80&w=1200',
    price: 37,
    stock: 53
  },
  {
    name: 'High Waist Jeans',
    category: 'fashion',
    description: 'Premium quality high waist jeans for everyday use.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200',
    price: 95,
    stock: 13
  },
  {
    name: 'Ankle Boots',
    category: 'fashion',
    description: 'Premium quality ankle boots for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 122,
    stock: 36
  },
  {
    name: 'Platform Sandals',
    category: 'fashion',
    description: 'Premium quality platform sandals for everyday use.',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200',
    price: 98,
    stock: 51
  },
  {
    name: 'Chelsea Boots',
    category: 'fashion',
    description: 'Premium quality chelsea boots for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 140,
    stock: 21
  },
  {
    name: 'Slip-on Loafers',
    category: 'fashion',
    description: 'Premium quality slip-on loafers for everyday use.',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200',
    price: 87,
    stock: 55
  },
  {
    name: 'Crossbody Bag',
    category: 'fashion',
    description: 'Premium quality crossbody bag for everyday use.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
    price: 65,
    stock: 32
  },
  {
    name: 'Fanny Pack',
    category: 'fashion',
    description: 'Premium quality fanny pack for everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200',
    price: 41,
    stock: 14
  },
  {
    name: 'Baseball Cap',
    category: 'fashion',
    description: 'Premium quality baseball cap for everyday use.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?q=80&w=1200',
    price: 34,
    stock: 49
  },
  {
    name: 'Fedora Hat',
    category: 'fashion',
    description: 'Premium quality fedora hat for everyday use.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200',
    price: 60,
    stock: 49
  },
  {
    name: 'Knit Gloves',
    category: 'fashion',
    description: 'Premium quality knit gloves for everyday use.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    price: 23,
    stock: 49
  },
  {
    name: 'Wool Socks Set',
    category: 'fashion',
    description: 'Premium quality wool socks set for everyday use.',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200',
    price: 14,
    stock: 56
  },
  {
    name: 'Suspenders',
    category: 'fashion',
    description: 'Premium quality suspenders for everyday use.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200',
    price: 37,
    stock: 12
  },
  {
    name: 'Bow Tie',
    category: 'fashion',
    description: 'Premium quality bow tie for everyday use.',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200',
    price: 21,
    stock: 10
  },
  {
    name: 'Pocket Square',
    category: 'fashion',
    description: 'Premium quality pocket square for everyday use.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
    price: 20,
    stock: 54
  },
  {
    name: 'Cufflinks Set',
    category: 'fashion',
    description: 'Premium quality cufflinks set for everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200',
    price: 38,
    stock: 44
  },
  {
    name: 'Tie Clip',
    category: 'fashion',
    description: 'Premium quality tie clip for everyday use.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?q=80&w=1200',
    price: 20,
    stock: 41
  },
  {
    name: 'Scented Candle Set',
    category: 'home',
    description: 'Premium quality scented candle set for everyday use.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200',
    price: 34,
    stock: 40
  },
  {
    name: 'Throw Pillow Cover',
    category: 'home',
    description: 'Premium quality throw pillow cover for everyday use.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    price: 27,
    stock: 34
  },
  {
    name: 'Bamboo Cutting Board',
    category: 'home',
    description: 'Premium quality bamboo cutting board for everyday use.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200',
    price: 38,
    stock: 37
  },
  {
    name: 'Cast Iron Skillet',
    category: 'home',
    description: 'Premium quality cast iron skillet for everyday use.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200',
    price: 60,
    stock: 42
  },
  {
    name: 'Coffee French Press',
    category: 'home',
    description: 'Premium quality coffee french press for everyday use.',
    image: 'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=1200',
    price: 34,
    stock: 46
  },
  {
    name: 'Tea Kettle',
    category: 'home',
    description: 'Premium quality tea kettle for everyday use.',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1200',
    price: 53,
    stock: 25
  },
  {
    name: 'Ceramic Mug Set',
    category: 'home',
    description: 'Premium quality ceramic mug set for everyday use.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200',
    price: 54,
    stock: 18
  },
  {
    name: 'Wooden Serving Board',
    category: 'home',
    description: 'Premium quality wooden serving board for everyday use.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200',
    price: 61,
    stock: 22
  },
  {
    name: 'Linen Table Runner',
    category: 'home',
    description: 'Premium quality linen table runner for everyday use.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200',
    price: 27,
    stock: 21
  },
  {
    name: 'Wall Clock Minimalist',
    category: 'home',
    description: 'Premium quality wall clock minimalist for everyday use.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    price: 42,
    stock: 46
  },
  {
    name: 'Photo Frame Set',
    category: 'home',
    description: 'Premium quality photo frame set for everyday use.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200',
    price: 37,
    stock: 51
  },
  {
    name: 'Succulents Planter',
    category: 'home',
    description: 'Premium quality succulents planter for everyday use.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200',
    price: 30,
    stock: 27
  },
  {
    name: 'Aromatherapy Diffuser',
    category: 'home',
    description: 'Premium quality aromatherapy diffuser for everyday use.',
    image: 'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=1200',
    price: 62,
    stock: 35
  },
  {
    name: 'Shower Curtain',
    category: 'home',
    description: 'Premium quality shower curtain for everyday use.',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1200',
    price: 30,
    stock: 28
  },
  {
    name: 'Bath Towel Set',
    category: 'home',
    description: 'Premium quality bath towel set for everyday use.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200',
    price: 59,
    stock: 59
  },
  {
    name: 'Memory Foam Pillow',
    category: 'home',
    description: 'Premium quality memory foam pillow for everyday use.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200',
    price: 64,
    stock: 23
  },
  {
    name: 'Weighted Blanket',
    category: 'home',
    description: 'Premium quality weighted blanket for everyday use.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200',
    price: 97,
    stock: 49
  },
  {
    name: 'Silk Pillowcase',
    category: 'home',
    description: 'Premium quality silk pillowcase for everyday use.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    price: 45,
    stock: 21
  },
  {
    name: 'Storage Ottoman',
    category: 'home',
    description: 'Premium quality storage ottoman for everyday use.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200',
    price: 103,
    stock: 33
  },
  {
    name: 'Coat Rack',
    category: 'home',
    description: 'Premium quality coat rack for everyday use.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200',
    price: 80,
    stock: 12
  },
  {
    name: 'Bookshelf Corner',
    category: 'home',
    description: 'Premium quality bookshelf corner for everyday use.',
    image: 'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=1200',
    price: 135,
    stock: 34
  },
  {
    name: 'Desk Organizer',
    category: 'home',
    description: 'Premium quality desk organizer for everyday use.',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1200',
    price: 31,
    stock: 32
  },
  {
    name: 'Cable Management Box',
    category: 'home',
    description: 'Premium quality cable management box for everyday use.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200',
    price: 21,
    stock: 39
  },
  {
    name: 'Portable Clothes Rack',
    category: 'home',
    description: 'Premium quality portable clothes rack for everyday use.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200',
    price: 72,
    stock: 45
  },
  {
    name: 'Laundry Hamper',
    category: 'home',
    description: 'Premium quality laundry hamper for everyday use.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200',
    price: 41,
    stock: 57
  },
  {
    name: 'Trash Can Sensor',
    category: 'home',
    description: 'Premium quality trash can sensor for everyday use.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    price: 47,
    stock: 23
  },
  {
    name: 'Dish Drying Rack',
    category: 'home',
    description: 'Premium quality dish drying rack for everyday use.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200',
    price: 36,
    stock: 40
  },
  {
    name: 'Spice Rack',
    category: 'home',
    description: 'Premium quality spice rack for everyday use.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200',
    price: 35,
    stock: 49
  },
  {
    name: 'Herb Garden Kit',
    category: 'home',
    description: 'Premium quality herb garden kit for everyday use.',
    image: 'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=1200',
    price: 36,
    stock: 32
  },
  {
    name: 'Air Plant Terrarium',
    category: 'home',
    description: 'Premium quality air plant terrarium for everyday use.',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1200',
    price: 45,
    stock: 37
  },
  {
    name: 'Macrame Wall Hanging',
    category: 'home',
    description: 'Premium quality macrame wall hanging for everyday use.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200',
    price: 46,
    stock: 23
  },
  {
    name: 'Tapestry Boho',
    category: 'home',
    description: 'Premium quality tapestry boho for everyday use.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200',
    price: 50,
    stock: 11
  },
  {
    name: 'String Lights',
    category: 'home',
    description: 'Premium quality string lights for everyday use.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200',
    price: 32,
    stock: 41
  },
  {
    name: 'Blackout Curtains',
    category: 'home',
    description: 'Premium quality blackout curtains for everyday use.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    price: 87,
    stock: 46
  },
  {
    name: 'Rug 5x7 Geometric',
    category: 'home',
    description: 'Premium quality rug 5x7 geometric for everyday use.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200',
    price: 157,
    stock: 29
  },
  {
    name: 'Yoga Mat Premium',
    category: 'sports',
    description: 'Premium quality yoga mat premium for everyday use.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200',
    price: 74,
    stock: 52
  },
  {
    name: 'Resistance Bands Set',
    category: 'sports',
    description: 'Premium quality resistance bands set for everyday use.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200',
    price: 35,
    stock: 45
  },
  {
    name: 'Foam Roller',
    category: 'sports',
    description: 'Premium quality foam roller for everyday use.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200',
    price: 36,
    stock: 50
  },
  {
    name: 'Jump Rope Speed',
    category: 'sports',
    description: 'Premium quality jump rope speed for everyday use.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200',
    price: 9,
    stock: 38
  },
  {
    name: 'Pull Up Bar',
    category: 'sports',
    description: 'Premium quality pull up bar for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 37,
    stock: 21
  },
  {
    name: 'Ab Wheel Roller',
    category: 'sports',
    description: 'Premium quality ab wheel roller for everyday use.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200',
    price: 26,
    stock: 47
  },
  {
    name: 'Kettlebell 16kg',
    category: 'sports',
    description: 'Premium quality kettlebell 16kg for everyday use.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200',
    price: 58,
    stock: 31
  },
  {
    name: 'Dumbbell Pair 10lb',
    category: 'sports',
    description: 'Premium quality dumbbell pair 10lb for everyday use.',
    image: 'https://images.unsplash.com/photo-1543794663-c2c59b2e0a39?q=80&w=1200',
    price: 29,
    stock: 45
  },
  {
    name: 'Exercise Bike',
    category: 'sports',
    description: 'Premium quality exercise bike for everyday use.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200',
    price: 291,
    stock: 20
  },
  {
    name: 'Running Belt',
    category: 'sports',
    description: 'Premium quality running belt for everyday use.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200',
    price: 35,
    stock: 31
  },
  {
    name: 'Hydration Vest',
    category: 'sports',
    description: 'Premium quality hydration vest for everyday use.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200',
    price: 79,
    stock: 10
  },
  {
    name: 'Compression Socks',
    category: 'sports',
    description: 'Premium quality compression socks for everyday use.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200',
    price: 18,
    stock: 18
  },
  {
    name: 'Sports Water Bottle',
    category: 'sports',
    description: 'Premium quality sports water bottle for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 40,
    stock: 45
  },
  {
    name: 'Gym Gloves',
    category: 'sports',
    description: 'Premium quality gym gloves for everyday use.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200',
    price: 29,
    stock: 22
  },
  {
    name: 'Weightlifting Belt',
    category: 'sports',
    description: 'Premium quality weightlifting belt for everyday use.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200',
    price: 61,
    stock: 24
  },
  {
    name: 'Knee Sleeves',
    category: 'sports',
    description: 'Premium quality knee sleeves for everyday use.',
    image: 'https://images.unsplash.com/photo-1543794663-c2c59b2e0a39?q=80&w=1200',
    price: 43,
    stock: 42
  },
  {
    name: 'Ankle Weights',
    category: 'sports',
    description: 'Premium quality ankle weights for everyday use.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200',
    price: 24,
    stock: 21
  },
  {
    name: 'Battle Rope',
    category: 'sports',
    description: 'Premium quality battle rope for everyday use.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200',
    price: 88,
    stock: 42
  },
  {
    name: 'Punching Bag',
    category: 'sports',
    description: 'Premium quality punching bag for everyday use.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200',
    price: 156,
    stock: 12
  },
  {
    name: 'Boxing Gloves',
    category: 'sports',
    description: 'Premium quality boxing gloves for everyday use.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200',
    price: 61,
    stock: 39
  },
  {
    name: 'Swim Goggles',
    category: 'sports',
    description: 'Premium quality swim goggles for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 17,
    stock: 55
  },
  {
    name: 'Swim Cap Silicone',
    category: 'sports',
    description: 'Premium quality swim cap silicone for everyday use.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200',
    price: 10,
    stock: 32
  },
  {
    name: 'Skipping Mat',
    category: 'sports',
    description: 'Premium quality skipping mat for everyday use.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200',
    price: 38,
    stock: 49
  },
  {
    name: 'Balance Board',
    category: 'sports',
    description: 'Premium quality balance board for everyday use.',
    image: 'https://images.unsplash.com/photo-1543794663-c2c59b2e0a39?q=80&w=1200',
    price: 56,
    stock: 24
  },
  {
    name: 'TRX Suspension',
    category: 'sports',
    description: 'Premium quality trx suspension for everyday use.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200',
    price: 95,
    stock: 51
  },
  {
    name: 'Agility Ladder',
    category: 'sports',
    description: 'Premium quality agility ladder for everyday use.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200',
    price: 33,
    stock: 59
  },
  {
    name: 'Speed Chute',
    category: 'sports',
    description: 'Premium quality speed chute for everyday use.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200',
    price: 25,
    stock: 50
  },
  {
    name: 'Medicine Ball 8lb',
    category: 'sports',
    description: 'Premium quality medicine ball 8lb for everyday use.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200',
    price: 52,
    stock: 19
  },
  {
    name: 'Sandbag Workout',
    category: 'sports',
    description: 'Premium quality sandbag workout for everyday use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    price: 66,
    stock: 11
  },
  {
    name: 'Pull Up Bands',
    category: 'sports',
    description: 'Premium quality pull up bands for everyday use.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200',
    price: 21,
    stock: 39
  },
  {
    name: 'Ice Roller Face',
    category: 'sports',
    description: 'Premium quality ice roller face for everyday use.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200',
    price: 22,
    stock: 16
  },
  {
    name: 'Massage Gun',
    category: 'sports',
    description: 'Premium quality massage gun for everyday use.',
    image: 'https://images.unsplash.com/photo-1543794663-c2c59b2e0a39?q=80&w=1200',
    price: 115,
    stock: 24
  },
  {
    name: 'Hot Cold Pack',
    category: 'sports',
    description: 'Premium quality hot cold pack for everyday use.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200',
    price: 22,
    stock: 39
  },
  {
    name: 'Tennis Balls 3pk',
    category: 'sports',
    description: 'Premium quality tennis balls 3pk for everyday use.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200',
    price: 14,
    stock: 22
  },
  {
    name: 'Badminton Set',
    category: 'sports',
    description: 'Premium quality badminton set for everyday use.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200',
    price: 35,
    stock: 38
  },
  {
    name: 'Vitamin C Serum',
    category: 'beauty',
    description: 'Premium quality vitamin c serum for everyday use.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200',
    price: 38,
    stock: 12
  },
  {
    name: 'Hyaluronic Acid Moisturizer',
    category: 'beauty',
    description: 'Premium quality hyaluronic acid moisturizer for everyday use.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    price: 25,
    stock: 16
  },
  {
    name: 'Retinol Night Cream',
    category: 'beauty',
    description: 'Premium quality retinol night cream for everyday use.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200',
    price: 47,
    stock: 21
  },
  {
    name: 'SPF 50 Sunscreen',
    category: 'beauty',
    description: 'Premium quality spf 50 sunscreen for everyday use.',
    image: 'https://images.unsplash.com/photo-1583241475880-083f84372725?q=80&w=1200',
    price: 16,
    stock: 20
  },
  {
    name: 'Micellar Water',
    category: 'beauty',
    description: 'Premium quality micellar water for everyday use.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1200',
    price: 28,
    stock: 51
  },
  {
    name: 'Sheet Mask Set 10pk',
    category: 'beauty',
    description: 'Premium quality sheet mask set 10pk for everyday use.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200',
    price: 29,
    stock: 23
  },
  {
    name: 'Exfoliating Scrub',
    category: 'beauty',
    description: 'Premium quality exfoliating scrub for everyday use.',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b3cf?q=80&w=1200',
    price: 23,
    stock: 26
  },
  {
    name: 'Rose Water Toner',
    category: 'beauty',
    description: 'Premium quality rose water toner for everyday use.',
    image: 'https://images.unsplash.com/photo-1631214524020-3c69f4aa9b9e?q=80&w=1200',
    price: 26,
    stock: 18
  },
  {
    name: 'Eye Cream Anti-aging',
    category: 'beauty',
    description: 'Premium quality eye cream anti-aging for everyday use.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200',
    price: 45,
    stock: 52
  },
  {
    name: 'Lip Balm SPF Set',
    category: 'beauty',
    description: 'Premium quality lip balm spf set for everyday use.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    price: 9,
    stock: 19
  },
  {
    name: 'Foundation Brush',
    category: 'beauty',
    description: 'Premium quality foundation brush for everyday use.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200',
    price: 22,
    stock: 29
  },
  {
    name: 'Contour Palette',
    category: 'beauty',
    description: 'Premium quality contour palette for everyday use.',
    image: 'https://images.unsplash.com/photo-1583241475880-083f84372725?q=80&w=1200',
    price: 29,
    stock: 10
  },
  {
    name: 'Mascara Volumizing',
    category: 'beauty',
    description: 'Premium quality mascara volumizing for everyday use.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1200',
    price: 16,
    stock: 31
  },
  {
    name: 'Eyeliner Pen',
    category: 'beauty',
    description: 'Premium quality eyeliner pen for everyday use.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200',
    price: 21,
    stock: 58
  },
  {
    name: 'Lipstick Matte',
    category: 'beauty',
    description: 'Premium quality lipstick matte for everyday use.',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b3cf?q=80&w=1200',
    price: 31,
    stock: 39
  },
  {
    name: 'Highlighter Powder',
    category: 'beauty',
    description: 'Premium quality highlighter powder for everyday use.',
    image: 'https://images.unsplash.com/photo-1631214524020-3c69f4aa9b9e?q=80&w=1200',
    price: 32,
    stock: 21
  },
  {
    name: 'Setting Spray',
    category: 'beauty',
    description: 'Premium quality setting spray for everyday use.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200',
    price: 25,
    stock: 16
  },
  {
    name: 'Makeup Remover Wipes',
    category: 'beauty',
    description: 'Premium quality makeup remover wipes for everyday use.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    price: 12,
    stock: 56
  },
  {
    name: 'Eyebrow Pencil',
    category: 'beauty',
    description: 'Premium quality eyebrow pencil for everyday use.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200',
    price: 14,
    stock: 45
  },
  {
    name: 'Blush Palette',
    category: 'beauty',
    description: 'Premium quality blush palette for everyday use.',
    image: 'https://images.unsplash.com/photo-1583241475880-083f84372725?q=80&w=1200',
    price: 34,
    stock: 57
  },
  {
    name: 'Hairdryer Ionic',
    category: 'beauty',
    description: 'Premium quality hairdryer ionic for everyday use.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1200',
    price: 96,
    stock: 43
  },
  {
    name: 'Curling Wand',
    category: 'beauty',
    description: 'Premium quality curling wand for everyday use.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200',
    price: 66,
    stock: 37
  },
  {
    name: 'Hair Straightener',
    category: 'beauty',
    description: 'Premium quality hair straightener for everyday use.',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b3cf?q=80&w=1200',
    price: 81,
    stock: 52
  },
  {
    name: 'Boar Bristle Brush',
    category: 'beauty',
    description: 'Premium quality boar bristle brush for everyday use.',
    image: 'https://images.unsplash.com/photo-1631214524020-3c69f4aa9b9e?q=80&w=1200',
    price: 42,
    stock: 39
  },
  {
    name: 'Wooden Comb Set',
    category: 'beauty',
    description: 'Premium quality wooden comb set for everyday use.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200',
    price: 22,
    stock: 43
  },
  {
    name: 'Hair Oil Argan',
    category: 'beauty',
    description: 'Premium quality hair oil argan for everyday use.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    price: 25,
    stock: 46
  },
  {
    name: 'Dry Shampoo',
    category: 'beauty',
    description: 'Premium quality dry shampoo for everyday use.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200',
    price: 14,
    stock: 35
  },
  {
    name: 'Scalp Massager',
    category: 'beauty',
    description: 'Premium quality scalp massager for everyday use.',
    image: 'https://images.unsplash.com/photo-1583241475880-083f84372725?q=80&w=1200',
    price: 18,
    stock: 46
  },
  {
    name: 'Hair Mask Deep',
    category: 'beauty',
    description: 'Premium quality hair mask deep for everyday use.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1200',
    price: 25,
    stock: 41
  },
  {
    name: 'Heat Protectant Spray',
    category: 'beauty',
    description: 'Premium quality heat protectant spray for everyday use.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200',
    price: 12,
    stock: 44
  },
  {
    name: 'Perfume Roll-on',
    category: 'beauty',
    description: 'Premium quality perfume roll-on for everyday use.',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b3cf?q=80&w=1200',
    price: 36,
    stock: 45
  },
  {
    name: 'Body Lotion Shea',
    category: 'beauty',
    description: 'Premium quality body lotion shea for everyday use.',
    image: 'https://images.unsplash.com/photo-1631214524020-3c69f4aa9b9e?q=80&w=1200',
    price: 23,
    stock: 52
  },
  {
    name: 'Bath Salts Set',
    category: 'beauty',
    description: 'Premium quality bath salts set for everyday use.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200',
    price: 30,
    stock: 29
  },
  {
    name: 'Facial Steamer',
    category: 'beauty',
    description: 'Premium quality facial steamer for everyday use.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    price: 49,
    stock: 56
  },
  {
    name: 'Jade Roller Set',
    category: 'beauty',
    description: 'Premium quality jade roller set for everyday use.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200',
    price: 37,
    stock: 40
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log(`Products Imported: ${products.length}`);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();