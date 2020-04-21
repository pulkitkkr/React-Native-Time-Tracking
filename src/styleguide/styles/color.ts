export type UiColor = 'purple' | 'white' | 'lightPurple' | 'transparent' | 'black';

const colorsMapping: { [k in UiColor]: string } = {
  purple: '#5628EE',
  lightPurple: '#8c6ff0',
  white: '#fff',
  black: '#000',
  transparent: '#00000000',
};

export const uiColorToBaseColor = (color: UiColor): string => colorsMapping[color];
