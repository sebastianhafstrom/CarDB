import { Link, createFileRoute } from '@tanstack/react-router';
import { fetchBrands } from '../api/api';
import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

import { Plus } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import { brand } from '@/api/apiTypes';

export const Route = createFileRoute('/brands')({
    component: Brands,
    loader: fetchBrands,
    errorComponent: () => {
        // Render an error message
        return <h1>Error:</h1>;
    },
});

function Brands() {
    const brands = Route.useLoaderData();

    if (brands) {
        return (
            <>
                <div className="flex justify-between mb-2">
                    <h1 className="text-4xl font-bold">Brands</h1>

                    <Button asChild>
                        <Link to="/brands/new">
                            <Plus className="mr-2 h-4 w-4" />
                            Add new brand
                        </Link>
                    </Button>
                </div>
                <DataTable columns={columns} data={brands} />
            </>
        );
    }
}

const columns: ColumnDef<brand>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
            return (
                <Link
                    to="/brands/$brandSlug"
                    params={{ brandSlug: row.getValue<string>('slug') }}
                >
                    <div className="font-medium">
                        {row.getValue<string>('name')}
                    </div>
                </Link>
            );
        },
    },
    {
        accessorKey: 'origin_country',
        header: 'Origin Country',
    },
    {
        accessorKey: 'website',
        header: 'Website',
        cell: ({ row }) => {
            return (
                <a
                    href={row.getValue<string>('website')}
                    target="_blank"
                    rel="noreferrer"
                >
                    {row.getValue<string>('website')}
                </a>
            );
        },
    },
    {
        accessorKey: 'slug',
        header: 'Slug',
    },
];
