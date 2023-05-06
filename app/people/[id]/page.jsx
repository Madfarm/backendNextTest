import Image from "next/image"

const getPerson = async (id) => {
    const res = await fetch(`https://sei221-mern-api-test.herokuapp.com/people/${id}`,
    {next: {revalidate: 10}}
    )
    return await res.json()
}


export default async function ShowPage({ params }){
    const person = await getPerson(params.id)

    return (
        <div>
            <h1>{person.name}</h1>
            <Image src={person.image} width={200} height={300} />
        </div>
    )
}