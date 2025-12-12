import Logo from "./Logo";

import Navigation from "./Navigation";
import SampleData from "./SampleData";
import Social from "./Social";

function Sidebar() {
  return (
    <aside className="w-52 flex-none bg-white">
      <Logo />
      <Navigation />
      <SampleData />
      <Social />
    </aside>
  );
}

export default Sidebar;
