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

  payments
    .sort((payment) => (payment.type !== PAYMENT_TYPE.CASH ? -1 : 1))
    .map((payment) => {
      if (deposit >= total) throw new Error('OverCharge');
      switch (payment.type) {
        case PAYMENT_TYPE.CASH:
          deposit += payment.amount || 0;
          break;
        case PAYMENT_TYPE.COUPON:
          payment.percentage != null
            ? (deposit += Math.floor(total * (payment.percentage / 100)))
            : (deposit += payment.amount || 0);
          break;
        default:
          throw new Error('InvalidPaymentType');
      }
    });
  if (total > deposit) throw new Error('Shortage');

  const isCoupon = !payments.some((payment) => payment.type !== PAYMENT_TYPE.COUPON);
  if (isCoupon) return { total, deposit, change: 0 };

  return { total: total, deposit: deposit, change: deposit - total };
}
