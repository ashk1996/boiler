import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { SemanticThemeIterator, ComponentThemeIterator } from "../_tokens-generated/index.pseudo.generated";

export const staticBaseStyles = typeSafeNestedCss/*css*/ `
  .blr-form-element {
    all: initial;
    width: 100%;
    box-sizing: border-box;

    &:active {
      border-color: transparent;
    }

    &[readonly] {
      border-color: transparent;
    }

    &:disabled {
      border-color: transparent;
      cursor: not-allowed;
    }

    &:focus {
      border-color: transparent;
    }

    &.error-input {
      &:focus {
        border-color: transparent;
      }
    }
  }

  .blr-input-inner-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .blr-caption-text {
    word-break: break-all;
  }

  .caption-wrapper {
    display: flex;
    flex-direction: column;
  }

  .blr-form-label {
    display: flex;
    align-items: center;
    word-break: break-all;
  }

  .blr-form-label-inline {
    flex: 1;
  }
`;

export const staticSemanticStyles = typeSafeNestedCss/*css*/ `
  ${SemanticThemeIterator((theme, sem, typeSafeCss) => {
    const { forms } = sem;

    return typeSafeCss/*css*/ `
      .blr-form-element.${theme} {
        color: ${forms.inputfield.userinput.textcolor.default.rest};
        font-weight: ${forms.inputfield.userinput.typography.md.fontWeight};
        font-size: ${forms.inputfield.userinput.typography.md.fontSize};
        font-family: ${forms.inputfield.userinput.typography.md.fontFamily}, sans-serif;

        border-width: ${forms.inputfield.container.border.default.rest.width};
        border-style: ${forms.inputfield.container.border.default.rest.style};
        border-color: ${forms.inputfield.container.border.default.rest.color};
        border-radius: ${forms.inputfield.container.borderradius};

        &::placeholder {
          color: ${forms.inputfield.placeholder.textcolor.default.rest};
        }

        &:hover {
          border-width: ${forms.inputfield.container.border.default.hover.width};
          border-style: ${forms.inputfield.container.border.default.hover.style};
          border-color: ${forms.inputfield.container.border.default.hover.color};
          color: ${forms.inputfield.userinput.textcolor.default.hover};
          background-color: ${forms.inputfield.container.bgcolor.default.hover};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.hover};
          }
        }

        &:active {
          border-width: ${forms.inputfield.container.border.default.pressed.width};
          border-style: ${forms.inputfield.container.border.default.pressed.style};
          border-color: transparent;
          outline: ${forms.inputfield.container.border.default.pressed.width} ${forms.inputfield.container.border.default.pressed.style}
            ${forms.inputfield.container.border.default.pressed.color};
          color: ${forms.inputfield.userinput.textcolor.default.pressed};
          background-color: ${forms.inputfield.container.bgcolor.default.pressed};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.pressed};
          }
        }

        &[readonly] {
          border-width: ${forms.inputfield.container.border.default.readonly.width};
          border-style: ${forms.inputfield.container.border.default.readonly.style};
          border-color: transparent;
          outline: ${forms.inputfield.container.border.default.hover.width} ${forms.inputfield.container.border.default.readonly.style}
            ${forms.inputfield.container.border.default.readonly.color};
          background-color: ${forms.inputfield.container.bgcolor.default.readonly};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.readonly};
          }
        }

        &:disabled {
          border-width: ${forms.inputfield.container.border.default.readonly.width};
          border-style: ${forms.inputfield.container.border.default.disabled.style};
          border-color: transparent;
          outline: ${forms.inputfield.container.border.default.disabled.width} ${forms.inputfield.container.border.default.disabled.style}
            ${forms.inputfield.container.border.default.disabled.color};
          color: ${forms.inputfield.userinput.textcolor.default.disabled};
          background-color: ${forms.inputfield.container.bgcolor.default.disabled};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.disabled};
          }
        }

        &:focus {
          border-width: ${forms.inputfield.container.border.default.rest.width};
          border-style: ${forms.inputfield.container.border.default.rest.style};
          border-color: transparent;
          outline: ${forms.inputfield.container.border.default.focus.width} ${forms.inputfield.container.border.default.focus.style}
            ${forms.inputfield.container.border.default.focus.color};
          color: ${forms.inputfield.userinput.textcolor.default.focus};
          background-color: ${forms.inputfield.container.bgcolor.default.focus};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.focus};
          }
        }

        &.error-input {
          border-width: ${forms.inputfield.container.border.error.rest.width};
          border-style: ${forms.inputfield.container.border.error.rest.style};
          border-color: ${forms.inputfield.container.border.error.rest.color};
          color: ${forms.inputfield.userinput.textcolor.error.rest};
          background-color: ${forms.inputfield.container.bgcolor.error.rest};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.error.rest};
          }

          &:hover {
            border-width: ${forms.inputfield.container.border.error.hover.width};
            border-style: ${forms.inputfield.container.border.error.hover.style};
            border-color: ${forms.inputfield.container.border.error.hover.color};
            color: ${forms.inputfield.userinput.textcolor.error.hover};
            background-color: ${forms.inputfield.container.bgcolor.error.hover};

            &::placeholder {
              color: ${forms.inputfield.placeholder.textcolor.error.hover};
            }
          }

          &:active {
            border-width: ${forms.inputfield.container.border.error.pressed.width};
            border-style: ${forms.inputfield.container.border.error.pressed.style};
            border-style: ${forms.inputfield.container.border.error.pressed.color};
            outline: ${forms.inputfield.container.border.error.pressed.width} ${forms.inputfield.container.border.error.pressed.style}
              ${forms.inputfield.container.border.error.pressed.color};
            color: ${forms.inputfield.userinput.textcolor.error.pressed};
            background-color: ${forms.inputfield.container.bgcolor.error.pressed};

            &::placeholder {
              color: ${forms.inputfield.placeholder.textcolor.error.pressed};
            }
          }

          &:focus {
            border-width: ${forms.inputfield.container.border.error.rest.width};
            border-style: ${forms.inputfield.container.border.error.rest.style};
            border-color: transparent;
            outline: ${forms.inputfield.container.border.error.focus.width} ${forms.inputfield.container.border.error.focus.style}
              ${forms.inputfield.container.border.error.focus.color};
            color: ${forms.inputfield.userinput.textcolor.error.focus};
            background-color: ${forms.inputfield.container.bgcolor.error.focus};

            &::placeholder {
              color: ${forms.inputfield.placeholder.textcolor.error.focus};
            }
          }
        }

        &.sm {
          font-weight: ${forms.inputfield.userinput.typography.sm.fontWeight};
          font-size: ${forms.inputfield.userinput.typography.sm.fontSize};
          font-family: ${forms.inputfield.userinput.typography.sm.fontFamily}, sans-serif;
          line-height: ${forms.inputfield.userinput.typography.sm.lineHeight};
          padding: ${forms.inputfield.container.padding.sm};
        }

        &.md {
          font-weight: ${forms.inputfield.userinput.typography.md.fontWeight};
          font-size: ${forms.inputfield.userinput.typography.md.fontSize};
          font-family: ${forms.inputfield.userinput.typography.md.fontFamily}, sans-serif;
          line-height: ${forms.inputfield.userinput.typography.md.lineHeight};
          padding: ${forms.inputfield.container.padding.md};
        }

        &.lg {
          font-weight: ${forms.inputfield.userinput.typography.lg.fontWeight};
          font-size: ${forms.inputfield.userinput.typography.lg.fontSize};
          font-family: ${forms.inputfield.userinput.typography.lg.fontFamily}, sans-serif;
          line-height: ${forms.inputfield.userinput.typography.lg.lineHeight};
          padding: ${forms.inputfield.container.padding.lg};
        }
      }

      .blr-input-inner-container.${theme} {
        &.sm {
          padding: ${forms.labelslot.padding.sm};
          margin: ${forms.inputslot.margin.sm};
        }

        &.md {
          padding: ${forms.labelslot.padding.md};
          margin: ${forms.inputslot.margin.md};
        }

        &.lg {
          padding: ${forms.labelslot.padding.lg};
          margin: ${forms.inputslot.margin.lg};
        }
      }

      .caption-wrapper.${theme} {
        &.sm {
          margin: ${forms.captionslot.margin.sm};
        }

        &.md {
          margin: ${forms.captionslot.margin.md};
        }

        &.lg {
          margin: ${forms.captionslot.margin.lg};
        }
      }

      .blr-form-label-appendix.${theme} {
        &.sm {
          padding-left: ${forms.labelslot.padding.sm};
        }

        &.md {
          padding-left: ${forms.labelslot.padding.md};
        }

        &.lg {
          padding-left: ${forms.labelslot.padding.lg};
        }
      }
    `;
  })}
`;

