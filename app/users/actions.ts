'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    if(!email || !name) {
        throw new Error("Email dan Nama wajib diisi")
    }

    console.log('Membuat new akun', { name, email });

    await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });

    revalidatePath("/users")
    redirect("/users")
}