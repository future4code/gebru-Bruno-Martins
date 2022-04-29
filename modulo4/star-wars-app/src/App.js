import React, {useState} from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("list")

  function selecPage() {
    if (currentPage === "list") {
      return <CharacterListPage/>
    } else {
      return <CharacterDetailPage/>
    }
  }

  return (
    <div>
      {selecPage()}
    </div>
  )
}

export default App