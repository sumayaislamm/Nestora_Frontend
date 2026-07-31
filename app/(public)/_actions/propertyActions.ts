"use server";

import { getAllProperties, getSingleProperty } from "@/app/service/propertyService";



export const getPropertiesAction = async () => {
  return await getAllProperties();
};

export const getPropertyAction = async (id: string) => {
  return await getSingleProperty(id);
};