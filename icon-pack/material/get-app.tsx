import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 5.5V11.5H14.17L12 13.67L9.83 11.5H11V5.5H13ZM15 3.5H9V9.5H5L12 16.5L19 9.5H15V3.5ZM19 18.5H5V20.5H19V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'GetApp'

/**
 * Material Icon: Get App
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:get_app Material Icon Docs}
 */
export const GetApp = memo(Icon)
