import Footer from "./Footer";
import Header from "./Header";

export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Header />
      <Footer />
    </div>
  );
}

export function Overlay() {
  return <div></div>;
}
