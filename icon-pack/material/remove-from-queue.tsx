import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17ZM16 10V12H8V10H16Z" />
    </Svg>
  )
}

Icon.displayName = 'RemoveFromQueue'

/**
 * Material Icon: Remove From Queue
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:remove_from_queue Material Icon Docs}
 */
export const RemoveFromQueue = memo(Icon)