export const staticComponentStyles = typeSafeNestedCss/*css*/ `
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { FormLabel } = cmp;

    return typeSafeCss/*css*/ `
      .blr-form-label.${theme} {
        color: ${FormLabel.Label.TextColor.Rest};

        &:focus {
          color: ${FormLabel.Label.TextColor.Focus};
          .blr-form-label-appendix {
            color: ${FormLabel.LabelAppendix.TextColor.Focus};
          }
        }

        &:hover {
          color: ${FormLabel.Label.TextColor.Hover};
          .blr-form-label-appendix {
            color: ${FormLabel.LabelAppendix.TextColor.Hover};
          }
        }

        &:disabled {
          color: ${FormLabel.Label.TextColor.Disabled};
          .blr-form-label-appendix {
            color: ${FormLabel.LabelAppendix.TextColor.Disabled};
          }
        }

        &[readonly] {
          color: ${FormLabel.Label.TextColor.ReadOnly};
          .blr-form-label-appendix {
            color: ${FormLabel.LabelAppendix.TextColor.ReadOnly};
          }
        }

        &.error {
          color: ${FormLabel.Label.TextColor.Error};
          .blr-form-label-appendix {
            color: ${FormLabel.LabelAppendix.TextColor.Error};
          }
        }

        &.sm {
          font-weight: ${FormLabel.Label.Typography.SM.fontWeight};
          font-size: ${FormLabel.Label.Typography.SM.fontSize};
          font-family: ${FormLabel.Label.Typography.SM.fontFamily}, sans-serif;
          line-height: ${FormLabel.Label.Typography.SM.lineHeight};
          gap: ${FormLabel.Container.ItemSpacing.SM};
        }

        &.md {
          font-weight: ${FormLabel.Label.Typography.MD.fontWeight};
          font-size: ${FormLabel.Label.Typography.MD.fontSize};
          font-family: ${FormLabel.Label.Typography.MD.fontFamily}, sans-serif;
          line-height: ${FormLabel.Label.Typography.MD.lineHeight};
          gap: ${FormLabel.Container.ItemSpacing.MD};
        }

        &.lg {
          font-weight: ${FormLabel.Label.Typography.LG.fontWeight};
          font-size: ${FormLabel.Label.Typography.LG.fontSize};
          font-family: ${FormLabel.Label.Typography.LG.fontFamily}, sans-serif;
          line-height: ${FormLabel.Label.Typography.LG.lineHeight};
          gap: ${FormLabel.Container.ItemSpacing.LG};
        }
      }

      .blr-form-label-inline.${theme} {
        &.sm {
          font-weight: ${FormLabel.InlineLabel.Typography.SM.fontWeight};
          font-size: ${FormLabel.InlineLabel.Typography.SM.fontSize};
          font-family: ${FormLabel.InlineLabel.Typography.SM.fontFamily}, sans-serif;
          line-height: ${FormLabel.InlineLabel.Typography.SM.lineHeight};
        }

        &.md {
          font-weight: ${FormLabel.InlineLabel.Typography.MD.fontWeight};
          font-size: ${FormLabel.InlineLabel.Typography.MD.fontSize};
          font-family: ${FormLabel.InlineLabel.Typography.MD.fontFamily}, sans-serif;
          line-height: ${FormLabel.InlineLabel.Typography.MD.lineHeight};
        }

        &.lg {
          font-weight: ${FormLabel.InlineLabel.Typography.LG.fontWeight};
          font-size: ${FormLabel.InlineLabel.Typography.LG.fontSize};
          font-family: ${FormLabel.InlineLabel.Typography.LG.fontFamily}, sans-serif;
          line-height: ${FormLabel.InlineLabel.Typography.LG.lineHeight};
        }
      }

      .blr-form-label-appendix.${theme} {
        color: ${FormLabel.LabelAppendix.TextColor.Rest};

        &.sm {
          font-weight: ${FormLabel.LabelAppendix.Typography.SM.fontWeight};
          font-size: ${FormLabel.LabelAppendix.Typography.SM.fontSize};
          font-family: ${FormLabel.LabelAppendix.Typography.SM.fontFamily}, sans-serif;
          line-height: ${FormLabel.LabelAppendix.Typography.SM.lineHeight};
        }

        &.md {
          font-weight: ${FormLabel.LabelAppendix.Typography.MD.fontWeight};
          font-size: ${FormLabel.LabelAppendix.Typography.MD.fontSize};
          font-family: ${FormLabel.LabelAppendix.Typography.MD.fontFamily}, sans-serif;
          line-height: ${FormLabel.LabelAppendix.Typography.MD.lineHeight};
        }

        &.lg {
          font-weight: ${FormLabel.LabelAppendix.Typography.LG.fontWeight};
          font-size: ${FormLabel.LabelAppendix.Typography.LG.fontSize};
          font-family: ${FormLabel.LabelAppendix.Typography.LG.fontFamily}, sans-serif;
          line-height: ${FormLabel.LabelAppendix.Typography.LG.lineHeight};
        }
      }
    `;
  })}
`;

export const staticStyles = typeSafeNestedCss/*css*/ `
  ${staticBaseStyles.cssText}
  ${staticSemanticStyles.cssText}
  ${staticComponentStyles.cssText}
`;
