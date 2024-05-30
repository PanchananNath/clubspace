"use client";
import Link from "next/link";

function SideBarItem(props: {
  icon: any;
  text: String;
  route: any;
  pathname?: any;
}) {
  let active = false;
  return (
    <li className="m-1 p-3 h-fill w-52 flex">
      <span
        className={
          props.pathname.startsWith(props.route)
            ? "h-fill w-2 bg-white rounded-xl mr-3"
            : "h-fill w-2 mr-3"
        }
      ></span>
      <Link
        href={props.route}
        className="flex items-center"
        onClick={() => {
          active = true;
        }}
      >
        {props.icon}
        <span
          className={
            props.pathname.startsWith(props.route)
              ? "ml-4 text-white"
              : "ml-4 text-grey"
          }
        >
          {props.text}
        </span>
      </Link>
    </li>
  );
}

export default SideBarItem;
