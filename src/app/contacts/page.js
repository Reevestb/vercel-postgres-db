import { sql } from "@vercel/postgres";

export default async function ContactsPage() {
  const contacts = (await sql`SELECT * FROM contacts_nb`).rows;
  return (
    <main main className="flex min-h-screen flex-col items-center ">
      <h1>Contacts List</h1>
      {contacts.map((data) => (
        <div key={data.id}>
          <h1>{data.username}</h1>
          <h2>{data.location}</h2>
          <h2>{data.role}</h2>
        </div>
      ))}
    </main>
  );
}
