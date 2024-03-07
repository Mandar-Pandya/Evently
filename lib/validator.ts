import { z } from "zod";

export const EventFormSchema = z.object({
  title: z.string().min(3, "title must be atleast 3 characters").max(50),
  description: z
    .string()
    .min(3, "description must be atleast 3 characters")
    .max(400, "description must be less than 400 characters"),
  location: z
    .string()
    .min(3, "location must be atleast 3 characters")
    .max(400, "Location  must be less than 400 characters"),
  imageUrl: z.string(),
  startDatetime: z.date(),
  endDatetime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url:z.string().url()
});
