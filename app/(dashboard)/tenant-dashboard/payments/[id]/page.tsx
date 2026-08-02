import { getSinglePaymentAction } from "./_actions/getSinglePaymentAction";

export default async function PaymentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await getSinglePaymentAction(id);

  const payment = response.data?.payment;

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Payment Details
      </h1>

      <div className="space-y-4 rounded-xl border p-6">
        <p>
          <strong>Property:</strong>{" "}
          {payment.rentalRequest.property.title}
        </p>

        <p>
          <strong>Amount:</strong> ৳
          {Number(payment.amount).toLocaleString()}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {payment.status}
        </p>

        <p>
          <strong>Provider:</strong>{" "}
          {payment.provider}
        </p>

        <p>
          <strong>Transaction ID:</strong>{" "}
          {payment.transactionId}
        </p>

        <p>
          <strong>Paid At:</strong>{" "}
          {payment.paidAt
            ? new Date(
                payment.paidAt
              ).toLocaleString()
            : "-"}
        </p>

        <p>
          <strong>Move In Date:</strong>{" "}
          {new Date(
            payment.rentalRequest.moveInDate
          ).toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}