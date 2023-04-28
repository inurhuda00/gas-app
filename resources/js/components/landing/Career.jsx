import { Container } from "../shared/Container";

export default function Career({
    title = "",
    subtitle = "",
    careers = [],
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
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {careers.map((career, id) => (
                            <div key={id} className=" flex gap-x-4">
                                <div className="flex h-32 items-center justify-center rounded-lg w-1/4">
                                    <img
                                        class="w-full"
                                        src="/map.png"
                                        className="object-cover rounded-b-full w-full h-full border border-black"
                                        alt={career.name}
                                    />
                                </div>
                                <div className="w-3/4">
                                    <span className="font-semibold text-lg">
                                        {career.name}
                                    </span>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">
                                        {career.description}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Container>
    );
}
