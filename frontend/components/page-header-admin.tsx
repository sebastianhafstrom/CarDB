import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default async function PageHeaderAdmin({}) {
  //const user = await getCurrentUser();

  //if (!user || user) {
  //  return null;
  //}

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="/admin">Admin</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
