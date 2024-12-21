import Index from "./routes/index.jsx";
import AppProvider from "./Context.jsx";

function App() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
}

export default App;