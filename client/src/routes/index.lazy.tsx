import { Button } from '@/components/ui/button';
import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div className="flex flex-col gap-4">
            <Button asChild>
                <Link to="/cars">View all cars</Link>
            </Button>
            <Button asChild>
                <Link to="/brands">View all brands</Link>
            </Button>
        </div>
    );
}
