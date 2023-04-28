import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export function NavLinks() {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    const { navigationsLink } = usePage().props;

    return navigationsLink.map(({ label, href }, index) => (
        <Link
            key={label}
            href={href}
            className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-900 transition-colors delay-150 hover:text-gray-700 hover:delay-[0ms]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {hoveredIndex === index && (
                <span className="absolute inset-0 rounded-lg bg-gray-100" />
            )}
            <span className="relative z-10 font-medium">{label}</span>
        </Link>
    ));
}
