import { apiInstance } from "./apiInstance";

export const apiSubmitResponse = async ({
  name,
  email,
  companyName,
  message,
}: {
  name: string;
  email: string;
  companyName: string;
  message: string;
}) => {
  try {
    const response = await apiInstance.post("/submit", {
      name,
      email,
      companyName,
      message,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
