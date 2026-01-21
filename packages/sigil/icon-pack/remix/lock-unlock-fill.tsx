import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LockUnlockFill = /* @__PURE__ */ memo(function LockUnlockFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9zm3 5v2h4v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Lock Unlock Fill
 * @see {@link https://remixicon.com/icon/lock-unlock-fill Remix Icon Docs}
 */
export { LockUnlockFill }
