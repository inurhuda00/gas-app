import { Container } from "../shared/Container";

const features = [
    {
        name: "Toko Kelontong",
        href: "#",
        icon: "icon",
    },
    {
        name: "Toko Bangunan",
        href: "#",
        icon: "icon",
    },
    {
        name: "Toko Pakaian",
        href: "#",
        icon: "icon",
    },
    {
        name: "Warung Makan",
        href: "#",
        icon: "icon",
    },
];

export default function Categories() {
    return (
        <Container className="px-6 py-6 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Kategori Toko
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Apapun jenis tokomu dapat bergabung bersama GAS
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="flex max-w-xl gap-x-8 flex-warp gap-y-16 lg:max-w-none">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon
                                        className="h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Container>
    );
}
