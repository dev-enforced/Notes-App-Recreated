import { useEffect } from "react";
const useDocumentTitle = (titleProvided) => {
  useEffect(() => {
    document.title = titleProvided;
  }, [titleProvided]);
};
export { useDocumentTitle };
