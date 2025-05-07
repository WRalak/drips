import Link from "next/link";







export default function LatestCollections() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Urban Jacket",
      description: "Women Round Neck Cotton Top",
      price: "$89.99",
      image: "/0.png",
      slug: "urban-jacket"
    },
    {
      id: 2,
      name: "Classic Tee",
      description:"Men Round Neck Pure Cotton T-shirt",
      price: "$29.99",
      image: "/1.png",
      slug: "classic-tee"
    },
    {
      id: 3,
      name: "Slim Jeans",
      description: "Men Round Neck Pure Cotton T-shirt",
      price: "$59.99",
      image: "/2.png",
      slug: "slim-jeans"
    },
    {
      id: 4,
      name: "Canvas Sneakers",
      description: "Men Round Neck Pure Cotton T-shirt",
      price: "$49.99",
      image: "/3.png",
      slug: "canvas-sneakers"
    },
    {
      id: 5,
      name: "Wool Beanie",
      description: "Women Round Neck Cotton Top",
      price: "$24.99",
      image: "/4.png",
      slug: "wool-beanie"
    },
    {
      id: 6,
      name: "Silk Scarf",
      description: "Men Printed Plain Cotton Shirt",
      price: "$34.99",
      image: "/5.png",
      slug: "silk-scarf"
    },
    {
      id: 7,
      name: "Leather Belt",
      description: "Men Round Neck Pure Cotton T-shirt",
      price: "$39.99",
      image: "/6.png",
      slug: "leather-belt"
    },
    {
      id: 8,
      name: "Aviator Sunglasses",
      description: "Men Round Neck Pure Cotton T-shirt",
      price: "$79.99",
      image: "/7.png",
      slug: "aviator-sunglasses"
    },
    {
      id: 9,
      name: "Cashmere Sweater",
      description: "Oversized knit in heather grey",
      price: "$129.99",
      image: "/8.png",
      slug: "cashmere-sweater"
    },
    {
      id: 10,
      name: "Canvas Tote",
      description: "Women Round Neck Cotton Top",
      price: "$19.99",
      image: "/9.png",
      slug: "canvas-tote"
    }
  ];

  return (
    <section className="py-12  w-full">
      <div className="text-center mb-12">
        <p className="text-[35px] uppercase  tracking-tight text-gray-500 sm:text-4xl">
          Latest <span className="text-gray-900">Collections</span>
        </p>
        <p className="mt-4 text-sm text-gray-700">
          Discover our newest arrivals for the season
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.slug}`}
            className="group"
          >
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
             
              <p className="mt-1 text-[13px] text-gray-500">
                {product.description}
              </p>
              <p className="mt-1 text-[13px] font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}