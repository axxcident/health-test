export default function Blog ({ params }: {
  params: {id: string}
  })

  {
  return (
    <main className="">
        <h1>Blog ID: {params.id}</h1>
    </main>
  );
};
