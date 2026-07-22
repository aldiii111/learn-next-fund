import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    return {
      title: "User tidak ditemukan | NextFund",
    }
  }

  const user = await res.json();

  return {
    title: user.name,
    description: `Profil dan informasi dari ${user.name} yang bekerja di ${user.company.name}`,
  }
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if(!res.ok) {
    notFound()
  }

  const user = await res.json();

  return (
    <div className="max-w-2xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <Link href="/users" className="text-sm text-primary mb-8 inline-block hover:underline">
        &larr; Kembali ke Daftar
      </Link>
      
      <h1 className="text-4xl font-extrabold mb-2">{user.name}</h1>
      <p className="text-xl text-muted-foreground mb-8">@{user.username} | {user.email}</p>
      
      <div className="bg-card border border-border/30 p-6 rounded-2xl shadow-sm">
        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4 border-b border-border/20 pb-2">Informasi Perusahaan</h3>
        <p className="font-medium text-lg text-foreground">{user.company.name}</p>
        <p className="text-muted-foreground italic mt-1">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  )
}