import { navlinks } from "../../constants";
import { sun, health } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconHealthRecognition } from '@tabler/icons-react';
const Icon = ({styles,name,imgUrl,isActive,disabled,handleClick}) => (
    <div className={`h-[48px] w-[48px] rounded-[10px] ${isActive && isActive === name && "bg-gray-600"} flex items-center justify-center ${!disabled && "cursor-pointer"} ${styles} hover:bg-gray-600 hover:rounded-[10px] hover:h-[48px] hover:w-[48px] transition duration-300`} onClick={handleClick}>
        {!isActive ? (
            <img src={imgUrl} alt="fund_logo" className = "h-7 w-7"/>
        )
        :
        (
            <img src={imgUrl} alt="fund_logo" className={`h-7 w-7 ${isActive !== name && "grayscale" }`}/>
        )}
    </div>
)


const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("dashboard");
  
    return (
      <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between ml-5">
        <Link to="/">
          <div className="rounded-[10px] bg-gray-800 p-2 ">
          <IconHealthRecognition stroke={2} size={40} color="#1ec070" />
          </div>
        </Link>
  
        <div className="mt-12  flex w-[65px] flex-1 flex-col items-between justify-evenly rounded-[20px] bg-gray-800 py-4">
          <div className="flex flex-col items-center justify-evenly gap-7">
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default Sidebar;