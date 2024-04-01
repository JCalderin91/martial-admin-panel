import SweetAlert2 from "sweetalert2";

export const Toast = SweetAlert2.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = SweetAlert2.stopTimer;
    toast.onmouseleave = SweetAlert2.resumeTimer;
  },
});

export const Dialog = SweetAlert2.mixin({
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  confirmButtonColor: "#3085d6",
});
