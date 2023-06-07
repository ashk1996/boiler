import { html, nothing } from 'lit';
import { InputSizesType } from '../../../globals/types';

type FormLabelType = {
  labelText: string;
  labelAppendix?: string;
  labelSize: InputSizesType;
  forValue: string;
};

export const BlrFormLabel = ({
  labelText,
  labelAppendix: additionalInfo,
  labelSize: size,
  forValue,
}: FormLabelType) => {
  return html`
    <label class="blr-form-label ${size}" for=${forValue}>
      ${labelText}
      ${additionalInfo ? html`<span class="blr-form-label-appendix ${size}">${additionalInfo}</span>` : nothing}
    </label>
  `;
};
