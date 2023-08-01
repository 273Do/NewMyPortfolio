import Swal from "sweetalert2";

export default function demo(num) {
  if (num == 0) Demo("https://creditchecker.273doworks.com");
  else if (num == 1) Demo("https://formulagenerator.273doworks.com");
  else if (num == 2) Demo("https://273do.github.io/OnlineForm/indexLogin.html");
  else {
    Swal.fire({
      background: "transparent",
      type: "warning",
      title: "<p style='color:#fff'>coming soon</p>",
      titleColor: "white",
      showConfirmButton: false,
      showCancelButton: false,
    });
  }
}

function Demo(url) {
  Swal.fire({
    background: "transparent",
    html:
      '<iframe src="' +
      url +
      '" width="600" height="800"></iframe><p className="preview"><a href="' +
      url +
      '"target="_blank"rer="noopener noreferrer">ページはこちら</p></a>',
    color: "#fff",
    border: "none",
    width: "660px",
    showConfirmButton: false,
    showCancelButton: false,
  });
}
