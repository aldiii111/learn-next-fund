export default async function DocsPage({
    params
}: {
    params: Promise<{ slug: string[] }>
}) {

    const { slug } = await params

    return (
        <div className="max-w-2xl mx-auto py-16 px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Halaman Dokumentasi</h1>

            <p className="text-muted-foreground mb-4">
                Kamu sedang melihat path:
            </p>

            <code className="bg-muted p-2 rounded text-primary text-lg">
                /docs/{slug.join('/')}
            </code>
            <div className="mt-8 text-left bg-card border border-border p-4 rounded-lg">
                <p className="font-semibold text-sm text-muted-foreground mb-2">Data mentah slug (Array):</p>
                <pre className="text-sm overflow-x-auto">{JSON.stringify(slug, null, 2)}</pre>
            </div>
        </div>
    );
}