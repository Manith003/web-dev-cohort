import CurvedLoop from "./components/CurvedLoop.jsx";

function App() {
  return (
    <div className="">
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style "
      />
    </div>
  );
}

export default App;
