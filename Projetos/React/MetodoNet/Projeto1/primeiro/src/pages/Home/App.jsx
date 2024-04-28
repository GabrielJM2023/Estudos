import React from "react";
import Header from '../../components/Header'
import PageTitle from "../../components/PageTitle";
import ProjectTable from "../../containers/ProjectTable";
import { PROJECT_DATA } from './constants'

function App() {
  const actionButtonProps = {
    label: "Novo projeto",
    action: () => console.log("cliquei em novo projeto"),
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "800px", paddingTop: "48px" }}>
          <PageTitle title="Projetos" actionButton={actionButtonProps} />
          <ProjectTable projectData={PROJECT_DATA} />
        </div>
      </div>
    </>
  );
}

export default App;
