import { Calendar, House, Trash } from "lucide-react"
import { formatCurrency } from "../utils/formatCurrency"

export default function SuscriptionCards() {

    return (
        <div className="w-full bg-cards rounded-xl p-4
            border border-cards-border hover:bg-hover hover:border-hover-border
            hover:shadow-lg transition-all"
        >
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <House size={24} />
                    <div>
                        <p className="font-plus font-semibold text-lg text-primary">Netflix</p>
                        <p className="font-plus text-title-secondary text-xs font-medium">Mensual</p>
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <p className="font-plus text-lg text-primary font-semibold">{formatCurrency(199)}</p>
                    <button
                        type="button"
                        aria-label="Eliminar Netflix"
                        className="text-secondary hover:text-red-500 transition-colors cursor-pointer"
                    >
                        <Trash size={20} />
                    </button>
                </div>
            </div>
            <div className="flex justify-between border-t border-border-separator mt-5 pt-5">
                <div>
                    <p className="text-title-secondary font-plus font-medium text-xs">Próximo cobro</p>
                    <p className="text-sm font-plus text-primary font-semibold">Dom 12 Oct</p>
                </div>
                <div className="flex items-center justify-center gap-2 bg-bg-urgent
                    border border-border-urgent rounded-sm p-2">
                    <Calendar size={16} className="text-text-urgent" />
                    <p className="font-plus text-xs text-text-urgent font-medium">Se renueva en 10 días</p>
                </div>
            </div>
        </div>
    )

}
