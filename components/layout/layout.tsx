/* eslint-disable react/no-children-prop */

import { useRouter } from "next/router";
import Footer from "./public/footer";
import PublicNavbar from "./public/navbar";



interface PROPS {
    children: any;
}

export default function Layout({ children }: PROPS) {
    const navigator=useRouter()

    return <div 
    // className="bg-[#0a0e17]"
    >
        <PublicNavbar />
        {children}
        <Footer/>
    </div>
}