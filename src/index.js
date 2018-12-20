import { Elm } from "./Main.elm";
import "./Main.css";
import UiIcon from "./Ui/Icon";

document.addEventListener("DOMContentLoaded", () => {
  const app = Elm.Main.init({});

  UiIcon.start(app);
});
