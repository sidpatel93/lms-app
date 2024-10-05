import { Logo } from "./Logo";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flec flec-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
    </div>
  );
};
