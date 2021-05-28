import Head from "next/head"
import { useState } from "react";
function Nav(props) {
  const [menuOpened, setMenuOpened] = useState(false);
  const togglerHandler = () => {
    setMenuOpened(x => !x);
  };
  return (
    <nav className="d-flex-row">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
      <div className="brand md text-bold">Fiber</div>
      <div style={menuOpened ? {transform: "translateX(0)"}: {}} className="nav-menu d-flex-row w-80">
        <ul className="d-flex-row unstyled-list">
          <li className="ml-1"><a href="/">Community</a></li>
          <li className="ml-1"><a href="/">Pricing</a></li>
          <li className="ml-1"><a href="/">Features</a></li>
        </ul>
        <div className="account-button d-flex-row">
          <div className="p-1 ml-1 text-bold sm btn bg-light">Sign In</div>
          <div className="p-1 ml-1 text-bold sm btn color-light bg-primary">Sign Up</div>
        </div>
      </div>
      <button onClick={togglerHandler} className="toggler btn bg-transparent"><img src="/Assets/Hamburger Menu.svg" alt="" /></button>
    </nav>
  );
}
export default Nav;
