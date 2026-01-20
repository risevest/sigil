import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GitMergeFill = /* @__PURE__ */ memo(function GitMergeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.105 8.79A3 3 0 0 0 10 11h4a5 5 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3 3 0 0 0 14 13h-4a4.98 4.98 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2.105-.04" />
    </Svg>
  )
})
/**
 * Remix Icon: Git Merge Fill
 * @see {@link https://remixicon.com/icon/git-merge-fill Remix Icon Docs}
 */
export { GitMergeFill }
