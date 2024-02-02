'use client'
import React, { useEffect, useState } from 'react';
import transactionsData from '@/app/utils/transactions.json';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import FilterField from '@/app/components/FilterField/FilterField';
import Card from '@/app/components/Card/Card';
import { Filters, Transaction } from './types';
import { CardsContainer, DashboardContainer, FiltersContainer, FiltersDate, LabelDate } from './styles';
import useIsAuthenticated from '@/app/shared/hooks/useAuthenticated';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filters, setFilters] = useState<Filters>({
    startDate: null,
    endDate: null,
    selectedAccount: null as null | string,
    selectedIndustry: null as null | string,
    selectedState: null as null | string,
  });

  useIsAuthenticated();

  useEffect(() => {
    const mockTransactions = transactionsData as Transaction[]
    setTransactions(mockTransactions);
  }, [transactions]);

  const filteredTransactions = transactions.filter(transaction => {
    const isWithinDateRange = (
      (!filters.startDate || transaction.date >= filters.startDate.getTime()) &&
      (!filters.endDate || transaction.date <= filters.endDate.getTime())
    );

    const matchesAccount = !filters.selectedAccount || transaction.account === filters.selectedAccount;
    const matchesIndustry = !filters.selectedIndustry || transaction.industry === filters.selectedIndustry;
    const matchesState = !filters.selectedState || transaction.state === filters.selectedState;

    return isWithinDateRange && matchesAccount && matchesIndustry && matchesState;
  });

  const groupedTransactions = filteredTransactions.reduce((acc, transaction) => {
    const { transaction_type, amount } = transaction;

    if (transaction_type === 'deposit') {
      acc.depositCount += 1;
      acc.depositTotal += +amount;
    } else if (transaction_type === 'withdraw') {
      acc.withdrawCount += 1;
      acc.withdrawTotal += +amount;
    }

    return acc;
  }, { depositCount: 0, depositTotal: 0, withdrawCount: 0, withdrawTotal: 0 });

  const clearFilters = () => {
    setFilters({
      startDate: null,
      endDate: null,
      selectedAccount: null,
      selectedIndustry: null,
      selectedState: null,
    });
  };

  const isValidDate = (value: string) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
  };

  const handleStartDateChange = (value: string) => {
    setFilters({
      ...filters,
      startDate: isValidDate(value) ? new Date(value) : null,
    });
  };

  const handleEndDateChange = (value: string) => {
    setFilters({
      ...filters,
      endDate: isValidDate(value) ? new Date(value) : null,
    });
  };

  const chartData = {
    labels: ['Finances'],
    datasets: [
      {
        label: 'Revenues',
        data: [groupedTransactions.depositCount],
        backgroundColor: ['forestgreen'], // 'Deposit' é 'forestgreen'
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [groupedTransactions.withdrawCount],
        backgroundColor: ['orangered'], // 'Withdraw' é 'orangered'
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
  };

  const totalValue = groupedTransactions.depositTotal + groupedTransactions.withdrawTotal;

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <FiltersContainer>
        <FiltersDate>
          <LabelDate>Start Date</LabelDate>
            <FilterField
              value={filters.startDate ? filters.startDate.toISOString().split('T')[0] : ''}
              onChange={handleStartDateChange}
              type="date"
            />
          </FiltersDate>
          <FiltersDate>
            <LabelDate>End Date</LabelDate>
            <FilterField
              value={filters.endDate ? filters.endDate.toISOString().split('T')[0] : ''}
              onChange={handleEndDateChange}
              type="date"
            />
        </FiltersDate>
        <FilterField label="Account" value={filters.selectedAccount} onChange={(value) => setFilters({ ...filters, selectedAccount: value })} />
        <FilterField label="Industry" value={filters.selectedIndustry} onChange={(value) => setFilters({ ...filters, selectedIndustry: value })} />
        <FilterField label="State" value={filters.selectedState} onChange={(value) => setFilters({ ...filters, selectedState: value })} />
        <IconButton onClick={clearFilters} color="default" aria-label="Clear Filters">
            <ClearIcon />
        </IconButton>
      </FiltersContainer>
      <CardsContainer>
        <Card title="Revenue" value={groupedTransactions.depositTotal} />
        <Card title="Expenses" value={groupedTransactions.withdrawTotal} color='orangered' />
        <Card title="Total" value={totalValue} color='deepskyblue' />
      </CardsContainer>
      <Bar data={chartData} options={options} width={400} height={200}/>
    </DashboardContainer>
  );
};

export default Dashboard;
