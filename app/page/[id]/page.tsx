import Link from "next/link";

export const revalidate = 30

export function generateStaticParams() {
    return [
        {id: "1"},
        {id: "2"}
    ]
}


export default async function PageComponent({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  console.log("static page id: ", params.id)

  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        Page {params.id}
      </div>
    </div>
  );
}
