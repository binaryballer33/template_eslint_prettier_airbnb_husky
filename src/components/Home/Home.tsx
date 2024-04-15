import { Outlet } from "react-router-dom"

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        minWidth: "100dvw",
        backgroundColor: "#192628",
        color: "gray",
      }}
    >
      <h1>Home</h1>
      <h1>Hello World</h1>

      {/* Need this in order to show the components being rendered as sub routes after this */}
      <Outlet />
    </div>
  )
}

export default Home
