import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"
type LayoutProps = {
  children: React.ReactNode,
  title?: string
}

const Layout:React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}-Mini E-commerce` : 'Mini E-commerce'}</title>
      </Head>
      <Navbar/>
      <div className="min-h-screen bg-white">{children}</div>
      <Footer />

    </>
  )
}

export default Layout