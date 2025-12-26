import {
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineMoon,
  HiOutlineUser,
} from "react-icons/hi2";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🌿</span>
        <h1 className="text-lg font-semibold text-gray-800">The Wild Oasis</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/features/users/man.png"
            alt="User"
            className="h-7 w-auto rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">Kamlesh</span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <button className="cursor-pointer rounded-full p-2 text-blue-600 transition hover:bg-gray-100">
            <HiOutlineUser size={20} />
          </button>

          <button className="cursor-pointer rounded-full p-2 text-blue-600 transition hover:bg-gray-100">
            <HiOutlineMoon size={20} />
          </button>

          <button className="cursor-pointer rounded-full p-2 text-blue-600 transition hover:bg-gray-100">
            <HiOutlineArrowRightStartOnRectangle size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
