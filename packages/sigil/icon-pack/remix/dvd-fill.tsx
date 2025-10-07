import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 11V6l-5 7h3v5l5-7zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
    </Svg>
  )
})
Icon.displayName = 'DvdFill'
/**
 * Remix Icon: Dvd Fill
 * @see {@link https://remixicon.com/icon/dvd-fill Remix Icon Docs}
 */
export const DvdFill = Icon
