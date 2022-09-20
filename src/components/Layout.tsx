export interface LayoutProps {
  navMenu: React.ReactNode;
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-4">
        {/* TODO: Make sticky on desktop view */}
        <div className="h-16 md:h-max sticky top-0">{props.navMenu}</div>
        <div className="md:col-span-3">{props.children}</div>
      </div>
    </>
  );
}

export default Layout;
