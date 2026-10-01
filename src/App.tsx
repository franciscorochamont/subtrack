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
    <div className="min-h-screen bg-background px-5 py-8 md:px-8 md:py-10 xl:px-x xl:py-y">
        <div className="mx-auto w-full max-w-5xl">
            <Header />
            <main className="mt-10">
                <p className="font-plus text-secondary text-sm">Financial summary</p>
                <p className="text-primary font-bold font-plus text-xl">Total Expenses</p>
                <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
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
    </div>

  )
}

export default App
