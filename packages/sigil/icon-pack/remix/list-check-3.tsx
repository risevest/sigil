import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ListCheck3 = /* @__PURE__ */ memo(function ListCheck3(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 6v3H5V6zM3 4v7h7V4zm10 0h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-2.293-1.793-1.414-1.414L6 18.086l-1.793-1.793-1.414 1.414L6 20.914z" />
    </Svg>
  )
})
/**
 * Remix Icon: List Check 3
 * @see {@link https://remixicon.com/icon/list-check-3 Remix Icon Docs}
 */
export { ListCheck3 }
