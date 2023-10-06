import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Menü(){
    return(
        <nav className="mt-0.5 mb-1">
            <NavLink to="/" className="py-1 block group transition-colors">
                {({isActive}) => (
                    <div className={classNames("p-3 rounded-full inline-flex item-center gap-5 group-hover:bg-[#eff3f41a]",{
                        "font-bold": isActive
                    }
                    )}>
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">  
                            <path
                                fill="#e7e9ea"
                                d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z">
                            </path>      
                        </svg>
                        <div className="pr-4 text-xl">
                            Anasayfa
                        </div>
                                            
                    </div>
                )}
             </NavLink>
        </nav>
    )
}