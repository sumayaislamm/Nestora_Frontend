export default function PaymentCancelPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
      <div className="rounded-xl border p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-red-600">
          Payment Cancelled
        </h1>

        <p className="text-muted-foreground">
          Your payment was not completed. You can try again from your dashboard.
        </p>

        <a
          href="/tenant-dashboard/requests"
          className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-white hover:opacity-90"
        >
          Back to Requests
        </a>
      </div>
    </main>
  );
}