import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

// eslint-disable-next-line react-refresh/only-export-components
const MySwal = withReactContent(Swal)

const myToast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  customClass: {
    container: "my-swal",
  },
  timer: 3000,
  timerProgressBar: true,
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
})

export default myToast
