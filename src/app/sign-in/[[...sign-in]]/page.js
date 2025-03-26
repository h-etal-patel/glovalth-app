
import { SignIn } from "@clerk/nextjs";

export default function signInPage() {
  return (
    <>
      <h1>Welcome to my sign in page</h1>
      <SignIn />
    </>
  );
}
