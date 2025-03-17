import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 4H19V6H5V4ZM5 14H9V20H15V14H19L12 7L5 14ZM13 12V18H11V12H9.83L12 9.83L14.17 12H13Z" />
    </Svg>
  )
}

Icon.displayName = 'Publish'

/**
 * Material Icon: Publish
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:publish Material Icon Docs}
 */
export const Publish = memo(Icon)
