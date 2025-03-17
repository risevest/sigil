import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 9.5H15V3.5H9V9.5H5L12 16.5L19 9.5ZM11 11.5V5.5H13V11.5H14.17L12 13.67L9.83 11.5H11ZM5 18.5H19V20.5H5V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Download'

/**
 * Material Icon: Download
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:download Material Icon Docs}
 */
export const Download = memo(Icon)
