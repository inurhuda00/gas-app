import NavLink from "@/components/NavLink";
import { Container } from "@/components/shared/Container";

export function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <Container className="max-w-4xl">
                <div className="flex flex-col justify-between items-start gap-y-12 gap-x-5 pt-16 pb-6 lg:flex-row lg:py-16">
                    <div className="flex items-center text-gray-900">
                        <div className="ml-4">
                            <p className="text-base font-semibold">GAS</p>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-900">
                        <div className="ml-4">
                            <p className="text-base font-semibold">
                                Tentang GAS
                            </p>
                            <ul className="grid">
                                <NavLink href="#" className="mt-1 text-sm">
                                    Term & Condition
                                </NavLink>
                                <NavLink href="#" className="mt-1 text-sm">
                                    Privacy
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-900">
                        <div className="ml-4">
                            <p className="text-base font-semibold">
                                Hubungi Kami
                            </p>
                            <NavLink href="#" className="mt-1 text-sm">
                                Kritik dan Saran
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-900">
                        <div className="ml-4">
                            <p className="text-base font-semibold">Follow Us</p>
                            <p className="mt-1 text-sm">
                                Invest at the perfect time.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-900">
                        <div className="ml-4">
                            <p className="text-base font-semibold">Unduh</p>
                            <img
                                className="h-20 -ml-4"
                                src="/storage/google-play-badge.png"
                                alt="google play download"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12">
                    <p className="mt-6 text-sm text-gray-500 md:mt-0">
                        &copy; Copyright {new Date().getFullYear()}. All rights
                        reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
