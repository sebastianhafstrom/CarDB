"use client";
import { logoutUser } from "@/api";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function PageHeader({}) {
  const { user, isLoggedIn, loading, refreshUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser(); // Your logout endpoint
      await refreshUser(); // Refresh auth context state
      router.push("/"); // Redirect to home page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) return;

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
          {isLoggedIn && user?.role === "admin" && (
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/admin">Admin</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      {user && (
        <p>
          Welcome back, <b>{user.email}</b>!
        </p>
      )}
      <NavigationMenu>
        <NavigationMenuList>
          {isLoggedIn ? (
            <NavigationMenuItem className="ml-auto">
              <button
                onClick={handleLogout}
                className={`${navigationMenuTriggerStyle()} px-4 py-2`}
              >
                Logout
              </button>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem className="ml-auto">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
