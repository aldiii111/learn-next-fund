'use client'

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {

    useEffect(() => {
        console.error("Terjadi error", error);
    }, [error])

    return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      
      <h2 className="text-2xl font-bold tracking-tight mb-2 text-foreground">
        Aduh, Sesuatu Berjalan Salah!
      </h2>
      
      <p className="text-muted-foreground max-w-md mb-8">
        Kami gagal memuat data pengguna. {error.message && <span className="italic block mt-2 text-sm text-destructive/80">{error.message}</span>}
      </p>

      <Button 
        onClick={() => reset()}
        variant="default"
      >
        Coba Muat Ulang
      </Button>
    </div>
  );
}