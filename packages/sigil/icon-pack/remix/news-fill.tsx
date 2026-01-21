import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NewsFill = /* @__PURE__ */ memo(function NewsFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 4h6v6H6zm2 2v2h2V9zm10 0h-4V7h4zm-4 4v-2h4v2zm-8 4v-2h12v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: News Fill
 * @see {@link https://remixicon.com/icon/news-fill Remix Icon Docs}
 */
export { NewsFill }
