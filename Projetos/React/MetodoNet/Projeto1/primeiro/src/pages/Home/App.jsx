import './App.css';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

function App() {
    const actionButtonProps={
      label: "Novo projeto",
      action: () => console.log('clique em novo Projeto')
    }
  return (
    <>
      <Header></Header>
      <PageTitle title="Projetos" actionButton={actionButtonProps}></PageTitle>
    </>
  );
}
export default App;
 