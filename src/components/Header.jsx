import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row gap-5 justify-end flex-wrap min-w-max text-lg p-5 pr-10">
        <Link href={"/form"}>Form</Link>
        <Link href={"/contacts"}>Contacts</Link>
      </nav>
    </>
  );
}
