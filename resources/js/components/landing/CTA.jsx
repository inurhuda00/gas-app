import { Container } from "../shared/Container";

export default function CTA({ title = "", reverse, ...props }) {
    return (
        <>
            <Container
                className={`px-6 py-6 sm:py-12 lg:flex ${
                    reverse ? "lg:flex-row-reverse" : ""
                }  lg:items-center lg:gap-x-10 lg:px-8 lg:py-24`}
                {...props}
            >
                <img
                    className="h-96 w-full lg:w-1/2 flex-none object-cover"
                    src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt=""
                />
                <div className="w-full lg:w-1/2 flex-auto">
                    <h2 className="text-xl font-bold tracking-tight">
                        Daftar Toko
                    </h2>
                    <p className="mt-6 text-4xl font-black">{title}</p>
                    <div className="mt-10 flex">
                        <img
                            className="h-20 -ml-4"
                            src="/storage/google-play-badge.png"
                            alt="google play download"
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}
