export function Logomark(props) {
    return (
        <div className="flex items-center gap-x-4">
            <img
                className="w-16 object-cover -ml-4 border-2 border-white rounded-full"
                src="/logo.png"
                alt="Logo"
            />
            <div className="font-bold text-2xl text-[#104B97]">GAS</div>
        </div>
    );
}

export function Logo(props) {
    return (
        <div {...props}>
            <img
                className="w-16 object-cover -ml-4 border-2 border-white rounded-full"
                src="/logo.png"
                alt="Logo"
            />
        </div>
    );
}
