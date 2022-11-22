import movieEntry from "../interfaces/movieEntry";

export async function doesMovieExist(_title: string) {
    const movie = await movieEntry.find({title: _title});
    return movie.length > 0;
}