import Swal from "sweetalert2";

const info = () =>
  Swal.fire({
    background: "transparent",
    title: "<p><font color=#f4ede4>Notice</p>",
    html: Alignment(),
    showConfirmButton: false,
    showCancelButton: false,
  });

const Alignment = () => {
  const noticeTmp = NoticeData.map(
    (data) => `<dt>${data.date}</dt><dd>${data.about}</dd><br>`
  );
  return `<font color=#f4ede4><div style="height: 300px; overflow-y: scroll;"><dl></dl>${noticeTmp.join(
    ""
  )}</dl></div>`;
};

const demo = (num) => {
  if (num == 0) Demo("https://creditchecker.273doworks.com");
  else if (num == 1) Demo("https://formulagenerator.273doworks.com");
  else if (num == 2) Demo("https://273do.github.io/OnlineForm/indexLogin.html");
  else if (num == 5)
    Swal.fire({
      background: "transparent",
      title: "<font color=#f4ede4>このサイトについての記録など",
      html: '<iframe src="../../public/RecordOfPortfolioCreation.pdf" width="100%" height="700vh"></iframe>',
      footer: "<font color=#f4ede4>今後の制作の参考にするための記録",
      width: "660px",
      showConfirmButton: false,
      showCancelButton: false,
    });
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

const Demo = (url) => {
  Swal.fire({
    background: "transparent",
    title: "<font color=#f4ede4>Demo",
    html:
      '<iframe src="' +
      url +
      '" width="600" height="800"></iframe><p className="preview"><a href="' +
      url +
      '"target="_blank"rer="noopener noreferrer"><font color=#f4ede4>ページはこちら</p></a>',
    width: "660px",
    showConfirmButton: false,
    showCancelButton: false,
  });
};

const MO = (title, id) => {
  var YTScreen = YTData[id[2] - 1];
  if (window.innerWidth <= 450)
    YTScreen = YTData[id[2] - 1].replace(/ width="560" height="315"/g, "");
  console.log(YTScreen);
  // eval(`${id}(${title})`)
  Swal.fire({
    background: "transparent",
    title: `<font color=#f4ede4>${title}`,
    html: YTScreen,
    footer: FTData[id[2] - 1],
    width: "625px",
    showConfirmButton: false,
    showCancelButton: false,
  });
};

const OA = (url) => {
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
};

export { demo, info, MO, OA };

const NoticeData = [
  { date: "2023/02/22", about: "サイトのSSL化を行いました．" },
  { date: "2023/03/15", about: "FormulaGeneratorを公開しました．" },
  { date: "2023/05/15", about: "GitHubアカウントを公開しました．" },
  { date: "2023/05/15", about: "スタイルの最適化を行いました．" },
  { date: "2023/05/16", about: "新ツールのアイコンを公開しました．" },
  { date: "2023/05/15", about: "スタイルの最適化を行いました．" },
  { date: "2023/05/16", about: "新ツールのアイコンを公開しました．" },
  { date: "2023/02/22", about: "サイトのSSL化を行いました．" },
  { date: "2023/03/15", about: "FormulaGeneratorを公開しました．" },
  { date: "2023/05/15", about: "GitHubアカウントを公開しました．" },
  { date: "2023/05/15", about: "スタイルの最適化を行いました．" },
  { date: "2023/05/16", about: "新ツールのアイコンを公開しました．" },
  { date: "2023/05/15", about: "スタイルの最適化を行いました．" },
  { date: "2023/05/16", about: "新ツールのアイコンを公開しました．" },
];

const YTData = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/mS7fpL4gxnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><iframe width="560" height="315" src="https://www.youtube.com/embed/wcHcc2F873I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><iframe width="560" height="315" src="https://www.youtube.com/embed/BLkTDUAWESQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q4cfW8m3rZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/PkfS3kT_yNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hz-nPJlnBww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><iframe width="560" height="315" src="https://www.youtube.com/embed/5_BJg57AwaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/7anf8GXDbkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/H3BTrFEUKlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
];

const FTData = [
  "",
  "",
  "",
  "<font color=#f4ede4>上:個別，下:本編 1:06~",
  "",
  "<font color=#f4ede4>点滅，音量注意",
];
