import Index from "./routes"
import AppProvider from "./Context.jsx"

function App() {
  return (
    <AppProvider>
      <Index/>
    </AppProvider>
  )
}

export default App;