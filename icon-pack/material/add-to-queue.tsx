import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 15H13V12H16V10H13V7H11V10H8V12H11V15ZM21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17Z" />
    </Svg>
  )
}

Icon.displayName = 'AddToQueue'

/**
 * Material Icon: Add To Queue
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_to_queue Material Icon Docs}
 */
export const AddToQueue = memo(Icon)
