import CartIcon from "./CartIcon";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-primary">

    <h1 className="text-2xl font-bold text-secondary">
        Divinest
      </h1>
      
     <div className="flex gap-8 text-lg text-secondary">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium">
  <CartIcon />
</div>
    </nav>
  )
}