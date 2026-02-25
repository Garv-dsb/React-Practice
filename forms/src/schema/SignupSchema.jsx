import { z } from "zod";

export const SignupSchema = z.object({
  firstName: z.string().min(4, "First name must be at least 4 characters"),
  lastName: z.string().min(5, "Last name must be at least 5 characters"),
  age: z.coerce.number().min(18, "You must be at least 18 years old"),
});
