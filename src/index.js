import OfflinePlugin from "offline-plugin/runtime";

OfflinePlugin.install({
  onInstalled: function() {},

  onUpdating: function() {},

  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    window.location.reload();
  }
});

import React from "react";
import { render } from "react-dom";
import Routers from "./containers/Routers";

render(<Routers />, document.getElementById("root"));
