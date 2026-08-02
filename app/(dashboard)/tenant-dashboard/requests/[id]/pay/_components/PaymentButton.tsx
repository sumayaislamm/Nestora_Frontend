

"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createPaymentAction } from "../_actions/createPaymentAction";

export default function PaymentButton({
  rentalRequestId,
}: {
  rentalRequestId: string;
}) {
  async function handlePayment() {
    const res = await createPaymentAction(rentalRequestId, "STRIPE");

    console.log("FULL RESPONSE:", res);

    if (!res.success) {
      toast.error(res.errorDetails || res.message);
      return;
    }

    const checkoutUrl = res.data?.payment?.checkoutUrl;

    const paymentId = res.data?.payment?.payment?.id;

    console.log("CHECKOUT URL:", checkoutUrl);
    console.log("PAYMENT ID:", paymentId);

    if (!checkoutUrl || !paymentId) {
      toast.error("Payment information missing");
      return;
    }

    localStorage.setItem("paymentId", paymentId);
    // Add paymentId to Stripe redirect URL
    const url = new URL(checkoutUrl);

    url.searchParams.set("paymentId", paymentId);

    window.location.href = url.toString();
  }

  return (
    <Button onClick={handlePayment} className="w-full">
      Pay with Stripe
    </Button>
  );
}
