export let emptyApiKey = false;
const { api_key } = require("./secrets");
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const server_url = "https://westus.api.cognitive.microsoft.com/";
const client = new TextAnalyticsClient(server_url, new AzureKeyCredential(api_key || defaultApiKey()));

function defaultApiKey() {
    emptyApiKey = true;
    return "EMPTY_API_KEY";
}

export async function analyzeSentiment(text) {
    const [result] = await client.analyzeSentiment([text]);
    return result;
}
