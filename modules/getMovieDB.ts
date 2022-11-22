import movieEntry from "../interfaces/movieEntry";

export async function getMovieDB(_title: string) {
    const movie = await movieEntry.find({title: _title});
    return movie;
}

