import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM13 9H11V12H8V14H10.999L11 17H13L12.999 14H16V12H13V9ZM15 3H9V5H15V3Z" />
    </Svg>
  )
}

Icon.displayName = 'FirstAidKitFill'

/**
 * Remix Icon: First Aid Kit Fill
 * @see {@link https://remixicon.com/icon/first-aid-kit-fill Remix Icon Docs}
 */
export const FirstAidKitFill = memo(Icon)