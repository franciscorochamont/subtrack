import { CreditCard, CalendarClock, TrendingUp } from "lucide-react";
import type { ExpenseStats, ExpensePeriod } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

const periodIcons: Record<ExpensePeriod, typeof CreditCard> = {
    Daily: CalendarClock,
    Monthly: CreditCard,
    Yearly: TrendingUp,
}

export default function StatCardExpense({ period, total } : ExpenseStats) {
    const Icon = periodIcons[period]

  return (
    <div className="bg-card-background max-w-2xl border border-card-border
        hover:border-card-border-hover hover:shadow-xl transition-shadow duration-500 ease-in-out cursor-pointer p-4 rounded-xl">
        <div className="flex justify-between items-center">
            <p className="text-secondary text-sm font-plus font-semibold">Expense {period}</p>
            <div className="w-10 h-10 border border-card-border p-2 rounded-xl flex items-center justify-center">
                <Icon 
                    size={20}
                />
            </div>
        </div>
        <p className="text-3xl text-primary font-bold font-plus">
            {formatCurrency(total)}
        </p>
    </div>
  )
}


