import { useState } from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "framer";

export default function Confirmation(props) {
  const { tint, style } = props;

  const [active, setActive] = useState(false);

  return (
    <motion.div style={{ ...style, ...containerStyle }}>
      <motion.div
        onTap={() => setActive(!active)}
        style={{
          margin: 50,
          padding: 75,
          borderRadius: 30,
          backgroundColor: tint,
        }}
        whileHover={{ rotate: 90 }}
        animate={{ scale: active ? 1.25 : 1 }}
      ></motion.div>
    </motion.div>
  );
}

Confirmation.defaultProps = {
  tint: "#09F",
};

addPropertyControls(Confirmation, {
  tint: {
    title: "Tint",
    type: ControlType.Color,
  },
});

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
