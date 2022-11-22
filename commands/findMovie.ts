import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/command";
import { getMovieDB} from "../modules/getMovieDB";
import movieEntry from "../interfaces/movieEntry";

export const findMovie: Command = {
    data: new SlashCommandBuilder()
        .setName("findmovie")
        .setDescription("Finds a movie in the database")
        .addStringOption((option) =>
            option
                .setName("title")
                .setDescription("Enter the title of the movie")
                .setRequired(true)
        ) as SlashCommandBuilder,
    run: async (interaction) => {
        await interaction.deferReply();
        const _title = interaction.options.getString("title",true);
        const _movie = await getMovieDB(_title);
        if(_movie.length === 0){
            await interaction.editReply(`Could not find movie`);
        }
        else{
            await interaction.editReply(`Found movie: \n` + _movie[0].print());
        }
    }
}

