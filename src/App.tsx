import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavBar, Home, Footer, Information } from "./components"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="info1" element={<Information />} /> {/* Section 2  */}
                {/* just demonstrating how to use to nested routes, because I always forget */}
                <Route path="/home/*" element={<Home />}>
                  <Route path="cards" element={<Home />} /> {/* Cards Section 1 */}
                  <Route path="info1" element={<Information />} /> {/* Section 2  */}
                  <Route path="info2" element={<Home />} /> {/* Section 3 */}
                  <Route path="pricing" element={<Home />} /> {/* Pricing Section With Toggle */}
                  <Route path="faq" element={<Home />} /> {/* FAQ Accordion */}
                </Route>
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
