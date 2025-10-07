import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m7.048 13.406 3.535 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.415 1.414-2.475 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.474 2.475-1.415-1.414 1.414-1.415L3.002 6.531zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535z" />
    </Svg>
  )
})
Icon.displayName = 'SwordFill'
/**
 * Remix Icon: Sword Fill
 * @see {@link https://remixicon.com/icon/sword-fill Remix Icon Docs}
 */
export const SwordFill = Icon
