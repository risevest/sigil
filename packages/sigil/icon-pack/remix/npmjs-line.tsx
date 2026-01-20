import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NpmjsLine = /* @__PURE__ */ memo(function NpmjsLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-14v14h14zm-2 2v10h-2.5V9.5h-2.5V17h-5V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Npmjs Line
 * @see {@link https://remixicon.com/icon/npmjs-line Remix Icon Docs}
 */
export { NpmjsLine }
