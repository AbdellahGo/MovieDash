import { useEffect, useState } from "react"
import { Paginate, SearchForResult, SearchResultGrid } from "../../components"
import { useGetMoviesOrSeriesBySearch } from "../../lib/react-query/queries"
import { toast } from "react-toastify"
import { useSearchParams } from "react-router-dom"

const Search = () => {
    const [pagesList, setPagesList] = useState<number[]>([1])
    const [page, setPage] = useState<number>(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const { data: searchResult, isLoading } = useGetMoviesOrSeriesBySearch(page, searchParams.get('query')!, (searchParams.get('show')! as 'movie' | 'serie'), searchParams.get('category')!, searchParams.get('genres')!)



    //? Filter
    const handleSelectGenres = (value: number) => {
        const currentGenres = searchParams.get("genres")?.split(",") || [];
        const valueStr = String(value);

        const newGenres = currentGenres.includes(valueStr)
            ? currentGenres.filter((genreId) => genreId !== valueStr)
            : [...currentGenres, valueStr];

        //? Set or remove the `genres` parameter based on whether `newGenres` has items
        if (newGenres.length > 0) {
            setSearchParams({ show: searchParams.get('show')!, genres: newGenres.join(",") });
        } else {
            searchParams.delete("genres");
            setSearchParams(searchParams);
        }
    };

    const handleSelectCategory = (value: string) => {
        setSearchParams({ show: searchParams.get('show')!, category: value })
    }


    //? Paginate
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
        setSearchParams({ ...Object.fromEntries(searchParams), show: !searchParams.get('show') ? 'movie' : searchParams.get('show')! })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [searchParams])

    return (
        <div>
            <SearchForResult
                handleSelectGenres={handleSelectGenres}
                handleSelectCategory={handleSelectCategory}
            />
            <SearchResultGrid loading={isLoading} searchTerm={searchParams.get('query')!} type={(searchParams.get('show')! as 'movie' | 'serie')} result={searchResult} />
            <Paginate handleClickOnPage={handleClickOnPage} pagesList={pagesList} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}

export default Search