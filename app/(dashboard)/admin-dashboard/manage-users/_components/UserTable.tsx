/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { updateUserStatus } from "@/app/service/adminService";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "ACTIVE" | "BANNED";
};

export default function UserTable({
  users,
  token,
}: {
  users: User[];
  token: string;
}) {
  const [data, setData] = useState(users);

  const handleStatus = async (user: User) => {
    try {
      const newStatus = user.status === "ACTIVE" ? "BANNED" : "ACTIVE";

      await updateUserStatus(user.id, newStatus, token);

      setData((prev) =>
        prev.map((item) =>
          item.id === user.id
            ? {
                ...item,
                status: newStatus,
              }
            : item,
        ),
      );

      toast.success("User status updated");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead>Email</TableHead>

            <TableHead>Role</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>

              <TableCell>{user.email}</TableCell>

              <TableCell>
                <Badge>{user.role}</Badge>
              </TableCell>

              <TableCell>
                <Badge
                  variant={user.status === "ACTIVE" ? "default" : "destructive"}
                >
                  {user.status}
                </Badge>
              </TableCell>

              <TableCell>
                <Button
                  size="sm"
                  variant={user.status === "ACTIVE" ? "destructive" : "default"}
                  onClick={() => handleStatus(user)}
                >
                  {user.status === "ACTIVE" ? "Ban" : "Unban"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
