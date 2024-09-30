import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        {" "}
        New User{" "}
      </Link>
      <Suspense fallback={<p>Loading... </p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
