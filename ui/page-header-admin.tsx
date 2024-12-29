import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/ui/components/navigation-menu";
import Link from "next/link";

export default async function PageHeaderAdmin({}) {
  //const user = await getCurrentUser();

  //if (!user || user) {
  //  return null;
  //}

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="/admin/cars">Admin</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
