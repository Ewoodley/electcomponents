import React from "react";
import { Button, Modal } from "semantic-ui-react";

export default function CapModal() {
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
          <ul>
            <li>Anode: Positively charged electrode</li>
            <li>Cathode: Negatively charged electrode</li>
            <li>
              Dieelectric: Any material that is capable of transmitting
              electricity without becoming conductive
            </li>
            <li>Electrolyte: Electrically conductive compounds</li>
          </ul>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
