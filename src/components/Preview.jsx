import Swal from "sweetalert2";
import ROC from "../utils/recordOfPortfolioCreation.pdf";

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

const demo = (num, img) => {
  if (num == 0) Demo("https://credit-checker.273doworks.com", img);
  else if (num == 1) Demo("https://formula-generator.273doworks.com", img);
  else if (num == 2)
    Demo("https://273do.github.io/OnlineForm/indexLogin.html", img);
  else if (num == 5)
    Swal.fire({
      background: "transparent",
      title: "<font color=#f4ede4>このサイトについての記録など",
      html: `<iframe src="${ROC}" width="100%" height="700vh"></iframe>`,
      footer:
        '<font color=#f4ede4>今後の制作の参考にするための記録<br>詳細はPC版でご覧ください．<br>Qiitaでも解説しています．<a href="https://qiita.com/273Do/items/8fef9eba3c9133a5b961" target="_blank"rer="noopener noreferrer"><font color=#f4ede4>こちら</p></a>',

      width: "660px",
      showConfirmButton: false,
      showCancelButton: true,
    });
  else {
    Swal.fire({
      background: "transparent",
      type: "warning",
      title: "<p style='color:#f4ede4'>coming soon</p>",
      width: "660px",
      showConfirmButton: false,
      showCancelButton: false,
    });
  }
};

const Demo = (url, imgURL) => {
  var DemoScreen =
    '<iframe src="' +
    url +
    '" width="600" height="800"></iframe><p style="text-decoration:none"><a href="' +
    url +
    `"target="_blank"rer="noopener noreferrer"><img height="5%" width="5%" align=top src=${imgURL} alt={icon}/><font color=#f4ede4>ページはこちら</p></a>`;
  if (window.innerWidth <= 450)
    DemoScreen = DemoScreen.replace(
      'width="600" height="800"',
      'width="320" height="600"'
    );
  Swal.fire({
    background: "transparent",
    title: "<font color=#f4ede4>Demo",
    html: DemoScreen,
    width: "660px",
    showConfirmButton: false,
    showCancelButton: true,
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
  {
    date: "2023/09/10",
    about: "本サイトと全ツールをAWSへ移行しました．",
  },
  { date: "2023/09/09", about: "サイトのSSL化を行いました．" },
  {
    date: "2023/08/07",
    about: "制作記録のPDFファイルの表示をスマホ向けに最適化しました．",
  },
  {
    date: "2023/08/07",
    about: "ポートフォリオの制作記録をToolページのMpで公開しました．",
  },
  { date: "2023/08/07", about: "新たなポートフォリオを公開しました．" },
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
