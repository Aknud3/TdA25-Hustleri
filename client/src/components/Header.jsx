import logo from "../assets/logo.svg"
import PlayButton from "./PlayButton"

function Header() {
  return (
    <>
        <div className="flex justify-between bg-mainBlue items-center h-40 px-20">
            <img className="h-[5rem] select-none" src={logo} alt="" />
            <PlayButton />
        </div>
    </>
  )
}

export default Header