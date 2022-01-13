import React from "react";
import { Button, Modal, Image } from "semantic-ui-react";
import pinout from "../images/555 pinout.jpg";

export default function FiveModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Pinout</Button>}
    >
      <Modal.Header>555 Pinout</Modal.Header>
      <Modal.Content>
        <Image src={pinout} alt="555 Pinout" />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
