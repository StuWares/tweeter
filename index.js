import { rwClient } from "./twitterClient.js";

const tweet = async () => {
    try {
        await rwClient.v2.tweet('beep boop');

    } catch (e) {
        console.error(e);
    }
}

tweet();