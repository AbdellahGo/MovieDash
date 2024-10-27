import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

type Props = {
    pagesList: number[]
    handleNext: () => void,
    handlePrev: () => void,
    handleClickOnPage: (pageNumbar: number) => void
}

const Paginate = ({ pagesList, handleNext, handlePrev, handleClickOnPage }: Props) => {
    const buttonpagenumberStyle = 'border-1 w-[35px] h-[35px] flex items-center justify-center rounded-full border-border-color bg-gray-900 hover:bg-black transition-colors'
    const buttonStyles = 'flex items-center gap-4 border-1 text-body-color py-12 bg-gray-900 border-border-color transition hover:bg-black hover:text-white text-20 font-medium px-20 rounded-[4px]'
    return (
        <div className="paginate md:py-[50px] py-[30px]">
            <div className="px-16 flex items-center gap-20 justify-center">
                <button className={`${buttonStyles} hover:translate-x-[-8px]`}
                    onClick={handlePrev}><IoIosArrowBack /></button>
                {pagesList.length <= 3 ? (
                    pagesList.map((page) => (
                        <button key={page} className={buttonpagenumberStyle}
                        onClick={() => handleClickOnPage(page)}>
                            {page}
                        </button>
                    ))
                ) : (
                    <>
                        <button key={pagesList[0]} className={buttonpagenumberStyle}
                        onClick={() => handleClickOnPage(pagesList[0])}>
                            {pagesList[0]}
                        </button>

                        {pagesList.length > 3 && <span className="w-[35px] h-[35px] flex items-center justify-center">...</span>}

                        <button key={pagesList[pagesList.length - 2]} className={buttonpagenumberStyle}
                        onClick={() => handleClickOnPage(pagesList[pagesList.length - 2])}>
                            {pagesList[pagesList.length - 2]}
                        </button>

                        <button key={pagesList[pagesList.length - 1]} className={buttonpagenumberStyle}
                        onClick={() => handleClickOnPage(pagesList[pagesList.length - 1])}>
                            {pagesList[pagesList.length - 1]}
                        </button>
                    </>
                )}
                <button className={`${buttonStyles} hover:translate-x-[8px]`}
                    onClick={handleNext}><IoIosArrowForward /></button>
            </div>
        </div>
    )
}

export default Paginate
