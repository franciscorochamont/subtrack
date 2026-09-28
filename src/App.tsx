import Header from "./components/Header";
import StatCardExpense from "./components/StatCardExpense";
import type { ExpenseStats } from './types/index';

function App() {

    const stats: ExpenseStats[] = [
        { period: 'Monthly', total: 0, },
        { period: 'Daily', total: 0, },
        { period: 'Yearly', total: 0, },
    ]

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8 lg:px-28">
        <Header />
        <main className="mt-10">
            <p className="font-plus text-secondary text-sm">Financial summary</p>
            <p className="text-primary font-bold font-plus text-xl">Total Expenses</p>
            <div className="grid gap-4 md:gap-4 md:grid-cols-3 mt-8">
                {stats.map((stats) => (
                    <StatCardExpense 
                        key={stats.period}
                        period={stats.period}
                        total={stats.total}
                    />
                ))}
            </div>
        </main>
    </div>

  )
}

export default App
