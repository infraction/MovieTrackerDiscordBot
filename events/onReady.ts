import { Client } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes} from "discord-api-types/v9";
import { commandsList } from "../commands/_commandsList";
var secret = require("../../secret.json");


export const onReady = async (BOT: Client) => {
    const rest = new REST({ version: "9" }).setToken(
      secret.BOT_TOKEN as string
    );

  const commandData = commandsList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationGuildCommands(
      BOT.user?.id || "missing id",
      secret.guildId as string
    ),
    { body: commandData }
    );
    console.log("Discord ready!");
};


