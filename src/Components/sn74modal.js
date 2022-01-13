import React from "react";
import { Modal, Button, Image } from "semantic-ui-react";
import sn74n from "../images/sn7400n pinout.jpg";

export default function Sn74nModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Pinout</Button>}
    >
      <Modal.Header> SN7400N Pinout</Modal.Header>
      <Modal.Content>
        <Image src={sn74n} alt="SN7400N Pinout" />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
