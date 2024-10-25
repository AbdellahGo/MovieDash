import { useEffect, useState } from "react";
import { useGetMovieOrSiresGenres } from "../lib/react-query/queries"

type Props = {
    genreIds: number[],
    type: 'movie' | 'serie',
    genresBoxStyles?: string,
    genreStyles?: string,

}

const Genres = ({ genreIds, type, genresBoxStyles, genreStyles }: Props) => {
    const { data: genres } = useGetMovieOrSiresGenres(type)
    const [finalGenres, setFinalGenres] = useState<string[]>([]);

    const getGenres = () => {
        if (!genres?.genres) return;
        let genresToAdd: string[] = [];

        for (let i = 0; i < genreIds.length; i++) {
            genres?.genres?.forEach((genre) => {
                if (genre.id === genreIds[i]) {
                    genresToAdd.push(genre.name);
                }
            });
        }
        setFinalGenres(genresToAdd);
    };

    useEffect(() => {
        if (genres) {
            getGenres()
        }
    }, [genres, genreIds])
    return (
        <ul className={genresBoxStyles}>
            {finalGenres.map((item: string, i) => (
                <li key={i} className={genreStyles}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default Genres