import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/shared/Button";
import { router, useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";

export default function HeroForm({ section, closeModal }) {
    const { data, setData, errors, setDefaults } = useForm({
        name: section.name,
        order: section.order,
        section: section.section,
        props: {
            title: section.props.title,
            subtitle: section.props.subtitle,
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        router.put(
            route("section.update", section.id),
            {
                name: data.name,
                order: data.order,
                section: data.section,
                props: JSON.stringify(data.props),
            },
            {
                only: ["sections"],
                preserveScroll: true,
                onSuccess: () => {
                    router.visit(route("dashboard"), { only: ["sections"] });
                    toast.success("updated 🎉");
                    closeModal();
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-lg font-medium text-gray-900">About Section</h2>

            <div className="mt-4">
                <InputLabel htmlFor="name" value="name" className="sr-only" />

                <TextInput
                    id="name"
                    type="text"
                    name="title"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="mt-1 block w-3/4"
                    placeholder="Name"
                />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="title" value="title" className="sr-only" />

                <TextInput
                    id="title"
                    type="text"
                    name="title"
                    value={data.props.title}
                    onChange={(e) =>
                        setData("props", {
                            ...data.props,
                            title: e.target.value,
                        })
                    }
                    className="mt-1 block w-3/4"
                    placeholder="Title"
                />
            </div>
            <div className="mt-4">
                <InputLabel
                    htmlFor="subtitle"
                    value="subtitle"
                    className="sr-only"
                />

                <TextInput
                    id="subtitle"
                    type="text"
                    name="subtitle"
                    value={data.props.subtitle}
                    onChange={(e) =>
                        setData("props", {
                            ...data.props,
                            subtitle: e.target.value,
                        })
                    }
                    className="mt-1 block w-3/4"
                    placeholder="Subtitle"
                />
            </div>

            <div className="mt-6 flex justify-end">
                <Button className="ml-3">Save</Button>
            </div>
        </form>
    );
}
