import React from "react";
import { Button, Modal } from "semantic-ui-react";

function ICModal() {
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
          These are common terms used with Integrated Circuits
          <ul>
            <li>Logic Gate: A circuit gates whose output is determined by incoming voltage</li>
            <li>AND Gate: A logic gate that only outputs when both inputs are high</li>
            <li>NAND Gate: A logic gate that works on the opposite princliple of an AND Gate, if the inputs are high, the output is low</li>
            <li>OR Gate: A logic gate that operates when either or both inputs are high</li>
            <li>NOR Gate: A logic gate that will output low when either or both inputs are high</li>
            <li>XOR Gate: A logic gate that will only output high when only one of the inputs are high</li>
            <li>High: A term used with logic gates to indicate electical flow through the gate</li>
            <li>Low: A term used with logic gates to indicate minimal to no electrical flow through the gate</li>
          </ul>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
export default ICModal;
