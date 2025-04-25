export interface ExampleComponentProps {
  label: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  label,
}) => {
  return (
    <div>
      <p>I am an example component: {label}</p>
    </div>
  );
};

export default ExampleComponent;