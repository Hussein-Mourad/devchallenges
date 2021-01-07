import "./css/base.css";
import "./css/tailwind.css";
import Input from "./components/Input.js";

function App() {
  return (
    <div className="mx-16 my-8">
      <h1>Regular</h1>
      <Input placeholder="Placeholder" />
      <h1>Error</h1>
      <Input placeholder="Placeholder" error />
      <h1>Disabled</h1>
      <Input placeholder="Placeholder" disabled />
      <h1>helperText="Some Text"</h1>
      <Input placeholder="Placeholder" helperText="Some Text" />
      <h1>helperText="Some Text" error </h1>
      <Input placeholder="Placeholder" helperText="Some Text" error />
      <h1>startIcon="phone"</h1>
      <Input placeholder="Placeholder" startIcon="phone" />
      <h1>startIcon="phone" error</h1>
      <Input placeholder="Placeholder" startIcon="phone" error />
      <h1>endIcon="lock"</h1>
      <Input placeholder="Placeholder" endIcon="lock" />
      <h1>endIcon="lock" error</h1>
      <Input placeholder="Placeholder" endIcon="lock" error />
      <h1>value="Text" </h1>
      <Input placeholder="Placeholder" value="Text" />
      <h1>size="sm" </h1>
      <Input placeholder="Placeholder" size="sm" />
      <h1>fullWidth</h1>
      <Input placeholder="Placeholder" fullWidth />
      <h1>nultiline</h1>
      <Input placeholder="Placeholder" multiline rows="4" />
      <Input placeholder="Placeholder" multiline rows="4" error/>
    </div>
  );
}

export default App;
