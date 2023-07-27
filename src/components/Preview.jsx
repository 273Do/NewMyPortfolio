import Swal from "sweetalert2";

export default function demo(num) {
  console.log(num);
  Swal.fire({
    title: "Success",
    type: "success",
    text: "Your work has been saved.",
  });

  //スイートアラート
}

//   export default function preview(num) {
//       console.log(num);
//       //スイートアラート
//     }
