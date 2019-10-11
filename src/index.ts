import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


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
