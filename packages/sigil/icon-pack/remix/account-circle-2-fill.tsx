import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AccountCircle2Fill = /* @__PURE__ */ memo(function AccountCircle2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 3a2 2 0 0 1 2 2h2a4 4 0 0 0-8 0h2a2 2 0 0 1 2-2" />
    </Svg>
  )
})
/**
 * Remix Icon: Account Circle 2 Fill
 * @see {@link https://remixicon.com/icon/account-circle-2-fill Remix Icon Docs}
 */
export { AccountCircle2Fill }
