export default function Footer() {
  return (
    <div>
      <div >
       
        <div className="flex flex-col justify-between  md:flex-row lg:flex-row py-10 px-20 
   bg-white to-yellow-950 sm:text-sm"  >
          <div className=" text-left   flex flex-col -ml-6 ">
            <h1 className="font-bold">Contact us:</h1>
            <p>Email:uzmaKhan876@gmail.com</p>
            <p>Phone No:01234567</p>
            <p>United Arab Emarite</p>
          </div><br /><br />
          <div className="flex flex-col -mt-14 -ml-6">
            <ul  className="flex">
              <ul> 
              <li className="flex "><h1 className="font-bold mt-12">Follow us:</h1></li>
              <li className="text-yellow-700"><a href="">Facebook</a></li>
              <li className="text-yellow-700"><a href="">instagram</a></li>
              <li className="text-yellow-700"><a href="">linkedInn</a></li>
              </ul>
            </ul>

          </div>

        </div>

      </div>
      
      <center><button className="font-semibold"><a href="#">Back To Top</a></button></center>
      <br />
      <h1 className="sm:pl-0 md:pl-40 lg:pl-80 
 p-4 pl-8
 bg-gradient-to-r from-yellow-700 to-yellow-950 
 text-white border-2 rounded-2xl">Copyright 2022 Portfolio All Rights Reserved  |  Created By : Uzma Khan</h1>
    </div>
  );

}
