"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { confirmPaymentAction } from "./_actions/confirmPaymentAction";


export default function PaymentSuccessPage() {

  const searchParams = useSearchParams();


  useEffect(() => {

    async function confirmPayment() {

      const sessionId =
        searchParams.get("session_id");


      const paymentId =
        localStorage.getItem("paymentId");


      if (!paymentId || !sessionId) {
        console.log("Missing payment info");
        return;
      }


      const res =
        await confirmPaymentAction(
          paymentId,
          sessionId
        );


      console.log(
        "CONFIRM RESPONSE:",
        res
      );


      // remove after success
      localStorage.removeItem("paymentId");

    }


    confirmPayment();

  }, [searchParams]);


  return (
     <main className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
      <div className="rounded-xl border p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

        <p>Your payment has been received.</p>
      </div>
    </main>
  );
}