import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const QuoteText = /* @__PURE__ */ memo(function QuoteText(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4H3v2h18zm0 7H8v2h13zm0 7H8v2h13zM5 11H3v9h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Quote Text
 * @see {@link https://remixicon.com/icon/quote-text Remix Icon Docs}
 */
export { QuoteText }
