import TestHelpers from '../../helpers';
import { WhatsNewModalSelectorsIDs } from '../../selectors/Modals/WhatsNewModal.selectors';

export default class WhatsNewModal {
  static async tapGotItButton() {
    await TestHelpers.tap(WhatsNewModalSelectorsIDs.GOT_IT_BUTTON);
  }

  static async tapCloseButton() {
    await TestHelpers.tap(WhatsNewModalSelectorsIDs.CLOSE_BUTTON);
  }

  static async isVisible() {
    await TestHelpers.checkIfVisible(WhatsNewModalSelectorsIDs.CONTAINER);
  }

  static async isNotVisible() {
    await TestHelpers.checkIfNotVisible(WhatsNewModalSelectorsIDs.CONTAINER);
  }
}
