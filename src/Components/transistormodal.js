import React from "react";
import { Button, Modal } from 'semantic-ui-react'

function TransistorModal() {
    const [open, setOpen] = React.useState(false)
    
    return (
        <Modal
            centered={false}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Glossary</Button>}
        >
            <Modal.Header>Glossary</Modal.Header>
            <Modal.Content>
                <Modal.Description>These are commonly used terms with Transistors
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions><Button onClick={() => setOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    );
}
export default TransistorModal;