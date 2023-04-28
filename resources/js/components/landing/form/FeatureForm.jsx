import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/shared/Button";

export default function FeatureForm() {
    return (
        <form onSubmit="" className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
                Feature Section
            </h2>

            <div className="mt-4">
                <InputLabel htmlFor="title" value="title" className="sr-only" />

                <TextInput
                    id="title"
                    type="text"
                    name="title"
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
