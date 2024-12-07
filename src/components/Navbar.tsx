import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Glodev
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-teal-400">HOME</Link>
            <Link href="/services" className="text-white hover:text-teal-400">SERVICES</Link>
            <Link href="/works" className="text-white hover:text-teal-400">WORKS</Link>
            <Link href="/about" className="text-white hover:text-teal-400">ABOUT</Link>
            <Link href="/blog" className="text-white hover:text-teal-400">BLOG</Link>
            <Link href="/contact" className="border border-teal-400 text-teal-400 px-4 py-2 hover:bg-teal-400 hover:text-black transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
