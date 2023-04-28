import { Container } from "../shared/Container";

export default function Hero({
    title = "",
    subtitle = "",
    image = [],
    ...props
}) {
    return (
        <div className="bg-[#FEC00C]">
            <Container
                className="px-6 py-6 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24 "
                {...props}
            >
                <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
                    <h1 className="mt-10 max-w-md text-4xl tracking-tight text-slate-50 sm:text-6xl font-black">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-900 font-medium">
                        {subtitle}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <img
                            className="h-20 -ml-4"
                            src="/google-play-badge.png"
                            alt="google play download"
                        />
                    </div>
                </div>
                <div className="hidden mt-16 lg:flex sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <img
                        className="-ml-4 -mt-20"
                        src="/hero_image.png"
                        alt="hero image thumb"
                    />
                </div>
            </Container>
        </div>
    );
}
