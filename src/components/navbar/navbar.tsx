import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  const userId = 1337;

  return (
    <nav className="fixed top-0 flex h-16 w-full items-center justify-between bg-neutral-950/40 px-12 text-lg text-white shadow">
      <ul className="flex gap-4">
        <li>
          <NavLink
            className="font-mono tracking-wider text-purple-300 hover:font-bold hover:underline hover:underline-offset-2"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-mono tracking-wider text-purple-300 hover:font-bold hover:underline hover:underline-offset-2"
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-mono tracking-wider text-purple-300 hover:font-bold hover:underline hover:underline-offset-2"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-mono tracking-wider text-purple-300 hover:font-bold hover:underline hover:underline-offset-2"
            to={"/blog"}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <Link to={`/user/${userId}`} className="font-mono">
        Welcome Kian! 👋
      </Link>
    </nav>
  );
}
