import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-indigo-300">
      <Link
        className="p-3 uppercase font-medium bg-indigo-50 text-indigo-500 text-4xl rounded-md "
        href={"blog"}
      >
        Go to Blog
      </Link>
    </main>
  );
}
