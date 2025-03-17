import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 8.5H11L9 13.5H6L2 22.5H22L18 8.5ZM7.3 15.5H10.35L10.85 14.24L12.35 10.5H16.49L19.35 20.5H5.08L7.3 15.5Z" />
      <Path d="M15 1.5H13V5.5H15V1.5Z" />
      <Path d="M18.9496 3.13989L16.1212 5.96829L17.5354 7.38249L20.3638 4.55409L18.9496 3.13989Z" />
      <Path d="M9.05389 3.1361L7.63969 4.5503L10.4681 7.3787L11.8823 5.9645L9.05389 3.1361Z" />
    </Svg>
  )
}

Icon.displayName = 'Volcano'

/**
 * Material Icon: Volcano
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:volcano Material Icon Docs}
 */
export const Volcano = memo(Icon)
