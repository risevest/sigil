import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 19V13.8889L3 5V3H21V5L13 13.8889V19H18V21H6V19H11ZM7.49073 7H16.5093L18.3093 5H5.69072L7.49073 7Z" />
    </Svg>
  )
}

Icon.displayName = 'GobletFill'

/**
 * Remix Icon: Goblet Fill
 * @see {@link https://remixicon.com/icon/goblet-fill Remix Icon Docs}
 */
export const GobletFill = memo(Icon)
