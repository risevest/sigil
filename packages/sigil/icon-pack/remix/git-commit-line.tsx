import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GitCommitLine = /* @__PURE__ */ memo(function GitCommitLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Git Commit Line
 * @see {@link https://remixicon.com/icon/git-commit-line Remix Icon Docs}
 */
export { GitCommitLine }
