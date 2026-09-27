import { CreditCard } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-3">
        <div className="w-12 border-2 p-2 flex items-center justify-center rounded-xl">
            <CreditCard />
        </div>
        <div>
            <p className="text-xl text-primary font-bold tracking-tight font-google">
                SubTrack
                </p>
            <p className="text-sm text-secondary font-google">
                Tu dinero, bajo control.
            </p>
        </div>
    </header>
  )
}



