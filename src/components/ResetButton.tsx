import React from "react";
import { IonButton } from "@ionic/react";

interface ClickType {
  resetGame: any;
}

const ResetButton: React.FC<any> = (props: { resetGame: any }) => {
  return (
    <IonButton expand='block' color='success' onClick={props.resetGame}>
      Reset Game
    </IonButton>
  );
};

export default ResetButton;
