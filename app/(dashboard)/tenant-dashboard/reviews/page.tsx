"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createReview } from "@/app/service/reviewService";

export default function TenantReview() {
  const [propertyId, setPropertyId] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("accessToken");

      await createReview(
        {
          propertyId,
          rating,
          comment,
        },
        token!,
      );

      toast.success("Review submitted successfully");

      setPropertyId("");
      setComment("");
      setRating(5);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Submit Review</h1>

        <p className="text-muted-foreground">Share your rental experience</p>
      </div>

      <div className="space-y-4">
        <Input
          placeholder="Property ID"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
        />

        <Input
          type="number"
          min={1}
          max={5}
          placeholder="Rating 1-5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />

        <Textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit Review"}
        </Button>
      </div>
    </div>
  );
}
