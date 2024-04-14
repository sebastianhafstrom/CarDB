import { Link, createFileRoute } from '@tanstack/react-router';
import { fetchCars } from '../api/api';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Plus } from 'lucide-react';
import { car, brand } from '@/api/apiTypes';

export const Route = createFileRoute('/cars')({
    component: Index,
    errorComponent: () => {
        // Render an error message
        return <h1>Error:</h1>;
    },
    loader: () => fetchCars(),
});

function Index() {
    const cars = Route.useLoaderData();

    if (cars) {
        return (
            <>
                <div className="flex justify-between mb-2">
                    <h1 className="text-4xl font-bold">Cars</h1>

                    <Button asChild>
                        <Link to="/cars/new">
                            <Plus className="mr-2 h-4 w-4" />
                            Add new car
                        </Link>
                    </Button>
                </div>
                <DataTable columns={columns} data={cars} />
            </>
        );
    }
}

const columns: ColumnDef<car>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
            return (
                <Link
                    to="/cars/$carSlug"
                    params={{ carSlug: row.getValue<string>('slug') }}
                >
                    <div className="font-medium">
                        {row.getValue<string>('name')}
                    </div>
                </Link>
            );
        },
    },
    {
        accessorKey: 'brand',
        header: 'Brand',
        cell: ({ row }) => {
            return (
                <Link
                    to="/brands/$brandSlug"
                    params={{ brandSlug: row.getValue<brand>('brand').slug }}
                >
                    <div className="font-medium">
                        {row.getValue<brand>('brand').name}
                    </div>
                </Link>
            );
        },
    },
    {
        accessorKey: 'body_type',
        header: 'Body Type',
    },
    {
        accessorKey: 'slug',
        header: 'Slug',
    },
];
