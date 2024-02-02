import transactionsData from '@/app/utils/transactions.json';

export default function getTransactionsData( res?: any) {
  const transactions = transactionsData;
  res.status(200).json(transactions);
}
