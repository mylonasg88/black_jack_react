import * as React from "react";

interface IAppProps {
  card: number;
  name: string;
}

const List: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <h3>card:{props.card}</h3>
      <h3>name:{props.name}</h3>
    </div>
  );
};

export default List;
