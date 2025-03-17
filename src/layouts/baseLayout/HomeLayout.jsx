import Header from './Header';

function HomeLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default HomeLayout;