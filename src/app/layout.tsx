import { Providers } from "./providers";
import Navbar from '../components/Navbar/Navbar'
import { RecoilRoot } from 'recoil'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers >
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
