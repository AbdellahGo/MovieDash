import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



type Props = {
  setToggleSideBar?: Dispatch<SetStateAction<boolean>>
  showButton: boolean,
}

const SearchBar = ({setToggleSideBar, showButton }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  const [toggleSearchBar, setToggleSearchBar] = useState(false)

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    const inputValue = inputRef.current?.value
    setToggleSearchBar(false)
    setToggleSideBar?.(false)
    if (inputValue) {
      navigate(`/search?query=${inputValue}`)
      inputRef.current!.value = ''
    }
  }
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
            <button className={`hover:text-white transition-colors ${showButton ? 'absolute left-[15px] cursor-pointer' : 'absolute right-[15px] cursor-pointer'}`}
              onClick={handleSubmitForm}>
              <FaSearch />
            </button>
            <input className={`w-full bg-gray-900 text-body-color placeholder:text-body-color`} id="search" type="text" placeholder="Search..."
              style={{ outline: 'none' }} ref={inputRef} />
          </div>
        </form>
      )}
    </div>
  )
}

export default SearchBar