import Navbar from "./components/Navbar";
import { Hero } from "./components/main_page/Hero";
import Cards from "./components/main_page/Cards";

function App() {
  return (
    <div className="bg-black bg-opacity-75 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-blend-darken">
      <Navbar/>
      <Hero/>
      <Cards/>
    </div>
  );
}

export default App;
