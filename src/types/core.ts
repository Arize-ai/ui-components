/**
 * the visual dimension of a component. E.g. width, height, padding, margin, etc.
 * TODO: Flesh out with more dimension values
 * @see https://github.com/adobe/react-spectrum/blob/4a7576870d4dbe80cdbebba2043f593474ad6cb4/packages/%40react-types/shared/src/dna.d.ts#L16
 */
export type DimensionValue =
  | 'size-0'
  | 'size-10'
  | 'size-25'
  | 'size-40'
  | 'size-50'
  | 'size-65'
  | 'size-75'
  | 'size-85'
  | 'size-100'
  | 'size-115'
  | 'size-125'
  | 'size-130'
  | 'size-150'
  | 'size-160'
  | 'size-175'
  | 'size-200'
  | 'size-225'
  | 'size-250'
  | 'size-275'
  | 'size-300'
  | 'size-325'
  | 'size-350'
  | 'size-400'
  | 'size-450'
  | 'size-500'
  | 'size-550'
  | 'size-600'
  | 'size-675'
  | 'size-700'
  | 'size-800'
  | 'size-900'
  | 'size-1000'
  | 'size-1200'
  | 'size-1250'
  | 'size-1600'
  | 'size-1700'
  | 'size-2000'
  | 'size-2400'
  | 'size-3000'
  | 'size-3400'
  | 'size-3600'
  | 'size-4600'
  | 'size-5000'
  | 'size-6000'
  | 'static-size-0'
  | 'static-size-10'
  | 'static-size-25'
  | 'static-size-50'
  | 'static-size-40'
  | 'static-size-65'
  | 'static-size-100'
  | 'static-size-115'
  | 'static-size-125'
  | 'static-size-130'
  | 'static-size-150'
  | 'static-size-160'
  | 'static-size-175'
  | 'static-size-200'
  | 'static-size-225'
  | 'static-size-250'
  | 'static-size-300'
  | 'static-size-400'
  | 'static-size-450'
  | 'static-size-500'
  | 'static-size-550'
  | 'static-size-600'
  | 'static-size-700'
  | 'static-size-800'
  | 'static-size-900'
  | 'static-size-1000'
  | 'static-size-1200'
  | 'static-size-1700'
  | 'static-size-2400'
  | 'static-size-2600'
  | 'static-size-3400'
  | 'static-size-3600'
  | 'static-size-4600'
  | 'static-size-5000'
  | 'static-size-6000'
  | 'single-line-height'
  | 'single-line-width'
  | number
  // This allows autocomplete to work properly and not collapse the above options into just `string`.
  // https://github.com/microsoft/TypeScript/issues/29729.
  | (string & {});

export type BorderRadiusValue = 'small' | 'medium';
export type BorderColorValue = 'default' | 'light' | 'dark';
export type BorderSizeValue = 'thin' | 'thick' | 'thicker' | 'thickest';
export type BackgroundColorValue = 'light' | 'dark' | ColorValue;

export type ColorValue =
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'danger';

export type DesignationColorValue =
  | 'designationPurple'
  | 'designationTurquoise';
