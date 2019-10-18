import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "La Locomotora", duration: "4:33" },
    { title: "Las Batallas", duration: "3:44" },
    { title: "La Ingrata", duration: "2:55" },
    { title: "Un Par de Lugares", duration: "5:44" },
    { title: "Volver a Comenzar", duration: "4:44" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
