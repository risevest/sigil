import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2.5C7.58 2.5 4 3 4 6.5V16.5C4 17.38 4.39 18.17 5 18.72V20.5C5 21.05 5.45 21.5 6 21.5H7C7.55 21.5 8 21.05 8 20.5V19.5H16V20.5C16 21.05 16.45 21.5 17 21.5H18C18.55 21.5 19 21.05 19 20.5V18.72C19.61 18.17 20 17.38 20 16.5V6.5C20 3 16.42 2.5 12 2.5ZM17.66 5.49H6.34C6.89 4.96 8.31 4.5 12 4.5C15.69 4.5 17.11 4.96 17.66 5.49ZM18 7.49V10.5H6V7.49H18ZM17.66 17.23L17.37 17.5H6.63L6.34 17.23C6.21 17.12 6 16.87 6 16.5V12.5H18V16.5C18 16.87 17.79 17.12 17.66 17.23Z" />
      <Path d="M8.5 16.5C9.32843 16.5 10 15.8284 10 15C10 14.1716 9.32843 13.5 8.5 13.5C7.67157 13.5 7 14.1716 7 15C7 15.8284 7.67157 16.5 8.5 16.5Z" />
      <Path d="M15.5 16.5C16.3284 16.5 17 15.8284 17 15C17 14.1716 16.3284 13.5 15.5 13.5C14.6716 13.5 14 14.1716 14 15C14 15.8284 14.6716 16.5 15.5 16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'DirectionsBus'

/**
 * Material Icon: Directions Bus
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions_bus Material Icon Docs}
 */
export const DirectionsBus = memo(Icon)
