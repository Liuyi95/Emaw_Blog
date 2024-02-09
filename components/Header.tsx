import Image from "next/image";
import Link from "next/link";
import emaww from "../public/images/emaww-tw.png";

const Header = () => {
  return (
    <div className="w-full h-20 font-titleFont sticky top-0 z-50 py-1  px-3 " style={{ backgroundColor: '#EC6865' }}>
      <div className="max-w-6xl h-full mx-auto flex justify-between items-center  py-1" >
        <Link href="/">
          <div>
            <Image width={138} height={90} src={emaww} alt="emaww-tw" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-7 text-sm mr-10">
            <li className="headerLi text-white ">Solutions</li>
            <li className="headerLi text-white">Blog</li>
            <li className="headerLi text-white">Map</li>
            <li className="headerLi text-white">About</li>
            {/* <li className="headerLi">Contact</li> */}
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          {/* <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src="img/emaww-t.png"
              alt="logo"
            />
                     
          </div> */}
          <button className=" text-white text-sm border-[2px] border-secondaryColor hover:border-bgColor px-8 py-3 font-semibold hover:text-black rounded-[26px] hover:bg-white transition-all duration-300">
            Sign In
          </button>
          <button className=" text-sm border-[1px] border-bgColor bg-white hover:border-bgColor px-10 py-3 font-semibold hover:text-white rounded-[26px] hover:bg-primaryColor transition-all duration-300">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
