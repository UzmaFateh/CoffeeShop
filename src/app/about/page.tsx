import Image from "next/image";
import mypicture from "../../../public/coffe-top-removebg-preview (1).png"
export default function About() {
    return (
       
        ///////////////Light side///////////////////////////////////////
        <div className=" text-yellow-50 sm:flex items-center justify-around bg-gradient-to-r from-yellow-700 to-yellow-950 border-2 rounded-3xl mt-2">
            <div className="opacity-30  sm:w-1/3" >
              
            
                <Image className=" "
                    src={mypicture}
                    alt="machine"
                    height={700}
                    width={700}
                />
            </div>
        
            {/* right side///////////////////////////////////////////// */}

            <div className="sm:w-2/4 py-6">
            
             <h1 className="text-lg font-semibold sm:text-3xl px-6">Who We Are !</h1><br />
             <p className="text-sm sm:text-base px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corporis consequatur porro, vel magnam fugiat hic, fuga facere ipsum natus nemo possimus? Labore iste quaerat perferendis laboriosam veniam. Esse, voluptatem.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, fugiat itaque velit alias atque voluptatum minima enim sunt amet hic?
             </p>
        </div>
        </div>

    );
}