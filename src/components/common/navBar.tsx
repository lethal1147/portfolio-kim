import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex px-5 py-3">
      <div className="flex gap-3">
        <Image
          height={64}
          width={64}
          src="/images/code-icon-light.png"
          alt="code-icon"
        />
        <div className="glitch-wrapper">
          <p className="glitch" data-glitch="Joakim Dahlstrom">
            Joakim Dahlstrom
          </p>
        </div>
      </div>
    </nav>
  );
}
