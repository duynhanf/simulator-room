import { Container } from "@mui/material";
import MainLayout from "./components/templates/MainLayout";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <MainLayout>
      <div className="mt-20">
        <Container maxWidth="lg">
          <HomePage />
        </Container>
      </div>
    </MainLayout>
  );
}

export default App;
