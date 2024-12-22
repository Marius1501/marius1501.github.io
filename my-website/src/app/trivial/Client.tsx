"use client";

import { notFound, useSearchParams } from "next/navigation";

export default function page() {
  const secret = useSearchParams().get("secret");

  if (secret === "true") {
    return (
      <div>
        <h1>Secret Page</h1>
        <p>This is a secret page</p>
      </div>
    );
  } else {
    return notFound();
  }
}
