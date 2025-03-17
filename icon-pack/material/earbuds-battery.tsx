import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 7H20V6H18V7H17C16.45 7 16 7.45 16 8V17C16 17.55 16.45 18 17 18H21C21.55 18 22 17.55 22 17V8C22 7.45 21.55 7 21 7ZM20 16H18V9H20V16ZM14 9.38C14 7.51 12.49 6 10.62 6C8.75 6 7.25 7.51 7.25 9.38V14.63C7.25 15.67 6.41 16.51 5.37 16.51C4.33 16.51 3.5 15.66 3.5 14.62V9.92C3.66 9.97 3.83 10 4 10C5.1 10 6 9.1 6 8C6 6.9 5.1 6 4 6C2.9 6 2 6.9 2 8C2 8.04 2 14.62 2 14.62C2 16.49 3.51 18 5.38 18C7.25 18 8.76 16.49 8.76 14.62V9.38C8.76 8.34 9.6 7.5 10.64 7.5C11.68 7.5 12.52 8.34 12.52 9.38V14.08C12.34 14.03 12.17 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 15.96 14 9.38 14 9.38Z" />
    </Svg>
  )
}

Icon.displayName = 'EarbudsBattery'

/**
 * Material Icon: Earbuds Battery
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:earbuds_battery Material Icon Docs}
 */
export const EarbudsBattery = memo(Icon)
