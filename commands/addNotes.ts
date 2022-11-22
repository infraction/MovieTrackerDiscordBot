import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/command";
import { getMovieDB} from "../modules/getMovieDB";
import {addMovie} from "./addMovie";
import movieEntry from "../interfaces/movieEntry";

var json = require('../../secret.json');

export const addNotes: Command = {
    data: new SlashCommandBuilder()
        .setName("addnotes")
        .setDescription("Add notes to a movie")
        .addStringOption((option) =>
            option
                .setName("movie")
                .setDescription("Enter the title of the movie")
                .setRequired(true)
        )
        .addStringOption((option)=>
            option
                .setName("note")
                .setDescription("Enter the note for the movie")
                .setRequired(true)
        ) as SlashCommandBuilder,
    run: async (interaction) => {
        await interaction.deferReply();
        var _movie = await getMovieDB(interaction.options.getString("movie",true));
        if (_movie.length == 0) {
            await interaction.editReply("Movie not found");
            return;
        }
       
        if(interaction.user == json.chrisID){
            const note = {chrisNotes: interaction.options.getString("note",true)};
            const movieName = {title: interaction.options.getString("movie",true)};
            let movie = await movieEntry.findOneAndUpdate(movieName,note);
            await interaction.editReply("Movie entry is updated with note");
        }
        else if (interaction.user == json.jacieID){
            const note = {jacieNotes: interaction.options.getString("note",true)};
            const movieName = {title: interaction.options.getString("movie",true)};
            let movie = await movieEntry.findOneAndUpdate(movieName,note);
            await interaction.editReply("Movie entry is updated with note");            
        }
    },
};
