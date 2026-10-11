export type ExpensePeriod = 'Daily' | 'Monthly' | 'Yearly'

export type ExpenseStats = {
    period: ExpensePeriod;
    total: number;
}

export type Ciclo = 'Mensual' | 'Anual';
