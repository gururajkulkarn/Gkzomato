import Image from "next/image";
import Link from 'next/Link'

const Menu = () => {
  return (
    <>
      <div style={{ backgroundColor: "black"}}>
   <Link href="/home">
     <Image
          src="/images/bg2.png" // Make sure the path is relative to the 'public' directory
          alt="Responsive Image"
          className="m-1"
          width={250} // Set the width of the image (adjust as needed)
          height={35} // Set the height of the image (adjust as needed)
        />    </Link>  
      </div>
    </>
  );
};

export default Menu;
