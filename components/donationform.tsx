"use client";

import { DonationSchema } from "@/schemas/donationschema";
import type { DonationFormData } from "@/schemas/donationschema";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

export default function DonationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DonationFormData>({
    resolver: valibotResolver(DonationSchema),
  });

  const onSubmit = (data: DonationFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="w-[100%] md:w-[40%] mx-auto space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-400"
          {...register("name")}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-400"
          {...register("email")}
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-400"
          {...register("phone")}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-400"
          {...register("amount")}
        />
      </div>
      <button type="submit" className="bg-blue-500 px-6 py-2 rounded-md">
        Donate
      </button>
    </form>
  );
}
