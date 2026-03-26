type ProductProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">

      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md"
      />

      <h3 className="mt-4 text-lg font-semibold text-secondary">
        {name}
      </h3>

      <p className="text-gray-700 mt-1">
        {price}
      </p>

    </div>
  );
}