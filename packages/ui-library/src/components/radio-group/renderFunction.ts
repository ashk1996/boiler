import { BlrRadioGroupType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-radio-group';

export const BlrRadioGroupRenderFunction = (params: BlrRadioGroupType) =>
  genericBlrComponentRenderer<BlrRadioGroupType>(TAG_NAME, { ...params });
