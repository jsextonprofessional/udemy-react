import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>TO DOs:</h1>
      <Todo text="Finish Udemy course" />
      <Todo text="Incorporate TS" />
      <Todo text="Spin up Vue project" />
      <Todo text="Load React components into Vue project" />
      <Todo text="Load Vue components into React project" />
      <Todo text="Collab w/ team" />
      <Todo text="Show Jateen" />
      <Todo text="Synthesize Jateen's feedback into next steps" />
    </div>
  );
}

export default App;
