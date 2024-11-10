import Image from "next/image";
import logo from "../../public/coffe-logo-removebg-preview.png"
import Link from "next/link";


const Navbar = () => {
    return (
<div>
        <div
            className="flex flex-col justify-between  md:flex-row  :my-4 md:my-4 lg:-mb-6 px-4   bg-white mx-auto w-fit"
            style={{
                boxShadow: " 1px,1px 20px 20px blue)",

            }}>
            <div className="text-center text-5xl -mt-6  py-2">
                <div className="flex border-b-2 border-black sm:border-0 md:border-0 lg-border-0 xl:border-0 py-2 ">
                    <Image className="mr-10"
                        src={logo}
                        alt="machine"
                        height={100}
                        width={100} />
                    <h4 className="-ml-12  mt-9 text-3xl sm:text-4xl pt-1">CoffeeShope</h4>
                    
                </div>

            </div>
            <div>
              <ul className="flex  text-base md:text-lg my-2 mx-auto  py-6">
                <li className="px-4 mx-auto"><Link href="/">Home</Link></li>
                <li className="px-4 mx-auto"><Link href="/menu">Menu</Link></li>
                <li className="px-4 mx-auto"><Link href="/about">About</Link></li>
                <li className="px-4 mx-auto"><Link href="/contact">Contact</Link></li>
               </ul>
            </div>
            
        </div>
     
        </div>

    );
}
export default Navbar