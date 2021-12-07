import Header from "./Component/Header";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Substance from "./Component/Substance";
import WhatIsThis from "./Component/Connections/WhatIsThis";
import Community from "./Component/Connections/Community";
import SendMessage from "./Component/Connections/SendMessage";
import ReportBug from "./Component/Connections/ReportBug";
import Update from "./Component/Update.js"
import FAQ from "./Component/FAQ"

import {motion} from "framer-motion"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import OurWork from "./Component/OurWork";
import SendUsAMessage from "./Component/SendUsAMessage";
import Faq from "./Component/FAQ";
function App() {
    window.addEventListener('resize', function(event) {
    var footer = document.querySelector('#footer');
    footer.classList.add('sticky');
    }, true);
  return (
    <motion.div className="App" initial={{x: "-100vw"}} animate={{x: 0}} transition={{delay: 0.5}}>
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="substance" element={<Substance/>}>
                    <Route path="test" element={<ReportBug/>}/>
                </Route>
                <Route path="our-work" element={<OurWork/>}/>
                <Route path="update" element={<Update/>}/>
                <Route path="faq" element={<FAQ/>}/>
                <Route path="/send-us-a-message" element={<SendUsAMessage/>}>
                    <Route path="report-bug" element={<ReportBug/>}/>
                    <Route path="send-message" element={<SendMessage/>}/>
                    <Route path="community" element={<Community/>}/>
                    <Route path="what-is-this" element={<WhatIsThis/>}/>
                </Route>

            </Routes>

            <Footer/>
        </BrowserRouter>


    </motion.div>
  );
}

export default App;
