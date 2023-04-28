import { Container } from "../shared/Container";

export default function Feature({
    title = "",
    subtitle = "",
    features = [],
    ...props
}) {
    return (
        <Container
            className="px-6 py-6 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24"
            {...props}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {subtitle}
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-full justify-center max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-[#FEC00C] px-4"
                            >
                                <div className="py-12 lg:py-6 ">
                                    <img
                                        class="w-full"
                                        src="/map.png"
                                        className="rounded-full object-cover w-32 h-32"
                                        alt={feature.name}
                                    />
                                </div>
                                <div class="px-6 py-4">
                                    <div class="font-semibold mb-2">
                                        {feature.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Container>
    );
}
