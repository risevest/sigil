import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 2V7H8L12 11L16 7H13V2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H11ZM19 16H5V20H19V16ZM17 17V19H15V17H17Z" />
    </Svg>
  )
}

Icon.displayName = 'InstallFill'

/**
 * Remix Icon: Install Fill
 * @see {@link https://remixicon.com/icon/install-fill Remix Icon Docs}
 */
export const InstallFill = memo(Icon)
