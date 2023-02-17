import { useEffect, useState } from "react";

const useLowerCase = (string) => {
  const [stringValue, setStringValue] = useState(string);

  useEffect(() => {
    if (typeof string === "string") {
      setStringValue(string.toLowerCase());
    } else {
      setStringValue("Pon un string atontao");
    }
  }, [string]);

  return [stringValue];
};

export default useLowerCase;
