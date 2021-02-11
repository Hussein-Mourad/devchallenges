﻿import { ThemeProvider } from "./ThemeContext";
import Home from "./pages/Home";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
