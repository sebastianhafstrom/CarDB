import { Link, createFileRoute } from '@tanstack/react-router';
import { fetchBrandBySlug, fetchCars } from '../api/api';
import { car, brand } from '@/api/apiTypes';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/data-table';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/brands/$brandSlug')({
    component: Brand,
    loader: ({ params: { brandSlug } }) => fetchBrandBySlug(brandSlug),
    errorComponent: () => {
        // Render an error message
        return <h1>Error:</h1>;
    },
});

function Brand() {
    const brand = Route.useLoaderData();
    const [cars, setCars] = useState<car[]>([]);

    const getBrandCars = async () => {
        const fetchedCars = await fetchCars([brand.id]);
        setCars(fetchedCars);
    };

    useEffect(() => {
        getBrandCars();
    }, []);

    if (brand) {
        return (
            <>
                <h1 className="text-4xl font-bold pb-4">{brand.name}</h1>
                <div>Ursprungsland: {brand.origin_country}</div>
                <div>
                    Hemsida:
                    <a href={brand.website} target="_blank">
                        {brand.website}
                    </a>
                </div>
                <h2 className="text-3xl font-bold pb-4">
                    Cars from {brand.name}
                </h2>
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
                <div className="font-medium">
                    {row.getValue<brand>('brand').name}
                </div>
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
