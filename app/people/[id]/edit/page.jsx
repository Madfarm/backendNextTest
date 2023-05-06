import { revalidatePath } from "next/cache"


export default async function EditPeople({ params }) {
    const res = await fetch(`https://sei221-mern-api-test.herokuapp.com/people/${params.id}`)
    const person = await res.json()

    async function editSubmit(formData){
        "use server";

        const url = `https://sei221-mern-api-test.herokuapp.com/people/${params.id}`

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const res = await fetch(url, options)

        revalidatePath(`/people/${params.id}/edit`)
        return await res.json();
    }

    return (
        <div>
            <h2>Edit {person.name}'s details </h2>
            <form action={editSubmit}>
                <label>Name</label>
                <input name="name" type="text" defaultValue={person.name} />
                <label>Image Url</label>
                <input name="image" type="text" defaultValue={person.image} />
                <label>Title</label>
                <input name="title" type="text" defaultValue={person.title} />
                <input type="submit" />
            </form>
        </div>
    )
}