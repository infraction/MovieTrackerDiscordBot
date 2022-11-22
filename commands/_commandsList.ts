import {Command} from "../interfaces/command";
import {addMovie} from "./addMovie";
import {findMovie} from "./findMovie";
import { addNotes } from "./addNotes";

export const commandsList: Command[] = [addMovie,findMovie,addNotes];
