import { mkdirSync, writeFileSync } from "node:fs";

// One cold email of about 120 words (subject line included) from a
// bookkeeping service to a busy plumber. Written to /output/entry.txt
// as UTF-8 text with no trailing newline.
const EMAIL = `Subject: Your books, done before your van leaves at 6

Hi,

I know your day starts before 6, the van is loaded by 7, and the paperwork waits until the kids are in bed. That is the bit I take off your plate.

I am Sarah from Ledgerline Bookkeeping. We keep the books for 14 local trades: invoices chased, receipts sorted, VAT filed, so nothing lands on your kitchen table at 10pm.

First step is small. Send me last month's invoices and I will reconcile them for £45, flat. No contract, no monthly fee until you say so.

If it helps, we keep going. If not, the books are tidy and you are free.

Could I look at October's invoices this week?

Sarah`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMAIL, "utf8");
console.log(
  `Wrote /output/entry.txt (${EMAIL.length} chars, ${EMAIL.split(/\s+/).filter(Boolean).length} words)`,
);
