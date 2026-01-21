import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout5Line = /* @__PURE__ */ memo(function Layout5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 7H5v9h14zm-3 5a1 1 0 0 1 .117 1.993L16 17H8a1 1 0 0 1-.117-1.993L8 15zm0-3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm3-7H5v3h14z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Layout 5 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Layout5Line }
