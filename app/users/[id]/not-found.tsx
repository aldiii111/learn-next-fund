import Link from "next/link";
import { FileQuestion } from "lucide-react"; 

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-6">
        <FileQuestion className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight mb-2">Pengguna Tidak Ditemukan</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Maaf, kami tidak dapat menemukan pengguna dengan ID tersebut di database kami.
      </p>
      <Link 
        href="/users" 
        className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
      >
        Kembali ke Daftar Pengguna
      </Link>
    </div>
  );
}
