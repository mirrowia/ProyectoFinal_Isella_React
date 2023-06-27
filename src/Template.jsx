import NavBar from "./components/nav/NavBar";

function Template({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Template;
