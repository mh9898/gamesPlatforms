import "./App.css";
import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import TemptResultBar from "./components/TemptResultBar.tsx";
import TempModeResults from "./components/TempModeResults.tsx";





function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">
        <TemptResultBar/>
        <TempModeResults/>

        {/*<GameGrid />*/}
      </GridItem>
    </Grid>
  );
}

export default App;
