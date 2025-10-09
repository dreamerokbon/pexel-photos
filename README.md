## 🧠 專案簡介（Overview）

這是一個以 **React** 製作的圖片搜尋網站，  
透過 **Pexels API** 即時取得圖片資料，使用者可搜尋關鍵字、載入更多圖片、查看攝影師資訊並開啟原圖下載。  

同時也展示了 React Router 導覽結構、SCSS 模組化樣式管理、  
以及 GitHub Pages 部署時的 **404.html 自動重導技巧**。

---

## ⚙️ 使用技術（Tech Stack）

| 類別 | 技術 |
|------|------|
| 前端框架 | React.js (React Router v6) |
| 資料串接 | Axios + Pexels API |
| 樣式管理 | SCSS 模組化 (_nav.scss, _footer.scss, _picture.scss...) |
| 佈局架構 | Component-based Layout (App → Layout → Pages → Components) |
| 部署平台 | GitHub Pages |
| 404 解法 | Public 目錄下 404.html + sessionStorage redirect 技巧 |

---

## 🌟 功能特色（Features）

- 🔍 **圖片搜尋功能**  
  使用者輸入關鍵字即可透過 Pexels API 搜尋相關圖片。

- 📷 **即時圖片渲染**  
  透過 React state 與 `.map()` 動態渲染多張圖片，附上攝影師資訊與下載連結。

- 🔄 **載入更多圖片**  
  點擊「更多圖片」按鈕自動抓取下一頁圖片，串接前後頁結果。

- 🧱 **React Router 路由結構**  
  包含首頁 `/`、關於頁 `/About`、404 頁 `/404`，  
  展示 React Router 的 `<Routes>`、`<Outlet>`、`<Link>` 使用方式。

- 🧩 **模組化 SCSS 結構**  
  將樣式依功能拆分成多個檔案：  
  `_nav.scss`, `_footer.scss`, `_search.scss`, `_picture.scss`, `_about.scss`  
  最後統一由 `style.scss` 匯入編譯。

- ⚙️ **GitHub Pages 部署修正**  
  在 `public/404.html` 中使用：
  ```html
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/pexel-photos/'" />
  
  ---
  
🧠 學習重點（What I Learned）

⚛️ React Function Component 與 Props 傳遞
熟悉父子元件資料傳遞與事件處理（Search → Homepage）。

🚀 React Router v6 使用方式
掌握 <Routes>, <Route>, <Outlet> 架構與 404 fallback 寫法。

🌐 API 串接實作
使用 Axios 搭配 Header 認證與動態 URL。

🖼️ 資料渲染與 state 管理
練習 useState, useEffect 管理圖片資料與分頁邏輯。

🎨 SCSS 模組化管理
體驗大型專案的樣式拆分與可維護性。

🔄 GitHub Pages SPA 修正技巧
理解為何 React Router 刷新會 404，並使用 sessionStorage redirect 解決。

