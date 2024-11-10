export default function Contact() {
    return (<div className=" bg-gradient-to-r from-yellow-700 to-yellow-950 border-2 rounded-3xl 
      md:flex justify-around mx-auto my-auto py-10 mt-2 ">
          
      <br />

{/* left side */}
<div className="text-3xl w-full md:w-1/2  border-2 rounded-2xl border-yellow-700 mx-auto ">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57758.49067727954!2d55.20358803459457!3d25.206403542135472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f421450b11cff%3A0xf654a68d2f2b513e!2sJumeirah%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1729616909710!5m2!1sen!2s" width="600" height="450" 
className="w-full p-8 sm:p-14"></iframe>
</div>
{/* right side */}
<br />
<div className="bg-white flex flex-col p-5  rounded-xl w-[80%] h-auto md:w-1/3 mx-auto border-2 border-yellow-600">
  <input className="my-2 border border-1 border-gray-300 p-3 rounded-md 
  focus:outline-1 outline-blue-600 hover:bg-blue-100" 
  type="text" placeholder="Name" />
  <input className="my-2 border border-1 border-gray-300 p-3 rounded-md
  focus:outline-1 outline-blue-600 hover:bg-blue-100" 
  type="email" placeholder="Enter Your Email Address" />

 <p><textarea className="my-2 border border-1 border-gray-300 p-3 rounded-md w-[100%]
  focus:outline-1 outline-blue-600 hover:bg-blue-100" 
   name="Comments" cols={42} rows={5} placeholder="Message" ></textarea></p> 


 <button className="bg-yellow-600 my-4 py-2 text-base sm:text-lg sm:font-bold text-white 
 rounded-md hover:bg-gradient-to-r from-yellow-700 to-yellow-950  px-2 mx-auto w-full sm:w-2/3 h-12 ">Send Message </button>
 
</div>
<br />
</div>
  

      
     
    )}