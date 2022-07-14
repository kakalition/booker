import SidebarComponent from '../../Components/Sidebar/SidebarComponent';

export default function BasePage(props: any) {
  const { children } = props;

  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="h-full w-[20%]">
        <SidebarComponent />
      </div>
      <div className="h-full w-[80%]">
        {children}
      </div>
    </div>
  );
}
