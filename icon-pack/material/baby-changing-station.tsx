import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 8.5V10.5H11L8.31 9.32L7 13.25V22.5H3V12.5L4.58 7.87C4.96 6.75 6.22 6.19 7.3 6.68L11.45 8.51L14 8.5ZM8 1.5C6.9 1.5 6 2.4 6 3.5C6 4.6 6.9 5.5 8 5.5C9.1 5.5 10 4.6 10 3.5C10 2.4 9.1 1.5 8 1.5ZM9 19.5H21V17.5H9V19.5ZM19.5 16.5C20.33 16.5 21 15.83 21 15C21 14.17 20.33 13.5 19.5 13.5C18.67 13.5 18 14.17 18 15C18 15.83 18.67 16.5 19.5 16.5ZM13 12.5C13 11.95 12.55 11.5 12 11.5H9V13.5H11V14.5C11 15.6 11.9 16.5 13 16.5H15C16.1 16.5 17 15.6 17 14.5V11.5H15V13.5H13V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'BabyChangingStation'

/**
 * Material Icon: Baby Changing Station
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:baby_changing_station Material Icon Docs}
 */
export const BabyChangingStation = memo(Icon)
