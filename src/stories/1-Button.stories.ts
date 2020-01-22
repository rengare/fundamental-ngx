import { action, decorate } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { RadioButtonComponent } from 'libs/core/src/index';


export default {
  title: 'Button',
  component: RadioButtonComponent,

};

@decorate({})
export const Text = () => ({
  component: RadioButtonComponent,
  template: `
<fd-radio-button [value]="val2" id="radio-8" name="radio-name-3">
  Option One
</fd-radio-button>`,
  props: {
    name: 'hi',
    value: 1

  },
});

// export const Emoji = () => ({
//   component: Button,
//   props: {
//     Text: '😀 😎 👍 💯',
//   },
// });

// Emoji.story = {
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const WithSomeEmojiAndAction = () => ({
//   component: Button,
//   props: {
//     Text: '😀 😎 👍 💯',
//     onClick: action('This was clicked OMG'),
//   },
// });

// WithSomeEmojiAndAction.story = {
//   name: 'with some emoji and action',
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const ButtonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     Text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// ButtonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
