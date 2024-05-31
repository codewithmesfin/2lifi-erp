/* eslint-disable react/no-children-prop */

import Footer from "./public/footer";
import PublicNavbar from "./public/navbar";



interface PROPS {
    children: any;
}

export default function Layout({ children }: PROPS) {
    return <div 
    // className="bg-[#0a0e17]"
    >
        <PublicNavbar />
        {children}
        <Footer/>
    </div>
}