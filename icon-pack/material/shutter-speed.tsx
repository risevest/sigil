import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 1.5H9V3.5H15V1.5ZM19.03 7.89L20.45 6.47C20.02 5.96 19.55 5.48 19.04 5.06L17.62 6.48C16.07 5.24 14.12 4.5 12 4.5C7.03 4.5 3 8.53 3 13.5C3 18.47 7.02 22.5 12 22.5C16.98 22.5 21 18.47 21 13.5C21 11.38 20.26 9.43 19.03 7.89ZM12 20.5C8.13 20.5 5 17.37 5 13.5C5 9.63 8.13 6.5 12 6.5C15.87 6.5 19 9.63 19 13.5C19 17.37 15.87 20.5 12 20.5ZM11.68 15.5H6.35C6.92 17.12 8.17 18.42 9.76 19.06L9.65 19L11.68 15.5ZM17.65 11.5C17.08 9.9 15.87 8.61 14.31 7.96L12.26 11.5H17.65ZM10.61 19.33C11.06 19.44 11.52 19.5 12 19.5C13.34 19.5 14.57 19.05 15.57 18.31L13.46 14.41L10.61 19.33ZM7.55 9.49C6.59 10.55 6 11.96 6 13.5C6 13.84 6.04 14.17 6.09 14.5H10.81L7.55 9.49ZM16.34 17.63C17.37 16.56 18 15.1 18 13.5C18 13.16 17.96 12.83 17.91 12.5H13.57L16.34 17.63ZM13.33 7.65C12.9 7.56 12.46 7.5 12 7.5C10.6 7.5 9.31 7.99 8.29 8.79L10.61 12.35L13.33 7.65Z" />
    </Svg>
  )
}

Icon.displayName = 'ShutterSpeed'

/**
 * Material Icon: Shutter Speed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shutter_speed Material Icon Docs}
 */
export const ShutterSpeed = memo(Icon)
