import Logo from "./Logo";

import Navigation from "./Navigation";
import SampleData from "./SampleData";
import Social from "./Social";

function Sidebar() {
  return (
    <div className="flex h-screen">
      <aside className="w-50 flex-none bg-white ">
        <Logo />
        <Navigation />
        <SampleData />
        <Social />
      </aside>
    </div>
  );
}

export default Sidebar;
