import Carding from "./components/ui/carding";


function App() {
  const cardsInfo = [
    {
      id: 0,
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
      footer: 'Card Footer',
      src: './img/service2.png'
    },
    {
      id: 1,
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
      footer: 'Card Footer',
      src: './img/service2.png'
    },
  ]
  return (
    <>
      <Carding cards ={cardsInfo}></Carding>
    </>
  );
}

export default App;
