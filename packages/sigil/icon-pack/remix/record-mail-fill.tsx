import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.743 15h4.514a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2M5.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </Svg>
  )
})
Icon.displayName = 'RecordMailFill'
/**
 * Remix Icon: Record Mail Fill
 * @see {@link https://remixicon.com/icon/record-mail-fill Remix Icon Docs}
 */
export const RecordMailFill = Icon
