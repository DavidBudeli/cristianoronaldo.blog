import { redirect } from "next/navigation";
import { externalLinks } from "@/data/external-links";

export default function GoalsPage() {
  redirect(externalLinks.perplexityRonaldoGoals);
}
