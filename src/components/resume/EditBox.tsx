import {   Edit, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function EditBox({ href, className }: { href: string; className?: string }) {
  return (
    <div
      className={`group-hover:rounded-md group-hover:opacity-100 opacity-0 group-hover:bg-black/10 absolute left-0 top-0 w-full h-full ${href}`}
    >
      <div className="flex items-center gap-2 absolute top-2/4 -translate-x-2/4 left-2/4 text-black -translate-y-2/4 bg-white/70 rounded-full p-1 ">
        <Link className="bg-white/100 hover:bg-black/30 rounded-full p-1" to={href}>
          <Edit size={20}/>
        </Link>
        {/* <button className="bg-white/100 hover:bg-black/30 rounded-full p-1">
          <Trash size={20}/>{" "}
        </button> */}
      </div>
    </div>
  );
}

export default EditBox;
