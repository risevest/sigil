import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3.414 6 2.293-2.293-1.414-1.414L.586 6l3.707 3.707 1.414-1.414zm6.172 0L7.293 3.707l1.414-1.414L12.414 6 8.707 9.707 7.293 8.293zM14 3h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7h16V5h-6z" />
    </Svg>
  )
})
Icon.displayName = 'CodeBlock'
/**
 * Remix Icon: Code Block
 * @see {@link https://remixicon.com/icon/code-block Remix Icon Docs}
 */
export const CodeBlock = Icon
