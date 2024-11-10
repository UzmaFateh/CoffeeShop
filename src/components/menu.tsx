import Image from "next/image";
import menu1 from "../../public/cy-removebg-preview.png"
import menu2 from "../../public/cx-removebg-preview.png"
import menu3 from "../../public/coffe-top-removebg-preview (1).png"
import menu4 from "../../public/coffe-1-removebg-preview.png"


export default function Menu() {
    return (
<div className="w-fit">

    <div className="w-{80%} flex flex-wrap my-8 px-10  ">
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto my-3">
           <Image className="hover:rotate-45 transition-all"
           src={menu1}
           alt="picture"
           width={180} />
           <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p>
        </div>
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto  my-3"> 
            <Image className="hover:rotate-45 transition-all"
           src={menu2}
           alt="picture"
           width={180} />
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p></div>
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto  my-3"> 
            <Image className="hover:rotate-45 transition-all"
           src={menu3}
           alt="picture"
           width={180} />
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p></div>
        <div className="w-52 border-2 rounded-2xl px-5 mx-auto  my-3"> 
            <Image className="hover:rotate-45 transition-all"
           src={menu4}
           alt="picture"
           width={180} />
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Labore dolorum nulla minus esse cupiditate, 
             iure fuga iste atque soluta molestias.</p></div>
    </div>
    </div>
   );
   }