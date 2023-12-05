import Link from "next/link";
import React from "react";
import {
  RxDashboard,
  RxPerson,
} from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { FaFile } from "react-icons/fa6";

const Sidebar = ({ children }) => {
  const SidebarItem = ({ href, icon, label }) => (
    <Link href={href}>
      <div className="group relative inline-block">
        <div className="bg-black-100 cursor-pointer my-4 p-3 rounded-l inline-block transition-opacity">
          {icon}
        </div>
        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-0 left-1/2 transform -translate-x-1/2 bg-black-600 text-gray-500 p-2 rounded-md mt-2 text-xs bg-white">
          {label}
        </div>
      </div>
    </Link>
  );

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <SidebarItem href="/" icon={<RxPerson size={20} />} label="Profile" />
          <span className="border-b-[1px] border-black-200 w-full p-2"></span>
          <SidebarItem href="/dashboard" icon={<RxDashboard size={20} />} label="Dashboard" />
          <SidebarItem href="/files" icon={<FaFile size={20} />} label="File Explorer" />
          <SidebarItem href="/settings" icon={<FiSettings size={20} />} label="Settings" />
          <SidebarItem href="/" icon={<VscDebugDisconnect size={20} />} label="Disconnect" />
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
