import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const balance: Balance = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    const transactions = await this.find();

    transactions.forEach(transaction => {
      balance[transaction.type] += Number(transaction.value);
    });

    return { ...balance, total: balance.income - balance.outcome };
  }
}

export default TransactionsRepository;
