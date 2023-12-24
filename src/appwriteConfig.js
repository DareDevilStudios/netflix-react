import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65740ecc2d66b845a5bf');

export const account = new Account(client);
export default client;