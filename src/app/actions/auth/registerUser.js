"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const result = await dbConnect("test_user").insertOne(payload);

  return result;
};
