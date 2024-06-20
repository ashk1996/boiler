import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';
import { FormSizesType, SizesType } from '../../globals/types.js';
import { SizelessIconType } from '@boiler/icons';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { TAG_NAME } from './renderFunction.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction.js';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectedValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectedValueChangeEvent,
} from '../../globals/events.js';

import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export type BlrSelectEventHandlers = {
  blrSelectedValueChange?: (event: BlrSelectedValueChangeEvent) => void;
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
};

/**
 * @fires blrSelectedValueChange Selected value changed
 * @fires blrFocus Select received focus
 * @fires blrBlur Select lost focus
 */
export class BlrSelect extends LitElementCustom {
  static styles = [staticFormStyles, staticStyles];

  @query('select')
  protected accessor _selectNode!: HTMLInputElement;

  @property() accessor arialabel: string | undefined;
  @property() accessor selectId!: string;
  @property() accessor labelAppendix: string | undefined;
  @property() accessor name!: string;
  @property() accessor hasLabel: boolean | undefined;
  @property() accessor label!: string;
  @property() accessor disabled: boolean | undefined;
  @property() accessor sizeVariant: FormSizesType = 'md';
  @property() accessor required: boolean | undefined;
  @property() accessor blrBlur: HTMLElement['blur'] | undefined;
  @property() accessor blrFocus: HTMLElement['focus'] | undefined;

  @property() accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property() accessor hasHint: boolean | undefined;
  @property() accessor icon: SizelessIconType | undefined = 'blrChevronDown';

  @property() accessor theme: ThemeType = 'Light';

  @state() protected accessor isFocused = false;

  protected _optionElements: Element[] | undefined;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected firstUpdated(...args: Parameters<LitElementCustom['firstUpdated']>): void {
    if (!this._optionElements) {
      this.handleSlotChange();
    }
  }

  protected handleSlotChange() {
    const slot = this.renderRoot?.querySelector('slot');

    this._optionElements = slot?.assignedElements({ flatten: false });
    this.requestUpdate();
  }

  protected handleChange(event: Event) {
    this.dispatchEvent(
      createBlrSelectedValueChangeEvent({ originalEvent: event, selectedValue: this._selectNode.value })
    );
  }

  protected renderIcon() {
    const classes = classMap({
      'icon-direction-indicator': true,
      [this.sizeVariant]: this.sizeVariant,
      [this.theme]: this.theme,
    });

    if (this.sizeVariant) {
      const iconSizeVariant = getComponentConfigToken([
        'sem',
        'forms',
        'inputfield',
        'icon',
        'sizevariant',
        this.sizeVariant,
      ]).toLowerCase() as SizesType;

      const modifiedIcon = this.icon ? this.icon : 'blrChevronDown';
      return BlrIconRenderFunction(
        {
          icon: calculateIconName(modifiedIcon, iconSizeVariant),
          sizeVariant: iconSizeVariant,
          classMap: classes,
          fillParent: false,
          theme: this.theme,
        },
        {
          'aria-hidden': true,
        }
      );
    }
  }

  protected renderCaptionContent() {
    return html`
      ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.hintMessage,
            icon: this.hintMessageIcon,
          })
        : nothing}
      ${this.hasError && (this.errorMessage || this.errorMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.errorMessage,
            icon: this.errorMessageIcon,
          })
        : nothing}
    `;
  }

  protected render() {
    if (this.sizeVariant) {
      const inputClasses = classMap({
        'error': this.hasError || false,
        'error-input': this.hasError || false,
        [this.sizeVariant]: this.sizeVariant,
        'disabled': this.disabled || false,
        'focus': this.isFocused || false,
        [this.theme]: this.theme,
      });

      return html`
        <slot @slotchange=${this.handleSlotChange}></slot>

        <div class="blr-select ${this.sizeVariant} ${this.theme}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    labelAppendix: this.labelAppendix,
                    sizeVariant: this.sizeVariant,
                    forValue: this.selectId,
                    theme: this.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="blr-select-wrapper ${inputClasses}">
            <div class="blr-select-inner-container ${this.theme}">
              <select
                aria-label=${this.ariaLabel || nothing}
                class="blr-form-select ${inputClasses}"
                id=${this.selectId || nothing}
                name=${this.name || nothing}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @input=${this.handleChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              >
                ${this._optionElements?.map((opt: Element) => {
                  return html`
                    <option
                      class="blr-select-option"
                      value=${opt.getAttribute('value') || ''}
                      ?selected=${opt.getAttribute('selected') === 'true'}
                      ?disabled=${opt.getAttribute('disabled') === 'true'}
                    >
                      ${opt.getAttribute('label')}
                    </option>
                  `;
                })}
              </select>
            </div>
            ${this.renderIcon()}
          </div>
          ${(this.hasHint && this.hintMessage) || (this.hasError && this.errorMessage)
            ? BlrFormCaptionGroupRenderFunction(
                { theme: this.theme, sizeVariant: this.sizeVariant },
                this.renderCaptionContent()
              )
            : nothing}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrSelect);
}

export type BlrSelectType = ElementInterface<BlrSelect>;
