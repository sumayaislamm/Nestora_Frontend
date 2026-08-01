"use client";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import { deletePropertyAction } from "./_actions/deletePropertyAction";

export default function DeletePropertyButton({
  id,
}: {
  id: string;
}) {
  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete?"
      )
    )
      return;

    const res =
      await deletePropertyAction(id);

    if (res.success) {
      toast.success("Deleted");
      location.reload();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
}