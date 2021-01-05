import "./App.css";
import StyleSelector from './compontents/StyleSelector.js'
import Button from "./compontents/Button.js";




function App() {
  return (
    // <div className="p-10 grid grid-cols-3 gap-5">
    <div className="p-10">
      <StyleSelector/>
      
      {btns.map((btn) => (
        <div className="m-5 max-w-max">
          <h1 className={`font-medium text-lg mb-3 text-${btn.color}`}>
            {`${capitalizeFirstLetter(btn.variant)}-${btn.size}`}
          </h1>
          <Button
            key={btn.id}
            variant={btn.variant}
            color={btn.color}
            size={btn.size}
            disabled={btn.disabled}
          >
            {btn.color}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default App;
