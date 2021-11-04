import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Logo from "./Logo";

const AppLayout = ( {children} ) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr,auto]'>

      <header>
        <ContentLayout>
          <Logo/>
        </ContentLayout>
      </header>

      <main>
        <ContentLayout>
          {children}
        </ContentLayout>
      </main>

      <footer>
        <ContentLayout>
          <Footer/>
        </ContentLayout>
      </footer>
    </div>
  );
}
export default AppLayout;