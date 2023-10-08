import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { MainMenu } from "../../../../utils/consts";

export default function Menü(){
    return(
        <nav className="mt-0.5 mb-1">
            {MainMenu.map((menu,index) => (
                <NavLink to={menu.path } className="py-1 block group">
                    {({isActive}) => (
                        <div 
                        className={classNames("p-3 rounded-full inline-flex item-center gap-5 group-hover:bg-[#eff3f41a]", {
                            "font-bold":isActive
                        })}>
                        <div className="w-[26.25] h-[26.25] relative">
                            {menu?.notification && (
                                <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex item-center justify-center text-[11px]">{menu?.notification}</span>
                            )}
                            {!isActive && menu.icon.passive}
                            {isActive && menu.icon.active}                            
                        </div>

                        <div className="pr-4 text-xl">
                            {menu.title}
                        </div>                                          
                        </div>
                    )}                    
                </NavLink>
            ))}
        </nav>
    )
}