import { Inter } from 'next/font/google'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ServeUp!',
  description: 'Website to create game servers',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-bs-theme='dark'>
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
