import { Interaction } from "discord.js";
import { commandsList } from "../commands/_commandsList";

export const onInteraction = async (interaction: Interaction) => {
    if (interaction.isCommand()){
        for (const Command of commandsList){
            if (interaction.commandName == Command.data.name){
                await Command.run(interaction);
                break;
            }
        }
    }

};
