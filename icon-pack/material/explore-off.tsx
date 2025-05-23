import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 13.48 19.59 14.86 18.88 16.06L20.34 17.52C21.39 15.93 22 14.04 22 12C22 6.48 17.52 2 12 2C9.96 2 8.07 2.61 6.49 3.66L7.95 5.12C9.14 4.41 10.52 4 12 4ZM14.91 12.08L17.5 6.5L11.92 9.09L14.91 12.08ZM2.1 4.93L3.66 6.49C2.61 8.07 2 9.96 2 12C2 17.52 6.48 22 12 22C14.04 22 15.93 21.39 17.51 20.34L19.07 21.9L20.48 20.49L3.51 3.51L2.1 4.93ZM5.12 7.94L9.1 11.92L6.5 17.5L12.08 14.91L16.06 18.89C14.86 19.59 13.48 20 12 20C7.59 20 4 16.41 4 12C4 10.52 4.41 9.14 5.12 7.94Z" />
    </Svg>
  )
}

Icon.displayName = 'ExploreOff'

/**
 * Material Icon: Explore Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:explore_off Material Icon Docs}
 */
export const ExploreOff = memo(Icon)
