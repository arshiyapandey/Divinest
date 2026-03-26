export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-primary">

    <h1 className="text-2xl font-bold text-secondary">
        Divinest
      </h1>

     <div className="flex gap-8 text-lg text-secondary">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </div>

    </nav>
  )
}