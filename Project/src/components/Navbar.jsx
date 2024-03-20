import "../components/css/Navbar.css";
import { Products } from "./Products";
export const Navbar = () => {
  return (
    <>
      <main>
        <nav>
          <div className="logo">Logo</div>
          <div className="nav-items">
            <ul>
              <li>
                {" "}
                <a href={<Products />}></a>All Products
              </li>
              <li>Specfic Products</li>
            </ul>
          </div>
        </nav>
      </main>
    </>
  );
};
