import Logo from "./logo";
import Menü from "./menü";

export default function SideBar() {
    return (
        <aside className="w-[275px] min-h-screen px-2">
            <Logo/>
            <Menü/>
        </aside>
    )
}