import React from "react";
import { Button, Modal } from "semantic-ui-react";

function CapModal() {
  const [open, setOpen] = React.useState(false);

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
        <Modal.Description>
          These are common terms used with Capacitors
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CapModal;
