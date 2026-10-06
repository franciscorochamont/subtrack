import Header from "./components/Header";
import StatCardExpense from "./components/StatCardExpense";
import SuscriptionCards from "./components/SuscriptionCards";
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
        <main className="flex flex-col gap-8 mt-10">
            {/* CARDS TOTALES */}
            <div>
                <p className="font-plus text-title-secondary text-sm uppercase">Resumen financiero</p>
                <p className="text-primary font-bold font-plus text-3xl mt-0.5">Tus suscripciones</p>
                <div className="grid gap-4 md:gap-4 md:grid-cols-3 mt-8">
                    {stats.map((stat) => (
                        <StatCardExpense
                            key={stat.period}
                            period={stat.period}
                            total={stat.total}
                        />
                    ))}
                </div>
            </div>
            {/* CARDS SUSCRIPCIONES */}
            <div className="flex flex-col">
                <p className="font-plus text-title-secondary text-sm uppercase">Gestiona tus gastos</p>
                <p className="text-primary font-bold font-plus text-3xl mt-0.5">Todas tus suscripciones</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
                    <SuscriptionCards />
                </div>
            </div>
        </main>
    </div>

  )
}

export default App
