import SweetAlert2, { type SweetAlertOptions } from "sweetalert2";

const TOAST_CONFIG: SweetAlertOptions = {
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast: any) => {
    toast.onmouseenter = SweetAlert2.stopTimer;
    toast.onmouseleave = SweetAlert2.resumeTimer;
  },
};

const ToastBasic = SweetAlert2.mixin({ ...TOAST_CONFIG });

export const Dialog = SweetAlert2.mixin({
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  confirmButtonColor: "#3085d6",
});

const TOAST_PRESET_MESSAGES = {
  error: {
    create: "Error al crear",
    get: "Error al obtener información",
    put: "Error al actualizar",
    delete: "Error al borrar",
  },
  success: {
    create: "Guardado exitosamente!",
    get: "Información recuperada exitosamente!",
    put: "Actualizado exitosamente!",
    delete: "Borrado exitosamente!",
  },
};

type Mode = "create" | "get" | "put" | "delete";
type Type = "error" | "success";

interface Toast {
  fire: (options: SweetAlertOptions) => void;
  preset: ({ mode, type }: { mode: Mode; type: Type }) => void;
}

export const Toast: Toast = {
  fire: (options) => ToastBasic.fire(options),
  preset: ({ mode = "get", type = "error" }) =>
    ToastBasic.fire({
      title: TOAST_PRESET_MESSAGES[type][mode],
      icon: type,
    }),
};
