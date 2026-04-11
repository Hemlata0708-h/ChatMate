import pkg from "stream-chat";
const { StreamChat } = pkg;
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY
const apiSecret = process.env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("Stream API key or Secret is missing");
}

const StreamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async function (userData) {
    try {
        await StreamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
};


export const generateStreamToken = (userId)=> {
try {
    //ensure userid is a string
    const userIdStr = userId.toString();
    return StreamClient.createToken(userIdStr);
} catch (error) {
    console.log("Error generating Stream token", error);
}
}