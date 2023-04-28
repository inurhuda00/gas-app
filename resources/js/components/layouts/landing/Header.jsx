import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Popover } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { NavLinks } from "./NavLinks";

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 6h14M5 18h14M5 12h14"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronUpIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M17 14l-5-5-5 5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function MobileNavLink({ children, ...props }) {
    return (
        <Popover.Button
            as={Link}
            className="block text-base leading-7 tracking-tighter text-gray-700"
            {...props}
        >
            {children}
        </Popover.Button>
    );
}

export function Header() {
    const {
        auth: { user },
        navigationsLink,
    } = usePage().props;
    return (
        <header>
            <nav>
                <Container className="relative z-50 flex py-8">
                    <div className="relative z-10 flex flex-1 items-center gap-16">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                        <div className="hidden lg:flex lg:justify-center lg:flex-1 lg:gap-10">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Popover className="lg:hidden">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                                        aria-label="Toggle site navigation"
                                    >
                                        {({ open }) =>
                                            open ? (
                                                <ChevronUpIcon className="h-6 w-6" />
                                            ) : (
                                                <MenuIcon className="h-6 w-6" />
                                            )
                                        }
                                    </Popover.Button>
                                    <>
                                        {open && (
                                            <>
                                                <Popover.Overlay className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur" />
                                                <Popover.Panel className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20">
                                                    <div className="space-y-4">
                                                        {navigationsLink.map(
                                                            (
                                                                { label, href },
                                                                index
                                                            ) => (
                                                                <MobileNavLink
                                                                    href={href}
                                                                    key={index}
                                                                >
                                                                    {label}
                                                                </MobileNavLink>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="mt-8 flex flex-col gap-4">
                                                        <Button
                                                            href="/login"
                                                            variant="outline"
                                                        >
                                                            Log in
                                                        </Button>
                                                        <Button href="#">
                                                            Jadi Mitra
                                                        </Button>
                                                    </div>
                                                </Popover.Panel>
                                            </>
                                        )}
                                    </>
                                </>
                            )}
                        </Popover>

                        {user ? (
                            <>
                                <Button
                                    href={route("logout")}
                                    method="post"
                                    variant="outline"
                                    className="hidden lg:block"
                                >
                                    Sign out
                                </Button>

                                <Link
                                    href="/dashboard"
                                    className="hidden lg:block relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <span className="relative z-10">
                                        Dashboard
                                    </span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    href="/login"
                                    variant="outline"
                                    className="hidden lg:block"
                                >
                                    Sign in
                                </Button>
                                <Button href="#" className="hidden lg:block">
                                    Jadi Mitra
                                </Button>
                            </>
                        )}
                    </div>
                </Container>
            </nav>
        </header>
    );
}
