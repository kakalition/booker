export default function SidebarHeaderItemComponent(props: any) {
  const { icon, text } = props;

  return (
    <div className="flex w-full flex-row">
      <div className="flex w-[15%] justify-end">
        {icon}
      </div>
      <div className="flex w-[85%] flex-row">
        <div className="w-4" />
        <p className="font-roboto text-md text-gray-600">{text}</p>
      </div>
    </div>
  );
}
