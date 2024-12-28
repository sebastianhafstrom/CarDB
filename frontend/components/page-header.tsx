import Link from "next/link";
import PageHeaderAdmin from "./page-header-admin";
import PageHeaderAuth from "./page-header-auth";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

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
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/cars">Cars</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/brands">Brands</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <PageHeaderAdmin />
        </NavigationMenuList>
      </NavigationMenu>
      <PageHeaderAuth />
    </div>
  );
}
