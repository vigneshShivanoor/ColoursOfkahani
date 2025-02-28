import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  backgroundColor: string;
  textColor: string;
}

interface Category {
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Look How Far You Have Come",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    price: 89,
    description: "Green base with ribbon-styled quote in yellow and white",
    backgroundColor: "bg-[#1a472a]",
    textColor: "text-yellow-100"
  },
  {
    id: 2,
    name: "You Got This",
    image: "https://images.unsplash.com/photo-1623578134934-c24fb0bf2c0d?auto=format&fit=crop&q=80",
    price: 89,
    description: "Vibrant yellow background with text bubble shape",
    backgroundColor: "bg-yellow-400",
    textColor: "text-white"
  },
  {
    id: 3,
    name: "Small Progress Is Still Progress",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80",
    price: 89,
    description: "Light yellow background with decorative cloud-like shape",
    backgroundColor: "bg-yellow-100",
    textColor: "text-orange-600"
  },
  {
    id: 4,
    name: "Keep Going",
    image: "https://images.unsplash.com/photo-1623578134934-c24fb0bf2c0d?auto=format&fit=crop&q=80",
    price: 89,
    description: "Striped yellow-and-brown background with jagged edge",
    backgroundColor: "bg-amber-100",
    textColor: "text-amber-900"
  }
];

const categories: Category[] = [
  {
    title: "Notepads",
    description: "Weekly planner layouts adorned with plant illustrations, featuring an earthy color palette and nature-friendly appeal.",
    image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80"
  },
  {
    title: "Magnetic Bookmarks",
    description: "Book-related quotes and cute illustrations in warm tones, perfect for marking your favorite pages.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
  },
  {
    title: "Glass Cans",
    description: "Eco-friendly glass cans with bamboo lids and reusable straws, featuring unique patterns and designs.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80"
  },
  {
    title: "Bookmarks & Art Prints",
    description: "Scenic illustrations and motivational quotes, perfect for both practical use and decorative purposes.",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80"
  }
];

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-[#1a472a] text-center mb-12">All Thats new</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`relative aspect-[4/3] ${product.backgroundColor} p-6 flex items-center justify-center`}>
              <h3 className={`text-xl font-handwriting ${product.textColor} text-center leading-tight`}>
                {product.name}
              </h3>
            </div>
            
            <div className="p-4 text-center">
              <p className="text-gray-600 text-sm mb-2 min-h-[40px]">
                {product.description}
              </p>
              <div className="text-[#1a472a] font-semibold">
                Rs. {product.price}
              </div>
            </div>
            
            <button className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300">
              <span className="bg-white text-[#1a472a] px-6 py-2 rounded-full font-medium hover:bg-[#1a472a] hover:text-white transition-colors duration-300">
                Add to Cart
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 mb-20">
        <button className="btn-primary text-lg">
          View All
        </button>
      </div>

      {/* Categories Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-serif text-[#1a472a] text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[16/9] relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-serif mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {category.description}
                  </p>
                  <button className="mt-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-[#1a472a] transition-colors w-fit">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;