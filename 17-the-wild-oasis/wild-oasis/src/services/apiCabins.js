import supabase from "./supabase1";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error.message);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};
