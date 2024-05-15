import { Client, Account } from 'appwrite'

export const client = new Client()

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT as string)

export const account = new Account(client)
export { ID } from 'appwrite'
