import Logo from "./logo";
import Menü from "./menü";

export default function SideBar() {
    return (
        <aside className="w-[275px] min-h-screen px-2 flex flex-col">
            <Logo/>
            <Menü/>
            <div className="mt-auto">
                <div className="my-3">
                    test
                </div>
                
            </div>
        </aside>
    )
}