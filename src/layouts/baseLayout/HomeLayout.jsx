import Footer from './Footer';
import Header from './Header';

function HomeLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default HomeLayout;