import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ListView = /* @__PURE__ */ memo(function ListView(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h2v2H6zm2 4H6v2h2zm-2 4h2v2H6zm12-8h-8v2h8zm-8 8h8v2h-8zm8-4h-8v2h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: List View
 * @see {@link https://remixicon.com/icon/list-view Remix Icon Docs}
 */
export { ListView }
