import useEditSectionModal from "@/components/app/EditSectionModal";
import Authenticated from "@/components/layouts/app/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { toast } from "react-hot-toast";

export default function Dashboard({ auth, sections: defaultSections }) {
    const [sections, setSections] = useState(defaultSections);

    const { setShowEditModal, setEditSection, EditSectioModal } =
        useEditSectionModal();

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(sections);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        router.put(
            route("section.reorder"),
            {
                sections: items.map((item, index) => ({
                    ...item,
                    order: index,
                })),
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Implemented 🎉");
                },
            }
        );

        setSections(
            items.map((item, index) => ({
                ...item,
                order: index,
            }))
        );
    };

    const handleEdit = (section) => {
        setEditSection(section);
        setShowEditModal(true);
    };
    const saveReorder = () => {};

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <EditSectioModal />
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900 ">
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="droppable">
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={`bg-gray-100 p-4 rounded-md ${
                                                snapshot.isDraggingOver
                                                    ? "bg-red-100"
                                                    : ""
                                            }`}
                                        >
                                            {sections
                                                .sort(
                                                    (a, b) => a.order - b.order
                                                )
                                                .map((section, index) => (
                                                    <Draggable
                                                        key={section.id}
                                                        draggableId={String(
                                                            section.id
                                                        )}
                                                        index={index}
                                                    >
                                                        {(
                                                            provided,
                                                            snapshot
                                                        ) => (
                                                            <div
                                                                ref={
                                                                    provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                className={`p-4 mb-2 flex items-center justify-between px-4 py-2 rounded-md bg-white " ${
                                                                    snapshot.isDragging
                                                                        ? "bg-yellow-100"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <p className="text-gray-900">
                                                                    {
                                                                        section.name
                                                                    }
                                                                </p>
                                                                <div>
                                                                    <button
                                                                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-2"
                                                                        onClick={() =>
                                                                            handleEdit(
                                                                                section
                                                                            )
                                                                        }
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
