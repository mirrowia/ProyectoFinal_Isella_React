import NavBar from "../components/NavBar";

function Template({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Template;
