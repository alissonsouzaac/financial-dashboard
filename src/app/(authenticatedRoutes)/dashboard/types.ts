export interface Transaction {
    date: number;
    amount: string;
    transaction_type: string;
    currency: string;
    account: string;
    industry: string;
    state: string;
  }
  
export interface Filters {
    startDate: Date | null;
    endDate: Date | null;
    selectedAccount: string | null;
    selectedIndustry: string | null;
    selectedState: string | null;
  }