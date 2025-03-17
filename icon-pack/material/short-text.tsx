import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 9H20V11H4V9ZM4 13H14V15H4V13Z" />
    </Svg>
  )
}

Icon.displayName = 'ShortText'

/**
 * Material Icon: Short Text
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:short_text Material Icon Docs}
 */
export const ShortText = memo(Icon)
