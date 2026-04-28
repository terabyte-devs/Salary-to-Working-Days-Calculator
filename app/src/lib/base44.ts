import { createClient } from "@base44/sdk";

const appId = import.meta.env.VITE_BASE44_APP_ID;

let base44: ReturnType<typeof createClient> | null = null;

if (appId) {
  base44 = createClient({ appId });
}

export async function lookupItemWithAI(itemName: string): Promise<string> {
  if (!base44) {
    // Fallback: just return the item name after a simulated delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(itemName), 600);
    });
  }

  try {
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `Given the user search term "${itemName}", return only the most accurate, clean product name (no extra text). Example: "nike air max" → "Nike Air Max".`,
      add_context_from_internet: true,
    });
    if (typeof result === "string") {
      return result.trim() || itemName;
    }
    return itemName;
  } catch {
    return itemName;
  }
}
