import { Container } from "../shared/Container";

export default function FeatureMap() {
    return (
        <Container className="px-6 py-6 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Fitur Maps
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Aplikasi Gas akan membantumu dalam memantau stock produk
                        tokomu dan menjangkau customer yang lebih luas
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    map
                </div>
            </div>
        </Container>
    );
}
