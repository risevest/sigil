import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm3 3h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7z" />
    </Svg>
  )
})
Icon.displayName = 'TextSnippet'
/**
 * Remix Icon: Text Snippet
 * @see {@link https://remixicon.com/icon/text-snippet Remix Icon Docs}
 */
export const TextSnippet = Icon
