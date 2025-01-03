import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bliss",
  description: "Shop with smile",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
