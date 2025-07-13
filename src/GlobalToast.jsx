import React, { createContext, useState, useCallback } from "react";
import "./GlobalToast.css";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [leaving, setLeaving] = useState(false);

  const showToast = useCallback((message, type = "info") => {
    setToast({ message, type });
    setLeaving(false);
    setTimeout(() => {
      setLeaving(true);
      setTimeout(() => setToast(null), 350); // tempo da animação de saída
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          className={`global-toast global-toast-${toast.type}${
            leaving ? " global-toast-leave" : ""
          }`}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export { ToastContext };
