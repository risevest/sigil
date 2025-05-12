import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path d="M22 7H13V9H22V7Z" fill={color} />
      <Path d="M22 15H13V17H22V15Z" fill={color} />
      <Path d="M22 11H16V13H22V11Z" fill={color} />
      <Path d="M13 12L8 7V11H2V13H8V17L13 12Z" fill={color} />
    </Svg>
  )
}

Icon.displayName = 'ReadMore'

/**
 * Material Icon: Read More
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:read_more Material Icon Docs}
 */
export const ReadMore = memo(Icon)
