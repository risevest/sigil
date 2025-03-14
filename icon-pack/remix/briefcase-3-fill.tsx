import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM17 7V12H20V7H17ZM15 7H9V12H15V7ZM7 7H4V12H7V7ZM9 3V5H15V3H9Z" />
    </Svg>
  )
}

Icon.displayName = 'Briefcase3Fill'

/**
 * Remix Icon: Briefcase 3 Fill
 * @see {@link https://remixicon.com/icon/briefcase-3-fill Remix Icon Docs}
 */
export const Briefcase3Fill = memo(Icon)
