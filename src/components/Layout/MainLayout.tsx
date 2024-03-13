import { Navbar } from "../Elements";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar>{children}</Navbar>
    </div>
  );
};
