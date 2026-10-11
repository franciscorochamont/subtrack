import { Plus } from "lucide-react";

type FloatingAddButtonProps = {
    onClick: () => void;
}

export default function FloatingAddButton({ onClick } : FloatingAddButtonProps) {
    return (
        <button
            type="button"
            aria-label="Agregar suscripcion"
            className="bg-primary w-14 h-14 rounded-full
            flex items-center justify-center
            fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
            shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
            transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            <Plus size={24} className="text-bg-icons" />
        </button>
    )
}
