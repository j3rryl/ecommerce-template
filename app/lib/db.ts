import { db } from "@/db";
import { tests } from "@/schema";

export const insertTest = async () => {
  console.log("Inserting...");
  return db.insert(tests).values({ name: "Jeremy" }).returning();
};
