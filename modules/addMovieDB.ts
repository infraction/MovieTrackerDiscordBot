import movieEntry from "../interfaces/movieEntry";
import { movieEntryData } from "../interfaces/movieEntry";

export async function addMovieDB(_movie: movieEntryData){
    const movie = new movieEntry(_movie);
    await movie.save();
}
