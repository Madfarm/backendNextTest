import Image from "next/image"
import Pets from "./Pets"
import Link from "next/link"

const getPerson = async (id) => {
       
    const res = await fetch(`https://sei221-mern-api-test.herokuapp.com/people/${id}`)
  
    return await res.json()

}



export default async function ShowPage({ params }) {
    const person = await getPerson(params.id)
    

   
    return (
        <div>
            <h1>This is {person.name}</h1>
            <Image src={person.image} width={200} height={300} alt={person.name} />
                <p>He is a {person.title}</p>
            <Pets person={person} />
            <Link href={`people/${params.id}/edit`}><button>Edit this boyyyy</button></Link>
        </div>
       
    )

}