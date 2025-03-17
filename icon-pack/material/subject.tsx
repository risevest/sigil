import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 17H4V19H14V17ZM20 9H4V11H20V9ZM4 15H20V13H4V15ZM4 5V7H20V5H4Z" />
    </Svg>
  )
}

Icon.displayName = 'Subject'

/**
 * Material Icon: Subject
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subject Material Icon Docs}
 */
export const Subject = memo(Icon)
