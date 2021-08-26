import Citations from '../components/Citations.js';
import Tech from '../components/Tech.js';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

  export default function Resources() {
    return (
      <div className="bg-white">
        <NavBar />
        <Tech />
        <Citations/>
        <Footer />
      </div>
    )
  }
