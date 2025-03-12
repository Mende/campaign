import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const npcs = await prisma.nPC.findMany();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">NPC List</h1>
      <ul className="mt-4 space-y-2">
        {npcs.map((npc) => (
          <li key={npc.id} className="border p-2 rounded-lg">
            <h2 className="text-lg font-semibold">{npc.name}</h2>
            <p>{npc.description}</p>
            {npc.characterSheetUrl && (
              <a
                href={npc.characterSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Character Sheet
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
