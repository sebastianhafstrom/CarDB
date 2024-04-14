import { Link, createFileRoute } from '@tanstack/react-router';
import { fetchCarBySlug } from '../api/api';

export const Route = createFileRoute('/cars/$carSlug')({
    component: Brand,
    loader: ({ params: { carSlug } }) => fetchCarBySlug(carSlug),
    errorComponent: () => {
        // Render an error message
        return <h1>Error:</h1>;
    },
});

function Brand() {
    const car = Route.useLoaderData();

    if (car) {
        return (
            <>
                <h1>Bil: {car.name}</h1>
                <div>Kaross: {car.body_type}</div>
                <div>
                    Märke:{' '}
                    <Link
                        to="/brands/$brandSlug"
                        params={{ brandSlug: car.brand.slug }}
                    >
                        {car.brand.name}
                    </Link>
                </div>
            </>
        );
    }
}
