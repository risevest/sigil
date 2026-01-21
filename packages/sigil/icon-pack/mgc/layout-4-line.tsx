import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout4Line = /* @__PURE__ */ memo(function Layout4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2h-9v14h9zM8 5H5v14h3zm8 10a1 1 0 0 1 .117 1.993L16 17h-3a1 1 0 0 1-.117-1.993L13 15zm0-4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm0-4a1 1 0 0 1 .117 1.993L16 9h-3a1 1 0 0 1-.117-1.993L13 7z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Layout 4 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Layout4Line }
