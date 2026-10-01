import { CreditCard, CalendarClock, TrendingUp } from "lucide-react";
import type { ExpenseStats, ExpensePeriod } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

const periodIcons: Record<ExpensePeriod, typeof CreditCard> = {
    Daily: CalendarClock,
    Monthly: CreditCard,
    Yearly: TrendingUp,
}

const periodAccent: Record<ExpensePeriod, string> = {
    Daily: "from-[#8C7355] to-[#D7CBB8]",
    Monthly: "from-neutral-800 to-neutral-300",
    Yearly: "from-neutral-500 to-neutral-200",
}

export default function StatCardExpense({ period, total } : ExpenseStats) {
    const Icon = periodIcons[period]
    const accent = periodAccent[period]

  return (
    <div className="flex h-full min-h-36 flex-col justify-between rounded-2xl border border-card-border bg-card-background p-5 cursor-pointer transition-shadow duration-500 ease-in-out hover:border-card-border-hover hover:shadow-xl">
        <div className="flex items-start justify-between gap-3">
            <p className="font-plus text-sm font-medium leading-5 text-secondary">Expense {period}</p>
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-card-border text-secondary">
                <Icon size={18} strokeWidth={1.75} />
            </div>
        </div>
        <div className="mt-6">
            <p className="font-plus text-3xl font-bold tracking-tight text-primary">
                {formatCurrency(total)}
            </p>
            <div className={`mt-4 h-1.5 w-full rounded-full bg-linear-to-r ${accent}`} />
        </div>
    </div>
  )
}


