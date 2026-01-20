import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GitCommitFill = /* @__PURE__ */ memo(function GitCommitFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Git Commit Fill
 * @see {@link https://remixicon.com/icon/git-commit-fill Remix Icon Docs}
 */
export { GitCommitFill }
