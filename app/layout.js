import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import MainFooter from "./components/footer/MainFooter";

// Import fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-playfair"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // choose weights you need
  variable: "--font-roboto"
});

export const metadata = {
    title: "Vills Dairy | Delicious Milk Drinks",
    description: "Discover the creamy taste of Vills Dairy. Refreshing milk drinks in rich chocolate, smooth vanilla, and sweet strawberry flavors. Pure taste, pure happiness.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
                <Header />
                {children}
                <MainFooter />
            </body>
        </html>
    );
}
