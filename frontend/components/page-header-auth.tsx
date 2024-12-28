import { signIn, signOut } from "@/auth";
import { getCurrentUser } from "@/lib/session";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default async function PageHeaderAuth({}) {
  const user = await getCurrentUser();

  return (
    <>
      {user && (
        <p>
          Welcome back, <b>{user.name}</b>!
        </p>
      )}
      <NavigationMenu>
        <NavigationMenuList>
          {user ? (
            <NavigationMenuItem className="ml-auto">
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Signout</button>
              </form>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem className="ml-auto">
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <button type="submit">Signin with Google</button>
              </form>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
