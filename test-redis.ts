import { createClient } from '@vercel/kv';

const redis = createClient({
  url: 'https://powerful-basilisk-106190.upstash.io',
  token: 'gQAAAAAAAZ7OAAIgcDI3MjU2YmRmZjU2NGM0NTExODI1ZGM2ZjRhYTYxM2JhMw',
});

async function main() {
  try {
    await redis.set('total_rolls', 5);
    const rolls = await redis.get('total_rolls');
    console.log('Total rolls:', rolls);
  } catch (err) {
    console.error('Error:', err);
  }
}
main();
