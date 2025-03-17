import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4V20H22V4H2ZM6.5 18H4V15.5H6.5V18ZM6.5 13.25H4V10.75H6.5V13.25ZM6.5 8.5H4V6H6.5V8.5ZM11 18H8.5V15.5H11V18ZM11 13.25H8.5V10.75H11V13.25ZM11 8.5H8.5V6H11V8.5ZM15.5 18H13V15.5H15.5V18ZM15.5 13.25H13V10.75H15.5V13.25ZM15.5 8.5H13V6H15.5V8.5ZM20 18H17.5V15.5H20V18ZM20 13.25H17.5V10.75H20V13.25ZM20 8.5H17.5V6H20V8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewCompact'

/**
 * Material Icon: View Compact
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_compact Material Icon Docs}
 */
export const ViewCompact = memo(Icon)
