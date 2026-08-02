import PaymentButton from "./_components/PaymentButton";

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Payment
      </h1>

      <p>Rental Request ID</p>

      <p className="mb-8 font-semibold">
        {id}
      </p>

      <PaymentButton rentalRequestId={id} />
    </main>
  );
}