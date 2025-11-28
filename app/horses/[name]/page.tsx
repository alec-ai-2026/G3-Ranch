import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

interface HorsePageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function HorseDetailPage(props: HorsePageProps) {
  const { name } = await props.params;

  const ref = doc(db, "horses", name);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return (
      <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3] flex items-center justify-center">
        <h1 className="text-3xl">Horse not found.</h1>
      </main>
    );
  }

  const horse = snap.data();

  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
      <section className="max-w-4xl mx-auto px-4 py-16">

        {horse.imageURL && (
          <img
            src={horse.imageURL}
            alt={horse.name}
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        )}

        <h1 className="text-5xl font-bold text-[#f5c781] mb-4">
          {horse.name}
        </h1>

        <p className="text-lg text-[#d9b07c] mb-2">
          {horse.breed}
        </p>

        <p className="text-[#d9b07c] mb-6">
          {horse.age}
        </p>

        <p className="text-[#f2dfc2] max-w-2xl mb-10">
          {horse.description}
        </p>

        <a
          href="/horses"
          className="text-[#f5c781] hover:underline text-sm"
        >
          ← Back to Horses
        </a>
      </section>
    </main>
  );
}
