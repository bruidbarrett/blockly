import Blockly from "blockly";

import { createPlayground, toolboxCategories } from "@blockly/dev-tools";

// Called every time the workspace options are changed.
const createWorkspace = (blocklyDiv, options) => {
  return Blockly.inject(blocklyDiv, options);
};

const defaultOptions = {
  toolbox: toolboxCategories
};

createPlayground(
  document.getElementById("blocklyArea"),
  createWorkspace,
  defaultOptions,
  /** PlaygroundConfig */ {},
  /** Monaco Editor Path */ "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.19.2/min/vs"
);
