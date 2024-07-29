import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function DelContact({ username }) {
  async function HandleDelete() {
    "use server";
    await sql`DELETE FROM contacts_nb WHERE username = ${username} `;
    revalidatePath("/contacts");
    redirect("/contacts");
  }
  return (
    <>
      <form action={HandleDelete}>
        <button
          className="flex bg-red-600 rounded text-white items-center text-center
             w-fit justify-center p-1 text-xs hover:bg-red-200 hover:text-red-600"
          type="submit"
        >
          Delete
        </button>
      </form>
    </>
  );
}
