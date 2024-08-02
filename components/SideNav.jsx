import Link from "next/link";

function SideNav({ isOpen, toggleNav }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[#160632] z-10 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end">
        <button className="p-2 text-[55px]" onClick={toggleNav}>
          &times;
        </button>
      </div>
      <nav className="py-10">
        <ul className="text-[28px] text-center">
          <Link href="/">
            <li className="p-4">Home</li>
          </Link>
          <Link href="/products">
            <li className="p-4">Store</li>
          </Link>
          <Link href="/">
            <li className="p-4">Style</li>
          </Link>

          <Link href="/">
            <li className="p-4">About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
