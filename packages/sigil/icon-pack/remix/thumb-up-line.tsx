import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ThumbUpLine = /* @__PURE__ */ memo(function ThumbUpLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.6 8H21a2 2 0 0 1 2 2v2.105c0 .26-.051.52-.15.761l-3.095 7.515a1 1 0 0 1-.925.62H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.424L11.752.851a.5.5 0 0 1 .632-.159l1.814.908a2.5 2.5 0 0 1 1.305 2.852zM7 10.588V19h11.16L21 12.105V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.57l-.661-.331-4.71 6.672c-.25.354-.57.645-.933.858M5 11H3v8h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Thumb Up Line
 * @see {@link https://remixicon.com/icon/thumb-up-line Remix Icon Docs}
 */
export { ThumbUpLine }
