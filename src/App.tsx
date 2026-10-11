import Header from "./components/Header";
import FloatingAddButton from "./components/FloatingAddButton";
import StatCardExpense from "./components/StatCardExpense";
import SuscriptionCards from "./components/SuscriptionCards";
import type { ExpenseStats, Suscription } from './types/index';
import { useState } from "react";
import Modal from "./components/Modal";

function App() {

    const stats: ExpenseStats[] = [
        { period: 'Monthly', total: 0, },
        { period: 'Daily', total: 0, },
        { period: 'Yearly', total: 0, },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [suscriptions, setSuscriptions] = useState<Suscription[]>([])

    function handleAddSuscription(newSuscription: Suscription) {
        setSuscriptions(prev => [...prev, newSuscription])
        setIsModalOpen(false)
    }

    function handleDeleteSuscription(id: number) {
        setSuscriptions(prev => prev.filter(suscription => suscription.id !== id))
    }

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <Header />
        <main className="flex flex-col gap-8 mt-10 relative">
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
                    {suscriptions.length === 0 ? (
                        <p className="col-span-full text-center font-plus text-title-secondary py-10">
                            Aún no tienes suscripciones. Agrega una con el botón +.
                        </p>
                    ) : (
                        suscriptions.map((suscription) => (
                            <SuscriptionCards
                                key={suscription.id}
                                suscription={suscription}
                                onDelete={handleDeleteSuscription}
                            />
                        ))
                    )}
                </div>
            </div>
        </main>
      </div>
        <FloatingAddButton
            onClick={() => setIsModalOpen(true)}
        />
        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddSuscription}
        />
    </div>

  )
}

export default App
