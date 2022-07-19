import { useEffect, useState } from "react";

export const useImagesAllLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            }),
        ),
    ).then(() => {
      setLoaded(true);
    });
  }, []);

  return loaded;
};
