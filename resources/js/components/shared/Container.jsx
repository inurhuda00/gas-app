import clsx from "clsx";

export function Container({ className, ...props }) {
    return props.target ? (
        <section
            id={String(props.target).toLowerCase()}
            className={clsx(
                "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            {props.children}
        </section>
    ) : (
        <div
            className={clsx(
                "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
                className
            )}
            {...props}
        />
    );
}
