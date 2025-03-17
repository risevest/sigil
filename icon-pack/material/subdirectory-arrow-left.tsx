import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 8.5L11.92 9.92L8.33 13.5H17.5V3.5H19.5V15.5H8.33L11.92 19.08L10.5 20.5L4.5 14.5L10.5 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SubdirectoryArrowLeft'

/**
 * Material Icon: Subdirectory Arrow Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subdirectory_arrow_left Material Icon Docs}
 */
export const SubdirectoryArrowLeft = memo(Icon)
