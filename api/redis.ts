import { createClient } from '@vercel/kv';

export const redis = createClient({
  url: process.env.KV_REST_API_URL || 'https://powerful-basilisk-106190.upstash.io',
  token: process.env.KV_REST_API_TOKEN || 'gQAAAAAAAZ7OAAIgcDI3MjU2YmRmZjU2NGM0NTExODI1ZGM2ZjRhYTYxM2JhMw',
});
