import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import AddSubscriptionForm from "./AddSubscriptionForm";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) dialog.showModal();
        if (!isOpen && dialog.open) dialog.close();

    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            className="w-[calc(100%-2.5rem)] max-w-md m-auto p-0
                bg-cards rounded-2xl border border-cards-border
                shadow-[0_24px_48px_var(--color-shadow-modal)]
                backdrop:bg-bg-modal backdrop:backdrop-blur-sm"
        >
            <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="uppercase text-xs font-plus text-title-secondary
                            font-semibold tracking-wide">
                            Nueva suscripción
                        </p>
                        <p className="text-2xl font-plus font-bold tracking-tight text-primary">
                            Añadir servicio
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar modal"
                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl
                            border border-cards-border text-secondary
                            hover:bg-hover hover:border-hover-border hover:text-primary
                            transition-colors cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                </div>
                <AddSubscriptionForm />
            </div>
        </dialog>
    );
}
