import type { SubmitEvent } from "react";
import { cicloCobro } from "../data/ciclo";
import type { Ciclo, Suscription } from "../types/index";
import FormField from "./Form/FormField";
import Input from "./Form/Input";
import Select from "./Form/Select";

type AddSubscriptionFormProps = {
    onAdd: (suscription: Suscription) => void;
}

export default function AddSubscriptionForm({ onAdd }: AddSubscriptionFormProps) {

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = String(formData.get('nombre'));
        const amount = Number(formData.get('precio'));
        if (!name || Number.isNaN(amount) || amount <= 0) return;

        onAdd({
            id: Date.now(),
            name,
            amount,
            cycle: formData.get('ciclo') as Ciclo,
            fechaCobro: String(formData.get('fechacobro')),
        });
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FormField label="Nombre del servicio" htmlFor="nombre">
                <Input id="nombre" name="nombre" type="text" placeholder="ej: Disney+" required />
            </FormField>
            <FormField label="Precio" htmlFor="precio">
                <Input id="precio" name="precio" type="number" placeholder="$0.00" required />
            </FormField>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-3">
                <FormField label="Ciclo de cobro" htmlFor="ciclo" className="min-w-0">
                    <Select id="ciclo" name="ciclo" required>
                        {cicloCobro.map((cobro) => (
                            <option key={cobro} value={cobro}>
                                {cobro}
                            </option>
                        ))}
                    </Select>
                </FormField>
                <FormField label="Fecha de Cobro" htmlFor="fechacobro">
                    <Input id="fechacobro" name="fechacobro" type="date" required />
                </FormField>
            </div>
            <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-primary py-3.5
                            font-plus text-base font-semibold text-background
                            hover:bg-gray-btns active:scale-[0.98]
                            transition-all cursor-pointer"
            >
                Guardar suscripción
            </button>
        </form>
    )
}
