
type Time = {
  datetime: string
}

export async function generateMetadata({ params }: {
  params: {id: string}
  }) {
    return {
      title: "my blog post",
      description: `blog post for number ${params.id}`,
    };
  }

export default async function Blog ({ params }: {
  params: {id: string}
  })

  {


  const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Stockholm',
    {
      cache: "no-store"
    },
    // {
    // method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json'
    //   }
    // }
    )

    const data: Time = await response.json()


  return (
    <main className="">
        <h1>Blog ID: {params.id}</h1>
        <p>TimeData: {data.datetime}</p>
    </main>
  );
};
