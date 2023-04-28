import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import Authenticated from "@/components/layouts/app/AuthenticatedLayout";
import { Button } from "@/components/shared/Button";
import { Head, useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";

export default function Settings({ auth, site }) {
    const { data, setData, patch, processing, errors } = useForm({
        title: site.title,
        description: site.description,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("site.update", site.id), {
            data,
            preserveScroll: true,
            onSuccess: () => {
                toast.success("updated");
            },
        });
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Settings
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <section className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <>
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Site Settings
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update your site information
                                </p>
                            </header>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-6 space-y-6"
                            >
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className="mt-1 block w-1/2 w-max-md"
                                    />

                                    <InputError
                                        className="mt-2"
                                        errors={errors.title}
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />

                                    <TextInput
                                        id="description"
                                        type="text"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-3/4 w-max-md"
                                    />

                                    <InputError
                                        className="mt-2"
                                        errors={errors.description}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button disabled={processing}>Save</Button>
                                </div>
                            </form>
                        </>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
