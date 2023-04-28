import { Container } from "../shared/Container";

export default function CTA({ title = "", reverse, ...props }) {
    return (
        <>
            <Container
                className={`px-6 py-3 sm:py-6 lg:flex max-w-5xl ${
                    reverse ? "lg:flex-row-reverse" : ""
                }  lg:items-center lg:gap-x-10 lg:px-8 lg:py-24`}
                {...props}
            >
                <img
                    className="h-96 w-full lg:w-1/2 flex-none object-contain"
                    src="/cta_image.png"
                    alt="cta image thumb"
                />
                <div className="w-full lg:w-1/2 flex-auto">
                    <h2 className="text-xl font-bold tracking-tight">
                        Daftar Toko
                    </h2>
                    <p className="mt-6 text-4xl font-black">{title}</p>
                    <div className="mt-10 flex">
                        <img
                            className="h-20 -ml-4"
                            src="/google-play-badge.png"
                            alt="google play download"
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}
