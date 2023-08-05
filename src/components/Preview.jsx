import Swal from "sweetalert2";

const demo = (num) => {
  if (num == 0) Demo("https://creditchecker.273doworks.com");
  else if (num == 1) Demo("https://formulagenerator.273doworks.com");
  else if (num == 2) Demo("https://273do.github.io/OnlineForm/indexLogin.html");
  else if (num == 5) console.log("MyPortfolio");
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
};

function Demo(url) {
  Swal.fire({
    background: "transparent",
    html:
      '<iframe src="' +
      url +
      '" width="600" height="800"></iframe><p className="preview"><a href="' +
      url +
      '"target="_blank"rer="noopener noreferrer"><font color=#f4ede4>ページはこちら</p></a>',
    color: "#fff",
    // border: "none",
    width: "660px",
    showConfirmButton: false,
    showCancelButton: false,
  });
}

function OA(url) {
  Swal.fire({
    background: "transparent",
    border: "none",
    width: "660px",
    imageUrl: url,
    imageWidth: "85%",
    imageHeight: "85%",
    showConfirmButton: false,
    showCancelButton: false,
  });
}

let notice =
  '<div class="notice"><dl><dt><font color=#f4ede4>2023/05/18</dt><dd>OnlineForm(現在開発中)のページを公開しました．</dd><dt>2023/05/16</dt><dd>新ツールのアイコンを公開しました．</dd><dt>2023/05/15</dt><dd>スタイルの最適化を行いました．</dd> <dt>2023/05/15</dt> <dd>GitHubアカウントを公開しました．</dd> <dt>2023/03/15</dt><dd>FormulaGeneratorを公開しました．</dd> <dt>2023/02/22</dt><dd>サイトのSSL化を行いました．</dd> <dt>2023/02/22</dt></dl></div>';

const info = () =>
  Swal.fire({
    background: "transparent",
    title: "<p><font color=#f4ede4>coming soon</p>",
    html: notice,
    showConfirmButton: false,
    showCancelButton: false,
  });

export { demo, info, MO, OA };

function MO(id) {
  Swal.fire({
    background: "transparent",
    title: id,
    border: "none",
    width: "660px",
    showConfirmButton: false,
    showCancelButton: false,
  });
}
