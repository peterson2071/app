import { Navbar, Brand, Cta } from "./components";
import { Header, Footer, Features, GPT, Blog, Possibility, TextGPT, ImgGPT } from "./containers";
import './App.css';



const App = () => {
        return (
            <div className="app">
               <div className="gradient__bg">
                <Navbar />
                <Header />
               </div>
               <Brand />
               <GPT />
               <Features />
               <Possibility />
               <Cta />
               <Blog />
               <ImgGPT />
               <TextGPT />
               <Footer />
            </div>
        );
    }

export default App