var secret = require('../../secret.json');
export function validateEnvs(): boolean{
    if(!secret.BOT_TOKEN)
    {
        console.log("Error missing BOT_TOKEN");
        return false;
    }
    if(!secret.Mongo_URL)
    {
        console.log("Error missing Mongo_URL");
        return false;
    }
    return true;
};