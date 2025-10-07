import React from "react";

const Page404 = () => {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#f7f7fb",
        color: "#0f172a",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
      <h2 style={{ margin: "0.5rem 0" }}>Oops! 你走丟了 🚀</h2>
      <p style={{ color: "#475569", maxWidth: "400px" }}>
        這個頁面好像不存在，可能正在宇宙旅行中。 先回首頁看看吧！
      </p>
      <a
        href="/"
        style={{
          marginTop: "1.5rem",
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          backgroundColor: "#bafcb5",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "600",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#91fc8aff")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#bafcb5")}
      >
        回首頁 🏠
      </a>
    </div>
  );
};

export default Page404;
