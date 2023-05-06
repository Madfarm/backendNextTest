import Image from 'next/image';
import Link from 'next/link';

const getPeopleData = async () => {
    const response =  await fetch('https://sei221-mern-api-test.herokuapp.com/people',
    {next: {revalidate: 10}}
    );
    return response.json()
}



export default async function PeopleIndex(){
    const people = await getPeopleData();
    const mapped = people.map((peep, idx)=>{
        return ( 
        <div key={idx}>
            <Link href={`/people/${peep._id}`}><h1>{peep.name}</h1> </Link>
            <Image src={peep.image} alt="A cute mans" width={200} height={300}/>
            <h2>{peep.title}</h2>
        </div>
        )
    })

    return (
        <section>
            <h1>People Index</h1>
            {mapped}
        </section>
    )
}