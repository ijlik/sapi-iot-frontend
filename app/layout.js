import './globals.css';

export const metadata = {
  title: 'SmartLight Dashboard',
  description: 'Control WiZ lights from Next.js + FastAPI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
