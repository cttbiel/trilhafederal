import { useContext } from "react";
import { ToastContext } from "./GlobalToast";

export function useToast() {
  return useContext(ToastContext);
}
