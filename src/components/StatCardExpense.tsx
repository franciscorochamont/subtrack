import { CreditCard, CalendarClock, TrendingUp, type LucideIcon } from "lucide-react";
import type { ExpenseStats, ExpensePeriod } from "../types";
import { formatCurrency } from "../utils/formatCurrency";

const periodIcons: Record<ExpensePeriod, LucideIcon> = {
    Daily: CalendarClock,
    Monthly: CreditCard,
    Yearly: TrendingUp,
}

const periodLabels: Record<ExpensePeriod, string> = {
    Daily: 'Gasto diario',
    Monthly: 'Gasto mensual',
    Yearly: 'Gasto anual',
}

export default function StatCardExpense({ period, total } : ExpenseStats) {
    const Icon = periodIcons[period]

  return (
    <div className="bg-cards hover:bg-hover border border-cards-border
        hover:border-hover-border hover:shadow-xl transition-all duration-500 ease-in-out p-4 rounded-xl">
        <div className="flex justify-between items-center">
            <p className="text-title-secondary text-sm font-plus font-semibold">{periodLabels[period]}</p>
            <div className="w-10 h-10 border border-cards-border p-2 rounded-xl flex items-center justify-center">
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
