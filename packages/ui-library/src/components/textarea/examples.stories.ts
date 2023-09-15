import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import './index';

const defaultParams: BlrTextareaType = {
  theme: 'Light',
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  cols: 20,
  rows: 5,

  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  readonly: false,

  showHint: true,
  hintIcon: 'blrInfo',
  hintText: 'hint message',

  hasError: false,
  errorMessage: "OMG it's an error",

  isResizeable: true,
};

const fontStyle = html`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  </style>
`;

export default {
  title: 'Design System/Web Components/BlrTextarea/Examples',
  parameters: {
    // backgrounds: {
    //     default: 'light',
    // },
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      description: 'Defines a short hint intended to aid the user with data entry when the component has no value.',
      defaultValue: '',
      control: {
        type: 'text',
        label: 'Enter Text',
      },
    },
  },
};

export const Example1 = () => {
  return html`
    ${fontStyle}
    <style>
      .stories-textarea {
        display: flex;
        flex-wrap: wrap;
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
      }
      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
      }
      .focus {
        outline: 2px solid hsla(220, 10%, 10%, 1);
        border-radius: 4px;
      }
    </style>
    <div class="stories-textarea">
      <div class="story-textarea">
        <h3>Rest</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
        })}
      </div>
      <div class="story-textarea">
        <h3>Focus</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
        })}
      </div>
      <div class="story-textarea">
        <h3>Disabled</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          disabled: true,
        })}
      </div>
      <div class="story-textarea">
        <h3>Error</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          hasError: true,
        })}
      </div>
      <div class="story-textarea">
        <h3>readOnly</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          readonly: true,
        })}
      </div>
      <div class="story-textarea">
        <h3>Description</h3>
        <p>Here is a description</p>
      </div>
    </div>
  `;
};
Example1.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Example1.storyName = 'Textarea Examples Light Theme';

export const Example2 = () =>
  html`
    ${fontStyle}
    <style>
      .stories-textarea {
        display: flex;
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
        color: white;
      }
      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
        max-height: 7rem;
      }
    </style>
    <div class="stories-textarea">
      <div class="story-textarea">
        <h3>Default</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Dark',
        })}
      </div>
      <div class="story-textarea">
        <h3>Disabled</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          disabled: true,
          theme: 'Dark',
        })}
      </div>
      <div class="story-textarea">
        <h3>HasError</h3>
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          hasError: true,
          theme: 'Dark',
        })}
      </div>
    </div>
  `;
(Example2.parameters = {
  backgrounds: {
    default: 'dark',
  },
}),
  (Example2.storyName = 'Textarea Examples Dark Theme');

export const InteractivePlaceholder = ({ placeholder }) =>
  html`
    ${fontStyle}
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      placeholder: placeholder,
      value: '',
    })}
  `;
InteractivePlaceholder.storyName = 'Interaktiver Placeholder';
InteractivePlaceholder.args = {
  placeholder: defaultParams.placeholder,
};
