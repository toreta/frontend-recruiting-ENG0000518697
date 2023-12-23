export type Invoice = {
  total: number;
};

export type Receipt = {
  total: number;
  deposit: number;
  change: number;
};

export type Payment = {
  type: 'CASH' | 'COUPON';
  percentage?: number;
  amount?: number;
};

const PAYMENT_TYPE = {
  CASH: 'CASH',
  COUPON: 'COUPON',
};

export function charge(invoice: Invoice, payments: Payment[]) {
  const total = invoice.total;
  let deposit = 0;

  payments.map((payment) => {
    if (deposit >= total) throw new Error('OverCharge');
    if (PAYMENT_TYPE.COUPON && payment.percentage != null) {
      deposit += Math.floor(total * (payment.percentage / 100));
    } else {
      deposit += payment.amount || 0;
    }
  });
  if (total > deposit) throw new Error('Shortage');

  const isCoupon = !payments.some((payment) => payment.type !== PAYMENT_TYPE.COUPON);
  if (isCoupon) return { total, deposit, change: 0 };

  return { total: total, deposit: deposit, change: deposit - total };
}
