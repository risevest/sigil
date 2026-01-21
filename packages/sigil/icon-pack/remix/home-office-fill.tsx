import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HomeOfficeFill = /* @__PURE__ */ memo(function HomeOfficeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.8 9H12v8h-1v4H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0zM14 11h9v7h-9zm-1 10h11v-2H13z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home Office Fill
 * @see {@link https://remixicon.com/icon/home-office-fill Remix Icon Docs}
 */
export { HomeOfficeFill }
