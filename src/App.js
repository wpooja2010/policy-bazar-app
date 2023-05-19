import './App.css';
import AedCard from './Component/AedCard';
import BasicPlan from './Component/BasicPlan';
import Filter from './Component/Filter';
import Nav from './Component/Nav';

function App() {
  return (
    <>
      <Nav />
      <Filter/>
      <AedCard/>
      <AedCard/>
      <AedCard/>
      <BasicPlan/>
    </>
  );
}

export default App;
