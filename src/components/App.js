import '../style/App.scss';
import Loader from './Loader';
import Header from './Header';
import HistoryBanner from './HistoryBanner';
import History from './History';
import WorthOfSeeingBanner from './WorthOfSeeingBanner';
import WorthOfSeeing from './WorthOfSeeing';
import WorthOfSeeingPart2 from './WorthOfSeeingPart2';
import WorthOfSeeingContextProvider from "../contexts/WorthOfSeeingContext";
import Attractions from "./Attractions";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <main>
        <HistoryBanner />
        <History />
        <WorthOfSeeingBanner />
        <WorthOfSeeingContextProvider>
          <WorthOfSeeing />
          <WorthOfSeeingPart2 />
        </WorthOfSeeingContextProvider>
        <Attractions />
      </main>
      <footer>
        <FooterBanner />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
