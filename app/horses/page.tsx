import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

type Horse = {
  id: string;
  name?: string;
  imageURL?: string;
  breed?: string;
  description?: string;
};

export default async function HorsesPage() {
  const snapshot = await getDocs(collection(db, "horses"));
  const horses: Horse[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Horse[];

  const isEmpty = horses.length === 0;

  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d9b07c] mb-3">
            Our String
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#f5c781] mb-4">
            G3 Ranch Horses
          </h1>

          <p className="text-sm md:text-base text-[#f2dfc2]/90 max-w-2xl mx-auto">
            Meet the horses that carry our brand, our work, and our family name.
            Each one is part of the story we’re building out here.
          </p>
        </div>

        {/* Empty state */}
        {isEmpty && (
          <div className="mt-10 border border-[#3b2618] bg-[#140d08] rounded-xl px-6 py-10 text-center shadow-md">
            <p className="text-lg text-[#f5c781] mb-2">No horses added yet</p>
            <p className="text-sm text-[#f2dfc2]/80">
              Once we add horses to the barn, they’ll appear here with photos,
              bloodlines, and notes from the ranch.
            </p>
          </div>
        )}

        {/* Horse grid */}
        {!isEmpty && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {horses.map((horse) => (
              <div
                key={horse.id}
                className="border border-[#3b2618] bg-[#140d08] rounded-lg overflow-hidden shadow-md flex flex-col"
              >
                {/* IMAGE */}
                {horse.imageURL && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={horse.imageURL}
                      alt={horse.name || "Horse"}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-[#f5c781]">
                    {horse.name || "Unnamed Horse"}
                  </h2>

                  {horse.breed && (
                    <p className="text-xs uppercase tracking-wide text-[#d9b07c] mt-1">
                      {horse.breed}
                    </p>
                  )}

                  {horse.description && (
                    <p className="mt-3 text-sm text-[#f2dfc2]/90 line-clamp-4">
                      {horse.description}
                    </p>
                  )}

                  <a
                    href={`/horses/${horse.id}`}
                    className="mt-4 inline-block text-sm text-[#f5c781] hover:text-[#f8d395] hover:underline self-start"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
