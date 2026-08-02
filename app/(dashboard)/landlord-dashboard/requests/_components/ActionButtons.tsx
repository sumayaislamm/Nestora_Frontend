"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateRentalStatusAction } from "../_actions/updateRentalStatusAction";

export default function ActionButtons({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function update(status: "APPROVED" | "REJECTED") {
    const res = await updateRentalStatusAction(id, status);

    if (res.success) {
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(res.message);
    }
  }

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        onClick={() => update("APPROVED")}
      >
        Approve
      </Button>

      <Button
        size="sm"
        variant="destructive"
        onClick={() => update("REJECTED")}
      >
        Reject
      </Button>
    </div>
  );
}