import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ showButton }: { showButton?: boolean }) => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false)
  return (
    <div>
      {!toggleSearchBar && showButton ? (
        <button className={`${toggleSearchBar ? 'hidden' : 'block'} absolute top-0 right-[56px] border-1 border-border-color p-12 rounded-full`}
          onClick={() => setToggleSearchBar(true)}>
          <FaSearch size={16} />
        </button>
      ) : (
        <form>
          <div className={`py-8 border-1 border-border-color bg-gray-900 flex items-center rounded-[4px] 
          ${showButton ? 'gap-[5px] right-[56px] top-[0] absolute w-[320px] pl-[44px] text-16  bg-black' : 'pl-[15px] pr-[35px] relative'}`}>
            <label htmlFor="#search" className={`hover:text-primary transition-colors ${showButton ? 'absolute left-[15px] cursor-pointer' : 'absolute right-[15px] cursor-pointer'}`} onClick={() => setToggleSearchBar(prev => !prev)}>
              <FaSearch />
            </label>
            <input className={`w-full bg-gray-900 text-body-color placeholder:text-body-color`} id="search" type="text" placeholder="Search..."
              style={{ outline: 'none' }} />
          </div>
        </form>
      )}
    </div>
  )
}

export default SearchBar