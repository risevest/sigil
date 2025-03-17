import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 5.5L12.5 3.5H4.5V20.5H6.5V13.5H11.5L12.5 15.5H19.5V5.5H13.5ZM17.5 13.5H13.5L12.5 11.5H6.5V5.5H11.5L12.5 7.5H17.5V13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'OutlinedFlag'

/**
 * Material Icon: Outlined Flag
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:outlined_flag Material Icon Docs}
 */
export const OutlinedFlag = memo(Icon)
