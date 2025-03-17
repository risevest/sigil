import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19V3H4V19H2V21H22V19H20ZM13 5V19H11V5H13ZM6 5H9V19H6V5ZM15 19V5H18V19H15Z" />
    </Svg>
  )
}

Icon.displayName = 'CurtainsClosed'

/**
 * Material Icon: Curtains Closed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:curtains_closed Material Icon Docs}
 */
export const CurtainsClosed = memo(Icon)
