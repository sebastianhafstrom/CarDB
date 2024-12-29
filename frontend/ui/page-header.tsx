import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/ui/components/navigation-menu";
import Link from "next/link";
import PageHeaderAdmin from "./page-header-admin";
import PageHeaderAuth from "./page-header-auth";

export default function PageHeader({}) {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <NavigationMenu className="mr-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Hem</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/cars">Bilar</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/brands">Bilmärken</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <PageHeaderAdmin />
        </NavigationMenuList>
      </NavigationMenu>
      <PageHeaderAuth />
    </div>
  );
}
