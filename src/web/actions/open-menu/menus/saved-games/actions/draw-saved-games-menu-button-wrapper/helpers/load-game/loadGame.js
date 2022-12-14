import { createRandomPuzzles } from "../../../../../../../create-random-puzzles";
import { initiatePuzzles } from "../../../../../../../initiate-puzzles";
import { initiateDragNDrop } from "../../../../../../../drag-n-drop";
import { startGame } from "../../../../../../../start-game";

function loadGame() {
  const { elements, values } = this._state;

  values.isLoad = true;

  values.difficulty = values.savedGames[values.currentScreenShotId].mode;

  values.time = values.savedGames[values.currentScreenShotId].time;
  values.seconds = values.savedGames[values.currentScreenShotId].seconds;
  values.minutes = values.savedGames[values.currentScreenShotId].minutes;
  elements.time.textContent = `Time:${values.time}`;

  values.moves = values.savedGames[values.currentScreenShotId].moves;
  elements.moves.textContent = `Moves: ${values.moves}`;

  values.randomImageName =
    values.savedGames[values.currentScreenShotId].backgroundImageName;

  values.dimension = values.savedGames[values.currentScreenShotId].dimension;

  elements.mainArea.style = `grid-template-columns: repeat(${values.dimension}, 1fr);`;

  values.isPauseClicked = false;

  createRandomPuzzles.call(this);
  initiatePuzzles.call(this);
  initiateDragNDrop.call(this);
  startGame.call(this);

  elements.savedGamesMenu.remove();

  elements.audioMenu.pause();
  elements.audioMenu.currentTime = 0;

  if (values.isVolumeOn) {
    elements.audioMainTheme.play();
  }

  values.isLoad = false;
  values.currentScreenShotId = 0;
}

export default loadGame;
