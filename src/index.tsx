import { Button } from "./components/Button/Button";

const Home: React.FC = () => {
  return (
    <Button variants="outline" colorTheme="red" isDisabled>
      Disabled Button
    </Button>
  );
};

export default Home;
