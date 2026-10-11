import { House, Trash } from "lucide-react"
import { formatCurrency } from "../utils/formatCurrency"
import type { Suscription } from "../types/index"

type SuscriptionCardsProps = {
    suscription: Suscription;
    onDelete: (id: number) => void;
}

export default function SuscriptionCards({ suscription, onDelete }: SuscriptionCardsProps) {

    return (
        <div className="w-full bg-cards rounded-xl p-4
            border border-cards-border hover:bg-hover hover:border-hover-border
            hover:shadow-lg transition-all"
        >
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <House size={24} />
                    <div>
                        <p className="font-plus font-semibold text-lg text-primary">{suscription.name}</p>
                        <p className="font-plus text-title-secondary text-xs font-medium">{suscription.cycle}</p>
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <p className="font-plus text-lg text-primary font-semibold">{formatCurrency(suscription.amount)}</p>
                    <button
                        type="button"
                        onClick={() => onDelete(suscription.id)}
                        aria-label={`Eliminar ${suscription.name}`}
                        className="text-secondary hover:text-red-500 transition-colors cursor-pointer"
                    >
                        <Trash size={20} />
                    </button>
                </div>
            </div>
            <div className="border-t border-border-separator mt-5 pt-5">
                <p className="text-title-secondary font-plus font-medium text-xs">Próximo cobro</p>
                <p className="text-sm font-plus text-primary font-semibold">{suscription.fechaCobro}</p>
            </div>
        </div>
    )
}
