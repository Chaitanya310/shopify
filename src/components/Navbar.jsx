import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-slate-700 h-10 content-center  ">
        <nav className="flex text-white font-normal ">
          <p className="text-white ml-36">
            England's Fastest Online Shopping Destination
          </p>

          <div className="ml-auto mr-36">
            <ul className="flex gap-4">
              <li>My Account |</li>
              <li>My Wishlist |</li>
              <li>Sign In |</li>
              <li>USD</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
