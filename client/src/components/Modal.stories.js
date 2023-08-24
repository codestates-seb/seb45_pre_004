import Modal from "./Modal";

export default {
    title: 'components/Modal',
    component: Modal,
    argTypes: {
        isModalOpen: { control: "boolean" },
    }
}

const Template = (args) => <Modal {...args}/>

export const ModalTemplate = Template.bind({});
ModalTemplate.args = {
    isModalOpen: true,
}