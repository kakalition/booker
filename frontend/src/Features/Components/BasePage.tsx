import SidebarComponent from '../../Components/Sidebar/SidebarComponent';
import PathContext from '../../Context/PathContext';

export default function BasePage(props: any) {
  const { path, children } = props;

  return (
    <PathContext.Provider value={path}>
      <div className="flex h-screen w-screen flex-row">
        <div className="h-full w-[18%]">
          <SidebarComponent />
        </div>
        <div className="h-full w-[80%]">
          {children}
        </div>
      </div>
    </PathContext.Provider>
  );
}
