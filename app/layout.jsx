import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property.",
  keywords: ["rental", "find rental", "find properties"],
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <h1>Properties</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
};

export default MainLayout;
