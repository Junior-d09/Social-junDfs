import React from 'react';
import { ShoppingCart, Star, MapPin } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "MacBook Pro 2023",
    price: "2500€",
    location: "Paris, 75001",
    rating: 4.8,
    reviews: 24,
    image: "/assets/images/product1.jpg",
    seller: "TechStore"
  },
  {
    id: 2,
    title: "iPhone 14 Pro", 
    price: "900€",
    location: "Lyon, 69000",
    rating: 4.9,
    reviews: 156,
    image: "/assets/images/product2.jpg",
    seller: "MobileShop"
  },
  {
    id: 3,
    title: "Caméra Canon EOS",
    price: "1200€", 
    location: "Marseille, 13000",
    rating: 4.7,
    reviews: 89,
    image: "/assets/images/product3.jpg",
    seller: "PhotoPro"
  }
];

const MarketplaceCard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Marketplace</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-xl font-bold text-blue-600 mb-2">{product.price}</p>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin size={14} className="mr-1" />
                <span>{product.location}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <Star size={14} className="mr-1 text-yellow-500" />
                  <span>{product.rating} ({product.reviews} avis)</span>
                </div>
                <span>Par {product.seller}</span>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                <ShoppingCart size={16} />
                <span>Contacter le vendeur</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceCard;