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
  }));

  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
      <section className
