import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row gap-5 justify-end flex-wrap min-w-max text-lg p-5 pr-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/form"}>Form</Link>
        <Link href={"/contacts"}>Contacts</Link>
        <Link href={"/useState"}>useState</Link>
        <Link href={"/useReducer"}>useReducer</Link>
      </nav>
    </>
  );
}
