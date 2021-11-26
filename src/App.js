import Header from "./Component/Header";
import Content from "./Component/Content";
import Footer from "./Component/Footer";

function App() {
    window.addEventListener('resize', function(event) {
    var footer = document.querySelector('#footer');
    footer.classList.add('sticky');
    }, true);
  return (
    <div className="App">

        <Header/>
        <Content/>
        <Footer/>

    </div>
  );
}

export default App;
