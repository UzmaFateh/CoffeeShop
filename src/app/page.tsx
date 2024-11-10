import Image from "next/image";
import heroImage from "../../public/cappaccino-top-removebg-preview (1).png";
import menu1 from "../../public/coffe-1-removebg-preview.png"
import menu2 from "../../public/cd-removebg-preview.png"
import menu3 from "../../public/coffe-top-removebg-preview (1).png"
import menu4 from "../../public/cz-removebg-preview.png"
import Menu from "@/components/menu";

export default function Home() {
  return (
     <div>
 
  
<div className="w-{90%} sm:w-{80%} md:w-full flex flex-col-reverse  sm:flex-row justify-between  ml-{5%} sm:ml-{11%}   mt-3 sm:mt-5 bg-gradient-to-r from-yellow-700 to-yellow-950 border-2 rounded-3xl py-2">
    <div className="w-{80%} sm:w-96 md:pl-{14%} md:pt{5%} md:pb-{20%} m-auto text-center font-medium p-5">
    <h2 className="md:text-2xl font-mono text-white ">Its time to have a fantastic taste with every sip</h2>
    <h1 className="md:text-3xl font-semibold text-red-600">Welcome To<br /> <span /><b>CoffeShop !</b></h1>
     </div>
     <Image 
      src={heroImage}
      alt="hero-section-image"
       className="w-{60%} sm:w-{36%} block md:w-1/3  md:m-auto "             />
</div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
<center>
  <h1 className="text-3xl my-10 font-semibold text-red-600">We are Famous For</h1>
  </center>
<div className="w-{80%} flex my-8 px-10">
  
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto">
           <Image className="hover:rotate-45 transition-all"
           src={menu1}
           alt="picture"
           width={180} />
           <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p>
        </div>
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto"> 
            <Image className="hover:rotate-45 transition-all"
           src={menu2}
           alt="picture"
           width={180} />
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p></div>
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto"> 
            <Image className="hover:rotate-45 transition-all"
           src={menu3}
           alt="picture"
           width={180} />
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p></div>
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto"> 
            <Image className="hover:rotate-45 transition-all"
           src={menu4}
           alt="picture"
           width={180} />
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p></div>
    </div>

    <center>
      <button className="w-44 h-12 border-2 rounded-xl my-8 
      bg-gradient-to-r from-yellow-700 to-yellow-950"><a href="menu">See More</a></button>
      </center>
      <center><h1 className="text-3xl my-10 font-semibold text-red-600">Menu</h1></center>
<Menu/>

<center><button className="w-44 h-12 border-2 rounded-xl my-8
bg-gradient-to-r from-yellow-700 to-yellow-950"><a href="menu">See More</a></button></center>

</div>

  );
}

