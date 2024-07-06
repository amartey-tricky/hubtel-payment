import  * as v  from "valibot";

export const DonationSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Enter your name!")),
  email: v.pipe(v.string(), v.email("Enter a valid email address!")),
  phone: v.pipe(v.string(), v.nonEmpty("Enter a valid phone number!")),
  amount: v.pipe(v.number(), v.toMinValue(10)),
})

export type DonationFormData = v.InferInput<typeof DonationSchema>;