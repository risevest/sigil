import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 14.5L13.5 20.5L12.08 19.08L15.67 15.5H4.5V3.5H6.5V13.5H15.67L12.08 9.92L13.5 8.5L19.5 14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SubdirectoryArrowRight'

/**
 * Material Icon: Subdirectory Arrow Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subdirectory_arrow_right Material Icon Docs}
 */
export const SubdirectoryArrowRight = memo(Icon)
