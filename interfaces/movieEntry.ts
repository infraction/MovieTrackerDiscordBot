import {Document, model, Schema} from "mongoose";

export interface movieEntry extends Document{
    title: {
        type: string,
        required: true,
        lowercase: true,
        unique: true
    };
    dateWatched: Date;
    chrisRating: number;
    jacieRating: number;
    whoPicked: string;
    jacieNotes?: string;
    chrisNotes?: string;
    print(): string;
}

export interface movieEntryData{
    title: string;
    dateWatched: Date;
    chrisRating: number;
    jacieRating: number;
    whoPicked: string;
    jacieNotes?: string;
    chrisNotes?: string;
}

export const movieEntrySchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    dateWatched: Date, 
    chrisRating: Number, 
    jacieRating: Number, 
    whoPicked: String, 
    jacieNotes: String, 
    chrisNotes: String,
    },
    {
        methods:{
            print(){
                var printString: String = `Title: ${this.title}\n Date Watched: ${this.dateWatched?.toLocaleDateString('en-us')}\n Chris Rating: ${this.chrisRating}\n Jacie Rating: ${this.jacieRating}\n Who Picked: ${this.whoPicked}`;
                if(this.jacieNotes)
                    printString += `\nJacie Notes: ${this.jacieNotes}`;
                if(this.chrisNotes)
                    printString += `\nChris Notes: ${this.chrisNotes}`;
                return printString;
            }
        }
    }
);

export default model<movieEntry>("movieEntry", movieEntrySchema);
