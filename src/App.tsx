import { Box } from "@mui/material";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import AppBarComponet from "./components/AppBar";

//Pages
import { Home, Blogs, Books, Contact, BooksDetails } from "./pages";
// Books, Blogs, Contact

function App() {
  return (
    <BrowserRouter>
      <Box>
        <AppBarComponet />

        {/* Routeing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/books" element={<Books />} />
          <Route
            path="/contact"
            element={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Contact />
              </Box>
            }
          />
          <Route path="/books/:id" element={<BooksDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
