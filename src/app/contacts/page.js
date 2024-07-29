import { sql } from "@vercel/postgres";
import DelContact from "@/components/DelCon";

export default async function ContactsPage() {
  const contacts = (await sql`SELECT * FROM contacts_nb`).rows;
  return (
    <main className="flex min-h-screen flex-col items-center  gap-5 ">
      <h1>Contacts List</h1>
      <div className="flex flex-col-reverse gap-5">
        {contacts.map((data) => (
          <div key={data.id}>
            <h1>{data.username}</h1>
            <h2>{data.location}</h2>
            <h2>{data.role}</h2>
            <DelContact username={data.username} />
          </div>
        ))}
      </div>
    </main>
  );
}
