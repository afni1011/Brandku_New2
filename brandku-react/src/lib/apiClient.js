import { featureData } from "../data/features";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiClient = {
  get: async (url) => {
    await delay(500);

    if (url === "/features") {
      return featureData;
    }

    throw new Error("Endpoint GET tidak ditemukan");
  },

  post: async (url, body) => {
    await delay(700);

    if (url === "/login") {
      const { email, password } = body || {};

      if (!email || !password) {
        throw new Error("Email dan password wajib diisi");
      }

      return {
        success: true,
        user: {
          name: email.split("@")[0],
          email: email,
          role: "User",
        },
      };
    }

    throw new Error("Endpoint POST tidak ditemukan");
  },
};