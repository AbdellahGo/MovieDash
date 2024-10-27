import { useEffect, useState } from "react"
import { Paginate, SearchForResult, SearchResultGrid } from "../../components"
import { useGetMoviesOrSeriesBySearch } from "../../lib/react-query/queries"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const Search = () => {
    const navigate = useNavigate()
    const [showType, setShowType] = useState<'movie' | 'serie'>('movie')
    const [categories, setCategories] = useState<string>('')
    const [genresIds, setGenresIds] = useState<number[]>([])
    const [pagesList, setPagesList] = useState<number[]>([1])
    const [page, setPage] = useState<number>(1)
    const { hash } = useLocation()
    const { data: searchResult, isLoading } = useGetMoviesOrSeriesBySearch(page, hash?.split('#').join(''), showType, categories, genresIds)



    const handleSelectGenres = (value: number) => {
        if (genresIds.includes(value)) {
            setGenresIds(genresIds.filter((item) => item !== value))
        } else {
            setGenresIds((prev: number[]) => [...prev, value])
        }
        setCategories('')
        navigate(`/search`)
    }
    const handleSelectCategory = (value: string) => {
        setCategories(value)
        setGenresIds([])
        navigate(`/search`)
    }
    

    const handleClickOnPage = (pageNumbar: number) => {
        if (pageNumbar === page) {
            toast.warn('You Click On The Same Page.');
        }
        setPage(pageNumbar)
        setPagesList(prev => [...prev].slice(0, pageNumbar))
    }
    const handlePrev = () => {
        if (page === 1) {
            setPage(1)
            setPagesList([1])
            toast.warn('Sorry, No More Pages To Go.');
        } else {
            setPage(prev => prev - 1)
            setPagesList(prev => [...prev].slice(0, page - 1))
        }
    }
    const handleNext = () => {
        if (searchResult?.results?.length === 0) {
            toast.warn('Sorry, No More Pages To Go.');
        } else {
            setPage(prev => prev + 1)
            setPagesList(prev => [...prev, page + 1])
        }
    }
    useEffect(() => {
        if (hash) {
            setCategories('')
            setGenresIds([])
        }
    }, [hash])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    if (isLoading) return '...loading'
    return (
        <div>
            <SearchForResult
                setGenresIds={setGenresIds} genresIds={genresIds}
                handleSelectGenres={handleSelectGenres} categories={categories}
                handleSelectCategory={handleSelectCategory} setCategories={setCategories}
                showType={showType} setShowType={setShowType}
            />
            <SearchResultGrid searchTerm={hash?.split('#').join('')} type={showType} result={searchResult} />
            <Paginate handleClickOnPage={handleClickOnPage} pagesList={pagesList} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}

export default Search