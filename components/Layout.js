import PagesHeader from "./PagesHeader";

const Layout = ({ children }) => {
    return ( 
        <div className="">
            <PagesHeader />
            <main className="main">
                <div className="px-4 cursor-pointer md:hidden inline" id="burger">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                </div>
                { children }
            </main>
        </div>
     );
}
 
export default Layout;