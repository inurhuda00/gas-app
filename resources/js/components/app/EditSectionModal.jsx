import AboutForm from "@/components/landing/form/AboutForm";
import CTAForm from "@/components/landing/form/CTAForm";
import CareerForm from "@/components/landing/form/CareerForm";
import CategoriesForm from "@/components/landing/form/CategoriesForm";
import FeatureForm from "@/components/landing/form/FeatureForm";
import FeatureMapForm from "@/components/landing/form/FeatureMapForm";
import HeroForm from "@/components/landing/form/HeroForm";
import Modal from "@/components/shared/Modal";
import { useCallback, useMemo, useState } from "react";

const forms = {
    Hero: HeroForm,
    Categories: CategoriesForm,
    Feature: FeatureForm,
    FeatureMap: FeatureMapForm,
    CTA: CTAForm,
    Career: CareerForm,
    About: AboutForm,
};

function EditSectionModal({ showEditModal, setShowEditModal, section }) {
    const closeModal = () => {
        setShowEditModal(false);
        reset();
    };
    const Component =
        forms[section.section] || (() => <div>Section not found</div>);

    return (
        <Modal show={showEditModal} onClose={closeModal}>
            <Component section={section} closeModal={closeModal} />
        </Modal>
    );
}

export default function useEditSectionModal() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editSection, setEditSection] = useState(false);

    const EditSectionModalCallback = useCallback(() => {
        return (
            <EditSectionModal
                showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                section={editSection}
            />
        );
    }, [showEditModal, setShowEditModal]);

    return useMemo(
        () => ({
            setShowEditModal,
            setEditSection,
            EditSectioModal: EditSectionModalCallback,
        }),
        [setShowEditModal, setEditSection, EditSectionModalCallback]
    );
}
