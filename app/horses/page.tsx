import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default async function HorsesPage() {
  const snapshot = await getDocs(collection(db, "horses"));
  const horses = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#f5c781] mb-8">
          Our Horses
        </h1>

        <p className="text-[#f2dfc2] mb-10">
          Meet the horses of G3 Ranch.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {horses.map((horse) => (
            <div
              key={horse.id}
              className="border border-[#3b2618] bg-[#140d08] rounded-lg overflow-hidden shadow-md"
            >
              {/* IMAGE */}
              {horse.imageURL && (
                <img
                  src={horse.imageURL}
                  alt={horse.name}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="text-2xl font-semibold text-[#f5c781]">
                  {horse.name}
                </h2>

                <p className="text-sm text-[#d9b07c]">{horse.breed}</p>

                {horse.description && (
                  <p className="mt-3 text-[#f2dfc2]">
                    {horse.description}
                  </p>
                )}

                <a
                  href={`/horses/${horse.id}`}
                  className="mt-4 inline-block text-[#f5c781] hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
