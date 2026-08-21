import { Suspense } from "react";
import PaymentSuccessContent from "./PaymentSuccessContent";

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
          <div className="rounded-xl border p-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-green-600">
              Processing Payment...
            </h1>

            <p>Please wait while we confirm your payment.</p>
          </div>
        </main>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}