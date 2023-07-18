import "./App.css";
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelection from "./components/SortSelection.tsx";

export interface GameQuery{
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearchInputNav={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} >
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => {setGameQuery({...gameQuery, genre})}}/>
        </GridItem>
      </Show>

      <GridItem area="main">
          <HStack padding={3}>
          <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) => setGameQuery({...gameQuery ,platform})}/>
          <SortSelection
              selectedOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
