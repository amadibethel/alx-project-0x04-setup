import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-6">Welcome to ALX Counter App</h1>
      <Link href="/counter-app">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Counter App
        </button>
      </Link>
    </main>
  );
}
