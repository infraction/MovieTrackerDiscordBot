import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/command";
import { addMovieDB } from "../modules/addMovieDB";
import movieEntry from "../interfaces/movieEntry";
import { movieEntryData } from "../interfaces/movieEntry";
import {doesMovieExist} from "../modules/doesMovieExist";

export const addMovie: Command = {
    data: new SlashCommandBuilder()
    .setName("addmovie")
    .setDescription("Adds movie to the database")
    .addStringOption((option) =>
        option
            .setName("title")
            .setDescription("Enter the title of the movie")
            .setRequired(true)
    )
    .addStringOption((option)=> 
        option
            .setName("date")
            .setDescription("Enter the date we watched the movie (MM/DD/YY")
            .setRequired(true)
    )
    .addNumberOption((option)=> 
        option
            .setName("chrisrating")
            .setDescription("Enter the rating Chris gave the movie")
            .setRequired(true)
    )
    .addNumberOption((option)=> 
        option
            .setName("jacierating")
            .setDescription("Enter the rating Jacie gave the movie")
            .setRequired(true)
    )
    .addStringOption((option)=> 
        option
            .setName("whopicked")
            .setDescription("Enter who picked the movie")
            .addChoices(
                {name: 'Jacie', value: 'Jacie'},
                {name: 'Chris', value: 'Chris'})
            .setRequired(true)
    ) as SlashCommandBuilder,
    run: async (interaction) => {
        await interaction.deferReply();
        const _title = interaction.options.getString("title",true);
        var _dateString = interaction.options.getString("date",true);
        var dateSplit =_dateString.split('/');
        const _date = new Date((parseInt(dateSplit[2])+2000),(parseInt(dateSplit[0])-1),parseInt(dateSplit[1]));
        const _chrisrating = interaction.options.getNumber("chrisrating",true);
        const _jacierating = interaction.options.getNumber("jacierating",true);
        const _whopicked = interaction.options.getString("whopicked",true);
        const _movie: movieEntryData = {
            title: _title,
            dateWatched: _date,
            chrisRating: _chrisrating,
            jacieRating: _jacierating,
            whoPicked: _whopicked
        };
        if(await doesMovieExist(_title))
        {
            await interaction.editReply("Movie already in database");
        }
        else{
            await addMovieDB(_movie);
            await interaction.editReply(`Added to the database`);
        }

    },
};