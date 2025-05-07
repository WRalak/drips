import Link from "next/link";






export default function BestSellers() {
  // Sample best seller product data
  const bestSellers = [
    {
      id: 1,
      name: "Premium Hoodie",
      description: "Heavyweight cotton blend with kangaroo pocket",
      price: "$69.99",
      image: "/hoodie.png",
      slug: "premium-hoodie",
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "Slim Fit Chinos",
      description: "Best handmade bags",
      price: "$54.99",
      image: "/bags.png",
      slug: "slim-chinos",
      badge: "TRENDING"
    },
    {
      id: 3,
      name: "Leather Chelsea Boots",
      description: "Converse",
      price: "$149.99",
      image: "/converse.jpg",
      slug: "chelsea-boots",
      badge: "BESTSELLER"
    },
    {
      id: 4,
      name: "Oversized Denim Jacket",
      description: "Vintage wash with raw edges",
      price: "$79.99",
      image: "/denim.jpg",
      slug: "denim-jacket"
    },
    {
      id: 5,
      name: "Cashmere Scarf",
      description: "Luxury lightweight cashmere",
      price: "$89.99",
      image: "/scarf.jpg",
      slug: "cashmere-scarf",
      badge: "LIMITED"
    },
    {
      id: 6,
      name: "Minimalist Watch",
      description: "Sapphire glass with mesh band",
      price: "$129.99",
      image: "/watch.jpg",
      slug: "minimalist-watch",
      badge: "TRENDING"
    },
    {
      id: 7,
      name: "Yoga Leggings",
      description: "High-waisted with side pockets",
      price: "$44.99",
      image: "/yoga.jpg",
      slug: "yoga-leggings",
      badge: "BESTSELLER"
    },
    {
      id: 8,
      name: "Canvas Backpack",
      description: "Water-resistant with laptop sleeve",
      price: "$59.99",
      image: "/back.jpg",
      slug: "canvas-backpack"
    },
    {
      id: 9,
      name: "Silk Blouse",
      description: "Wrap style with flutter sleeves",
      price: "$64.99",
      image: "/silk.jpg",
      slug: "silk-blouse",
      badge: "NEW"
    },
    {
      id: 10,
      name: "Wool Coat",
      description: "Double-breasted with belt",
      price: "$199.99",
      image: "/woolen.jpg",
      slug: "wool-coat",
      badge: "BESTSELLER"
    }
  ];

  return (
    <section className="py-12 w-full max-w-7xl ">
      <div className="text-center mb-12">
        <p className="text-[35px] uppercase  tracking-tight text-gray-500 sm:text-4xl">
          Best <span className="text-gray-900">Sellers</span>
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Shop our most loved items this season
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-4">
        {bestSellers.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.slug}`}
            className="group relative"
          >
            {/* Product badge */}
            {product.badge && (
              <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-md z-10
                ${product.badge === "BESTSELLER" ? 'bg-red-600 text-white' : 
                  product.badge === "TRENDING" ? 'bg-blue-600 text-white' :
                  product.badge === "LIMITED" ? 'bg-yellow-500 text-black' :
                  'bg-green-600 text-white'}`}>
                {product.badge}
              </span>
            )}
            
            <div className="w-full aspect-[0.86] overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
                width={260}
                height={300}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {product.description}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}