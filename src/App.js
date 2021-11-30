import Header from "./Component/Header";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Substance from "./Component/Substance";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import OurWork from "./Component/OurWork";
import SendUsAMessage from "./Component/SendUsAMessage";
function App() {
    window.addEventListener('resize', function(event) {
    var footer = document.querySelector('#footer');
    footer.classList.add('sticky');
    }, true);
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="substance" element={<Substance/>}>
                    <Route path="test" element={<Substance/>}/>
                 </Route>
                <Route path="our-work" element={<OurWork/>}/>

                <Route path="send-us-a-message" element={<SendUsAMessage/>}/>

            </Routes>

            <Footer/>
        </BrowserRouter>


    </div>
  );
}

export default App;
