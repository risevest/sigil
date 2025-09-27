import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.001 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55A3 3 0 0 0 12 9a3 3 0 0 0-1.404 5.652l-2.518 6.55A10 10 0 0 1 2 12c0-5.523 4.477-10 10-10" />
    </Svg>
  )
})
Icon.displayName = 'OpenSourceFill'
/**
 * Remix Icon: Open Source Fill
 * @see {@link https://remixicon.com/icon/open-source-fill Remix Icon Docs}
 */
export const OpenSourceFill = Icon
