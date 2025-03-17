import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 15H20V13H4V15ZM4 19H20V17H4V19ZM4 11H20V9H4V11ZM4 5V7H20V5H4Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewHeadline'

/**
 * Material Icon: View Headline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_headline Material Icon Docs}
 */
export const ViewHeadline = memo(Icon)
