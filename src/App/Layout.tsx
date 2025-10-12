import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from './ScrollToTop';

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navigation />
            <main className="flex-grow">
                {children}
            </main>
        <Footer />
    </div>
  );
}

export default Layout;