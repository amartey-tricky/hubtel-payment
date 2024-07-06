import DonationForm from "@/components/donationform";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans mx-6 my-8">
      <section className="py-8">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          Donation Form
        </h1>
      </section>
      <DonationForm />
    </main>
  );
}
