import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MacbookLine = /* @__PURE__ */ memo(function MacbookLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5v11h16V5zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2zM1 19h22v2H1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Macbook Line
 * @see {@link https://remixicon.com/icon/macbook-line Remix Icon Docs}
 */
export { MacbookLine }
