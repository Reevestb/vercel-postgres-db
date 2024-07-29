import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function FormPage() {
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const location = formData.get("location");
    const role = formData.get("role");

    await sql`INSERT INTO contacts_nb (username, location, role) VALUES (${username}, ${location}, ${role})`;
    revalidatePath("/contacts");
    redirect("/contacts");
  }
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1>Form</h1>
      <form className="flex flex-col" action={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          placeholder="Your Username"
          className="text-black"
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          required
          className="text-black"
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          placeholder="Your role"
          required
          className="text-black"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
