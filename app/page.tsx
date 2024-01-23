import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
        <h1>Hello world</h1>
        <Link href="/about">About</Link>
        <br />
        <Link href="/blog/345">blog/345</Link>
    </main>
  );
}
