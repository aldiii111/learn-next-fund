import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function UsersPage() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <header className="mb-12 flex items-center justify-between animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Direktori</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 text-foreground">pengguna.</h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
            Daftar kontributor aktif platform yang dimuat secara dinamis dari database server.
          </p>
        </div>
        <Link href="/users/add">
          <Button>+ Tambah User</Button>
        </Link>
      </header>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
        {data.map((user: any) => (
          <Link
            href={'/users/' + user.id}
            key={user.id}
            className="group border border-border/30 p-6 rounded-2xl bg-card text-card-foreground transition-all duration-300 hover:border-border/80 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.02)] flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-base tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                {user.name}
              </h2>
              <p className="text-xs text-muted-foreground mt-1 select-all">{user.email.toLowerCase()}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/20 flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary">
                {user.company.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                ID: {user.id}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}