import Counter from "./components/Counter";
import ColorChanger from "./components/Colorful";
import useDocumentTitle from "./hooks/useDocumentTitle";

function App() {
  useDocumentTitle("React Hooks Playground");

  return (
    <main>
      <h1 className="h1">React Hooks Playground</h1>

      <ColorChanger />
      <Counter />
    </main>
  );
}

export default App;