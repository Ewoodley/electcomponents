import React from "react";
import { Image, Button, Modal } from "semantic-ui-react";
import pinout from "../images/LM339 pinout.jpg";

function LM339Modal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Pinout</Button>}
    >
      <Modal.Header>LM339 Pinout</Modal.Header>
      <Modal.Content>
        <Image src={pinout} alt="LM339N Pinout" />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default LM339Modal;
