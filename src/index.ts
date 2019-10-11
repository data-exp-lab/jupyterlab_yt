import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
    ICommandPalette, MainAreaWidget
} from '@jupyterlab/apputils';

import {
    Widget
} from '@phosphor/widgets';

import {
    Colormap, ColormapCollection, FixedResolutionBuffer, RGBAValue,
    VariableMesh
} from '@data-exp-lab/yt-tools';

class VariableMeshExplorerWidget extends Widget
{
    constructor() {
        super();
        this.addClass("yt-vm-widget");
        this.canvas = document.createElement("canvas");
        this.node.appendChild(this.canvas);
    }

    readonly canvas: HTMLCanvasElement;
}


/**
 * Initialization data for the jupyterlab_yt extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_yt',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_yt is activated!');
  }
};

export default extension;
