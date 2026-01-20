import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HardDrive3Fill = /* @__PURE__ */ memo(function HardDrive3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.5 2a1 1 0 0 0-.992.876l-1.5 12A1 1 0 0 0 3 15v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6q0-.062-.008-.124l-1.5-12A1 1 0 0 0 18.5 2zM5 16h14v4H5zm10 1h2v2h-2zm-2 0h-2v2h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Hard Drive 3 Fill
 * @see {@link https://remixicon.com/icon/hard-drive-3-fill Remix Icon Docs}
 */
export { HardDrive3Fill }
