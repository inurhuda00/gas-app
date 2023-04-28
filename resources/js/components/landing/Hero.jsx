import { Container } from "../shared/Container";

export default function Hero({
    title = "",
    subtitle = "",
    image = [],
    ...props
}) {
    return (
        <Container
            className="px-6 py-6 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24"
            {...props}
        >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
                <h1 className="mt-10 max-w-md text-4xl tracking-tight text-gray-900 sm:text-6xl font-black">
                    {title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {subtitle}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                    <img
                        className="h-20 -ml-4"
                        src="/storage/google-play-badge.png"
                        alt="google play download"
                    />
                </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"></div>
        </Container>
    );
}
