export const metadata = {
    title: "ServeUp! Login",
    description: "Login page",
  };

export default function RootLayout({ children }) {
    return (
      <html lang="en" data-bs-theme="dark">
        <body>
          {children}
        </body>
      </html>
    );
  }