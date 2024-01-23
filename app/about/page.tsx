type Repository = {
  id: number
  name: string
  full_name: string
}

export default async function About() {

  const response = await fetch('https://api.github.com/repos/vercel/next.js')
  const json: Repository = await response.json()

  return (
    <main className="">
        <h1>About this ID: {json.id}</h1>
        <h1>About this ID: {json.full_name}</h1>
        <h1>About this ID: {json.name}</h1>
    </main>
  );
}
