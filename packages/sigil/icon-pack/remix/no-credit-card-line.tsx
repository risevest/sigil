import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.586 21 1.607 1.607 1.414-1.415-19.8-19.799-1.413 1.415.726.726A1 1 0 0 0 2.005 4v16a1 1 0 0 0 1 1zm-2-2H4.005v-7h6.58zm-11-11H4.005V5.419zm15.419-4v13.762l-2-2V12h-3.762l-4-4h7.762V5H9.243l-2-2h13.762a1 1 0 0 1 1 1" />
    </Svg>
  )
})
Icon.displayName = 'NoCreditCardLine'
/**
 * Remix Icon: No Credit Card Line
 * @see {@link https://remixicon.com/icon/no-credit-card-line Remix Icon Docs}
 */
export const NoCreditCardLine = Icon
