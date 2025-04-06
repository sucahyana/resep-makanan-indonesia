// app/doc/page.tsx

export const metadata = {
    title: "Dokumentasi",
    description: "Halaman dokumentasi resep makanan",
  };
  
  export default function DocumentationPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Dokumentasi</h1>
        <p className="text-gray-600">
          Ini adalah halaman dokumentasi untuk aplikasi resep makanan Anda. Tambahkan konten di sini
          sesuai kebutuhan seperti cara penggunaan, API endpoint, atau panduan pengguna.
        </p>
      </main>
    );
  }
  