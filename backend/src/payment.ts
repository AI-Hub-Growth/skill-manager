export async function processPayment(orderId: string, amount: number) {
  // payment gateway integration
  console.log(`Processing payment for order ${orderId}: $${amount}`);
  return { success: true, transactionId: `txn_${Date.now()}` };
}
