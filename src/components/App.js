import '../style/App.scss';
import Header from './Header';
import HistoryBanner from './HistoryBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HistoryBanner />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
