import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { CounterVariants, FormSizes } from '../../../globals/constants';
import { BlrFormInfoRenderFunction, BlrFormInfoType } from './index';

export default {
  title: 'Design System/Internal Components/BlrFormInfo',
  argTypes: {
    variant: {
      options: CounterVariants,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrFormInfo = ({
  theme,
  size,
  showHint,
  hintText,
  hintIcon,
  hasError,
  errorMessage,
  errorIcon,
}: BlrFormInfoType) =>
  BlrFormInfoRenderFunction({ theme, size, showHint, hintText, hintIcon, hasError, errorMessage, errorIcon });

BlrFormInfo.storyName = 'BlrFormInfo';

BlrFormInfo.args = {
  theme: 'Light',
  size: 'md',
  showHint: true,
  hintText: 'This is a hint',
  hintIcon: 'blrInfo',
  hasError: true,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
};
