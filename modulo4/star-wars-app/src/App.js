import React, {useState} from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("list")
  const [detailsUrl, setDetailsUrl] = useState("")


 const goToDetailsPage = (url) => {
  setCurrentPage("details")
  setDetailsUrl(url)
 }

const goTolistPage = () => {
  setCurrentPage("list")
}

  function selecPage() {
    if (currentPage === "list") {
      return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
    } else {
      return <CharacterDetailPage goTolistPage={goTolistPage} url={detailsUrl} />
    }
  }

  

  return (
    <div>
      {selecPage()}
    </div>
  )
}

export default App