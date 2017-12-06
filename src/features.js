/* eslint-disable max-len */
import customProperties from "postcss-custom-properties"
import applyRule from "postcss-apply"
import calc from "postcss-calc"
import imageSet from "postcss-image-set-polyfill"
import nesting from "postcss-nesting"
import customMedia from "postcss-custom-media"
import mediaQueriesRange from "postcss-media-minmax"
import customSelectors from "postcss-custom-selectors"
import attributeCaseInsensitive from "postcss-attribute-case-insensitive"
import colorRebeccapurple from "postcss-color-rebeccapurple"
import colorHwb from "postcss-color-hwb"
import colorHsl from "postcss-color-hsl"
import colorRgb from "postcss-color-rgb"
import colorGray from "postcss-color-gray"
import colorHexAlpha from "postcss-color-hex-alpha"
import colorFunction from "postcss-color-function"
import fontFamilySystemUi from "postcss-font-family-system-ui"
import fontVariant from "postcss-font-variant"
import filter from "pleeease-filters"
import initial from "postcss-initial"
import rem from "pixrem"
import pseudoElements from "postcss-pseudoelements"
import pseudoClassMatches from "postcss-selector-matches"
import pseudoClassNot from "postcss-selector-not"
import pseudoClassAnyLink from "postcss-pseudo-class-any-link"
import colorRgba from "postcss-color-rgba-fallback"
import overflowWrap from "postcss-replace-overflow-wrap"
import autoprefixer from "autoprefixer"

export default {
  /**
   * REMINDER:
   * ******************
   * order is important
   * ******************
   */
   // https://npmjs.com/package/postcss-custom-properties
  customProperties,

  // https://npmjs.com/package/postcss-apply
  applyRule,

  // https://npmjs.com/package/postcss-calc
  calc,

  // https://www.npmjs.com/package/postcss-image-set-polyfill
  imageSet,

  // https://npmjs.com/package/postcss-nesting
  nesting,

  // https://npmjs.com/package/postcss-custom-media
  customMedia,

  // https://npmjs.com/package/postcss-media-minmax
  mediaQueriesRange,

  // https://npmjs.com/package/postcss-custom-selectors
  customSelectors,

  // https://npmjs.com/package/postcss-attribute-case-insensitive
  attributeCaseInsensitive,

  // https://npmjs.com/package/postcss-color-rebeccapurple
  colorRebeccapurple,

  // https://npmjs.com/package/postcss-color-hwb
  colorHwb,

  // https://npmjs.com/package/postcss-color-hsl
  colorHsl,

  // https://npmjs.com/package/postcss-color-rgb
  colorRgb,

  // https://npmjs.com/package/postcss-color-gray
  colorGray,

  // https://npmjs.com/package/postcss-color-hex-alpha
  colorHexAlpha,

  // https://npmjs.com/package/postcss-color-function
  colorFunction,

  // https://npmjs.com/package/postcss-font-family-system-ui
  fontFamilySystemUi,

  // https://npmjs.com/package/postcss-font-variant
  fontVariant,

  // https://npmjs.com/package/pleeease-filters
  filter,

  // https://npmjs.com/package/postcss-initial
  initial,

  // https://npmjs.com/package/pixrem
  rem,

  // https://npmjs.com/package/postcss-pseudoelements
  pseudoElements,

  // https://npmjs.com/package/postcss-selector-matches
  pseudoClassMatches,

  // https://npmjs.com/package/postcss-selector-not
  pseudoClassNot,

  // https://npmjs.com/package/postcss-pseudo-class-any-link
  pseudoClassAnyLink,

  // https://npmjs.com/package/postcss-color-rgba-fallback
  colorRgba,

  // https://www.npmjs.com/package/postcss-replace-overflow-wrap
  overflowWrap,

  // https://npmjs.com/package/autoprefixer
  autoprefixer,
}
