'use babel';

import AddDateView from './add-date-view';
import { CompositeDisposable } from 'atom';

export default {

//  addDateView: null,
//  modalPanel: null,
  subscriptions: null,
  days: null,
  months : null,

  activate(state) {
//    this.addDateView = new AddDateView(state.addDateViewState);
/*    this.modalPanel = atom.workspace.addModalPanel({
      item: this.addDateView.getElement(),
      visible: false
    });*/

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    days = new Array("nd","pon","wt","śr","czw","pt","sob");
    months = new Array("stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia");

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'add-date:add-date': () => this.addDate()
    }));
  },


  deactivate() {
  //  this.modalPanel.destroy();
    this.subscriptions.dispose();
//    this.addDateView.destroy();
  },

  serialize() {
    return {
  //    addDateViewState: this.addDateView.serialize()
    };
  },

//Edit 12:21
// Edit 12:24 Edit 12:24 Edit 12:24 Edit 12:24 Edit 12:24
//Edit 12:25 Edit 12:26
//Edit 12:26
//Edit 12:27 +++
//Edit 12:27 +++sob+++
//Edit 12:28 +++sob+++
//Edit 12:29 sob
//Edit 12:29 pt
//Edit 12:33 pt 11 maja
//Edit 12:34 pt 11 maja 2018: 
  //Edit 11:46 pt 11 maja 2018:
  addDate() {
    console.log('Adding date');

    let text = "Edit ";
    let date = new Date();
    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    text += date.getHours() + ":" + minute + " " + days[date.getDay()]
      + " " + date.getDate() + " " + months[date.getMonth()]
      + " " + date.getFullYear() + ": ";
    console.log(days[date.getDay()]);
    if (editor = atom.workspace.getActiveTextEditor()){
      editor.insertText(text);
    }
  /*  return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );*/
  }

};
