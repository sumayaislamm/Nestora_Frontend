import { cookies } from "next/headers";

import { getAllUsers } from "@/app/service/adminService";

import UserTable from "./_components/UserTable";

export default async function ManageUsersPage() {
  const cookieStore = await cookies();

  const token = `Bearer ${cookieStore.get("accessToken")?.value}`;

  const result = await getAllUsers(token);

  const users = result.data.users;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manage Users</h1>

        <p className="text-muted-foreground">
          View and manage all registered users
        </p>
      </div>

      <UserTable users={users} token={token} />
    </div>
  );
}
