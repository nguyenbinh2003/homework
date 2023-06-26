import "./App.css";
import ShoeList from "./components/ShoeList/ShoeList";
import CategoriesList from "./components/ShoeList/categoriesList/CategoriesList";
import NavScrollExample from "./components/ShoeList/navbar/Navbar";
import { RiMenu2Line } from "react-icons/ri";
import Carousel from "./components/ShoeList/img/Carousel.png";
import Benefit from "./components/ShoeList/benefit/Benefit";
function App() {
  return (
    <>
      <NavScrollExample />
      <div className="App">
        <div className="categories-and-carousel">
          <section>
            <div>
              <h2>
                <RiMenu2Line />
                <span>Categories</span>
              </h2>
              <CategoriesList
                text="Computer "
                style={{ background: "#B59628", borderRadius: "5px" }}
              />
              <CategoriesList text="Hand Tools" />
              <CategoriesList text="Machine Tools" />
              <CategoriesList text="Power Tools" />
              <CategoriesList text="Storage Tools" />
              <CategoriesList text="Clothes & PPE" />
              <CategoriesList text="Electrical" />
              <CategoriesList text="Building Tools" />
              <CategoriesList text="Foods" />
              <CategoriesList text="Drinks" />
              <CategoriesList text="Drinks" />
              <CategoriesList text="Drinks" />
            </div>
          </section>
          <div className="carousel">
            <img src={Carousel} />
            <img src={Carousel} style={{ width: "280px", height: "224px" }} />
            <img src={Carousel} style={{ width: "280px", height: "224px" }} />
            <img src={Carousel} style={{ width: "280px", height: "224px" }} />
          </div>
        </div>
        <div className="benefits">
          <Benefit text="Free Shipping" p="For orders from %50" />
          <Benefit text="Free Shipping" p="For orders from %50" />
          <Benefit text="Free Shipping" p="For orders from %50" />
          <Benefit text="Free Shipping" p="For orders from %50" />
        </div>
        <nav>
          <h3>Bestselle rs</h3>
          <button>Show more...</button>
        </nav>
        <footer>
          <ShoeList name="Adidas Shoes" id="123" money="120.00" />
          <ShoeList name="Adidas Shoes" id="123" money="120.00" />
          <ShoeList name="Adidas Shoes" id="123" money="120.00" />
          <ShoeList name="Adidas Shoes" id="123" money="120.00" />
        </footer>
      </div>
    </>
  );
}

export default App;
