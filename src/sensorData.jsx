import { useState, useEffect } from "react";

export default function useSensorData() {
  const [data, setData] = useState({
    temperature: null,
    light: null,
    pH: null
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.46.71/sensors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData({
          temperature: result.temperature,
          light: result.light,
          pH: result.pH
        });
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

  return { data, error };
}
