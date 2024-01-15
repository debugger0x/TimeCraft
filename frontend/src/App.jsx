import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="h-screen text-gray-900 bg-slate-200 grid grid-rows-[auto_1fr_auto] text-sm">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
