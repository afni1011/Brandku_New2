import { useEffect, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { featureData } from "../data/features";

export const useFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isComponentAlive = true;

    const fetchFeatures = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await apiClient.get("/features");

        if (isComponentAlive) {
          setFeatures(response);
        }
      } catch (err) {
        if (isComponentAlive) {
          setError(err.message || "Gagal mengambil fitur");
          setFeatures(featureData);
        }
      } finally {
        if (isComponentAlive) {
          setLoading(false);
        }
      }
    };

    fetchFeatures();

    return () => {
      isComponentAlive = false;
    };
  }, []);

  return {
    features,
    loading,
    error,
  };
};