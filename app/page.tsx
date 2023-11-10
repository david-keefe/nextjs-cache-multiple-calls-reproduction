import Link from "next/link"

export default async function Home() {
  return (
    <main>
        <Link className="block" prefetch={false} href="/page/1">Page 1</Link>
        <Link className="block" prefetch={false} href="/page/2">Page 2</Link>
        <Link className="block" prefetch={false} href="/page/3">Page 3</Link>
    </main>
  )
}
