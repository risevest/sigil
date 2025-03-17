import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 10V8H16V4H14V8H10V4H8V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20ZM14 14H10V10H14V14Z" />
    </Svg>
  )
}

Icon.displayName = 'Tag'

/**
 * Material Icon: Tag
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tag Material Icon Docs}
 */
export const Tag = memo(Icon)
