import {Client} from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import {validateEnvs} from "./utils/ValidateEnvs";
import {connectDatabase} from "./database/connectDatabase";
import {onInteraction} from "./events/onInteractions";
import {onReady} from "./events/onReady";

var secret = require('../secret.json');


(async () => {
    if(!validateEnvs()) return;

    const BOT = new Client({intents: IntentOptions});

    BOT.on("ready", async () => await onReady(BOT));

    BOT.on(
        "interactionCreate", 
        async (interaction) => await onInteraction(interaction)
    );



    await connectDatabase();

    await BOT.login(secret.BOT_TOKEN as string);
})();