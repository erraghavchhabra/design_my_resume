import { useEffect, useState } from "react";

export const useUnsavedChanges = (when: boolean) => {
  const [showDialog, setShowDialog] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

  // Browser refresh protection
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (when) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [when]);

  const requestNavigation = (path: string) => {
    if (when) {
      setNextPath(path);
      setShowDialog(true);
      return false;
    }
    return true;
  };

  const confirmLeave = () => {
    setShowDialog(false);
    return nextPath;
  };

  const cancelLeave = () => {
    setShowDialog(false);
    setNextPath(null);
  };

  return {
    showDialog,
    requestNavigation,
    confirmLeave,
    cancelLeave,
  };
};
