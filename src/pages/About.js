import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <header className="header">
          <h1>關於這個網站</h1>
          <p>這個頁面整理了本專案的學習重點與結構。</p>
        </header>

        <h2 className="section-title">🎯 學習目標</h2>

        <section className="card">
          <h3>1. React 基礎</h3>
          <ul>
            <li>
              Function Component、Props 傳遞、State 管理（
              <span class="code">useState</span>）。
            </li>
            <li>
              Component 組合（
              <span class="code">App → Layout → pages → components</span>）。
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>2. Routing 與頁面切換</h3>
          <p>
            專案包含 <span class="code">About.js</span>、
            <span class="code">Homepage.js</span>、
            <span class="code">Page404.js</span> → 可練習 React Router
            的基本概念與路由設定。
          </p>
        </section>

        <section className="card">
          <h3>3. API 呼叫</h3>
          <p>
            使用 <span class="code">axios</span> 連接 Pexels API（含 Header
            驗證與 Query 參數），實際體驗「前端串接外部資料」。
          </p>
        </section>

        <section className="card">
          <h3>4. 資料渲染</h3>
          <p>
            <span class="code">Picture.js</span> 將 API 回傳的圖片資料{" "}
            <span class="code">map</span> 成{" "}
            <span class="code">&lt;img /&gt;</span> 元素，練習迭代陣列並渲染
            UI。
          </p>
        </section>

        <section className="card">
          <h3>5. 樣式管理</h3>
          <p>
            採用 <strong>SCSS 模組化</strong>（拆成{" "}
            <span class="code">_footer.scss</span>、
            <span class="code">_nav.scss</span> …），體驗規模化專案的 CSS 架構。
          </p>
        </section>

        <section className="card">
          <h3>6. 錯誤處理與 UX</h3>
          <ul>
            <li>
              <span class="code">Page404.js</span>：處理找不到路由的 fallback。
            </li>
            <li>
              <span class="code">Search.js</span>：處理輸入框、事件與 API
              呼叫，提升整體使用體驗。
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
