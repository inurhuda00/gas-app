import { Container } from "../shared/Container";

const careers = [
    {
        name: "Marketing Comunication",
        description:
            "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama",
        icon: "CloudArrowUpIcon",
    },
    {
        name: "Marketing Comunication",
        description:
            "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama",
        icon: "CloudArrowUpIcon",
    },
    {
        name: "Marketing Comunication",
        description:
            "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama",
        icon: "CloudArrowUpIcon",
    },
    {
        name: "Marketing Comunication",
        description:
            "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama",
        icon: "CloudArrowUpIcon",
    },
];

export default function Career() {
    return (
        <Container className="px-6 py-6 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Temukan Karir Impianmu
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Mari bergabung bersama kami. <br /> Jadilah bagian dari
                        kami dan kembangkan bakat, ide kreatifmu dalam GAS
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {careers.map((career) => (
                            <div key={career.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <career.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {career.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    {career.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Container>
    );
}
