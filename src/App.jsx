import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {


  return (
    <div className="container">
      <Navbar />

      <ItemListContainer greeting="Hola Tutor!" />
    </div>
  )
}

export default App;