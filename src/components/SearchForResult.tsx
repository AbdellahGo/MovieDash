import { Button, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { afterSlideStyles, beforeSlideStyles } from "../classes";
import { RxReset } from "react-icons/rx";

const showTypeValues: { value: 'movie' | 'serie', label: string }[] = [
    {
        value: 'movie',
        label: 'Movies'
    },
    {
        value: 'serie',
        label: 'Tv Series'
    },
]
const categoriesValues = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Airing Today', value: 'airing_today' },
];
const GenresValues = [
    { value: 28, label: "Action" },
    { value: 12, label: "Adventure" },
    { value: 16, label: "Animation" },
    { value: 35, label: "Comedy" },
    { value: 80, label: "Crime" },
    { value: 99, label: "Documentary" },
    { value: 18, label: "Drama" },
    { value: 10751, label: "Family" },
    { value: 14, label: "Fantasy" },
    { value: 36, label: "History" },
    { value: 27, label: "Horror" },
    { value: 10402, label: "Music" },
    { value: 9648, label: "Mystery" },
    { value: 10749, label: "Romance" },
    { value: 878, label: "Science Fiction" },
    { value: 10770, label: "TV Movie" },
    { value: 53, label: "Thriller" },
    { value: 10752, label: "War" },
    { value: 37, label: "Western" },
    { value: 10759, label: "Action & Adventure" },
    { value: 10762, label: "Kids" },
    { value: 10763, label: "News" },
    { value: 10764, label: "Reality" },
    { value: 10765, label: "Sci-Fi & Fantasy" },
    { value: 10766, label: "Soap" },
    { value: 10767, label: "Talk" },
    { value: 10768, label: "War & Politics" }
];


type Props = {
    showType: 'movie' | 'serie'
    setShowType: Dispatch<SetStateAction<"movie" | "serie">>,
    categories: string,
    handleSelectCategory: (value: string) => void
    setCategories: Dispatch<SetStateAction<string>>,
    setGenresIds: Dispatch<SetStateAction<number[]>>,
    handleSelectGenres: (value: number) => void
    genresIds: number[]
}
const SearchForResult = ({ genresIds, setGenresIds, handleSelectGenres, setShowType, showType, categories, setCategories, handleSelectCategory }: Props) => {
    const buttonStyles = 'capitalize border-1 py-12 px-16 rounded-[8px] border-border-color bg-gray-900 hover:bg-black hover:text-white transition-colors text-body-color'
    const inputRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    const handleResetFilters = () => {
        setGenresIds([])
        setCategories('')
        setShowType('movie')
        window.location.reload()
    }
    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault()
        const inputValue = inputRef.current?.value
        if (inputValue) {
            setCategories('')
            setGenresIds([])
            navigate(`/search#${inputValue}`)
            inputRef.current!.value = ''
        }
    }
    return (
        <div className="search-for-result md:pt-[50px] pt-[30px] z-50 relative">
            <div className="xl:px-[100px] px-[16px]">
                <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-20">
                    <form className="md:w-1/2 w-full relative flex items-center justify-end" onSubmit={handleSubmitForm}>
                        <input ref={inputRef} type="text" placeholder="Search..."
                            className="w-full py-10 pl-12 pr-24 border-1 border-border-color text-18 bg-gray-900 placeholder:text-body-color rounded-[4px] text-body-color focus:outline-none focus:border-primary transition-colors" />
                        <button className="hover:text-white transition-colors absolute right-24 text-body-color text-18">
                            <FaSearch />
                        </button>
                    </form>
                    <div className="flex items-center gap-20">
                        <Menu closeOnSelect={false}>
                            <MenuButton as={Button} className={buttonStyles}>
                                {showType === 'movie' ? 'Movies' : 'Tv Series'}
                            </MenuButton>
                            <MenuList className="bg-gray-900 py-12 px-16 rounded-[8px] border-1 border-border-color">
                                <MenuOptionGroup defaultValue={showType} type='radio'>
                                    {showTypeValues.map(({ value, label }) => (
                                        <MenuItemOption value={value} key={value}
                                            onClick={() => setShowType(value)}>{label}</MenuItemOption>
                                    ))}
                                </MenuOptionGroup>
                            </MenuList>
                        </Menu>
                        <Menu closeOnSelect={false}>
                            <MenuButton as={Button} className={buttonStyles}>
                                Categories
                            </MenuButton>
                            <MenuList className="bg-gray-900 py-12 px-16 rounded-[8px] border-1 border-border-color">
                                <MenuOptionGroup defaultValue={categories} type='radio'>
                                    {categoriesValues.map(({ value, label }) => (
                                        <MenuItemOption value={value} key={value}
                                            onClick={() => handleSelectCategory(value)}>{label}</MenuItemOption>
                                    ))}
                                </MenuOptionGroup>
                            </MenuList>
                        </Menu>
                        <Menu closeOnSelect={false}>
                            <MenuButton as={Button} className={buttonStyles}>
                                Genres
                            </MenuButton>
                            <MenuList className="menu-list h-[350px] overflow-y-auto bg-gray-900 w-fit py-12 px-16 rounded-[8px] border-1 border-border-color">
                                <MenuOptionGroup type='checkbox'>
                                    {GenresValues.map(({ value, label }) => (
                                        <div key={value}>
                                            <MenuItemOption isChecked={genresIds.includes(value)} value={String(value)}  onClick={() => handleSelectGenres(value)}>
                                                {label}
                                            </MenuItemOption>
                                        </div>
                                    ))}
                                </MenuOptionGroup>
                            </MenuList>
                        </Menu>
                        <button className={` ${buttonStyles} relative  overflow-hidden hover:border-primary transition-colors ${afterSlideStyles} ${beforeSlideStyles}`}
                        onClick={handleResetFilters}>
                            <span className={`flex items-center gap-[8px] relative z-10`}>Reset <RxReset/> </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchForResult