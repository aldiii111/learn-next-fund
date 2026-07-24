import { createUser } from "../actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddUserPage() {
    return (
        <div className="max-w-xl mx-auto py-16 px-6">
            <Link href="/users" className="text-sm text-primary mb-8 inline-block hover:underline">
                &larr; Kembali ke Daftar
            </Link>

            <h1 className="text-3xl font-bold mb-6 text-foreground">Tambah Akun Baru</h1>

            <form action={createUser} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nama Lengkap</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Masukkan nama Anda"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="[EMAIL_ADDRESS]"
                    />
                </div>

                <div className="flex justify-between">
                    <Button type="submit" className="w-36 font-semibold">
                        Simpan Data
                    </Button>

                    <Button type="reset" variant="outline">
                        Bersihkan
                    </Button>
                </div>
            </form>
        </div>
    );    
}