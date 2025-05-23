import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 12V10H19V7L16 4L14 6L12 4L10 6L8 4L5 7V10H3V12H5V14H3V16H5V20H19V16H21V14H19V12H21ZM16 6.83L17 7.83V10H15V7.83L16 6.83ZM12 6.83L13 7.83V10H11V7.83L12 6.83ZM11 14V12H13V14H11ZM13 16V18H11V16H13ZM7 7.83L8 6.83L9 7.83V10H7V7.83ZM7 12H9V14H7V12ZM7 16H9V18H7V16ZM17 18H15V16H17V18ZM17 14H15V12H17V14Z" />
    </Svg>
  )
}

Icon.displayName = 'Fence'

/**
 * Material Icon: Fence
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fence Material Icon Docs}
 */
export const Fence = memo(Icon)
