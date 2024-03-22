import Navigation from "./Navigation";
import Hero from "./Hero";
import Projects from "./Projects";
import Photo from "./Photo";
import Tag from "./Tag";
import Footer from "./Footer";

const Layout = () => {
    return (
      <div className="w-full m-5 flex flex-col border-[1px] border-portfolio-alabaster overflow-y-scroll overflow-x-hidden no-scrollbar">
        <Navigation />
        <Hero />
        <Projects/>
        <Photo/>
        <Tag/>
        <Footer/>
      </div>
    );
}

export default Layout;