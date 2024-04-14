import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/mode-toggle';

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="flex justify-between p-1">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/cars">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Cars
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/brands">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Brands
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <ModeToggle />
            </div>
            <hr />
            <div className="container mx-auto py-10">
                <Outlet />
            </div>

            <TanStackRouterDevtools />
        </>
    ),
});
