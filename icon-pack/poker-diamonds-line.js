import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.03607 10.7336C3.43329 11.4703 3.43329 12.5298 4.03607 13.2665L11.2259 22.0541C11.626 22.5431 12.3737 22.5431 12.7738 22.0541L19.9637 13.2665C20.5664 12.5298 20.5664 11.4703 19.9637 10.7336L12.7738 1.94599C12.3737 1.45697 11.626 1.45697 11.2259 1.94599L4.03607 10.7336ZM11.9999 4.15841L18.4157 12L11.9999 19.8417L5.58398 12L11.9999 4.15841Z" />
    </Svg>
  )
}

Icon.displayName = 'PokerDiamondsLine'

/**
 * Remix Icon: Poker Diamonds Line
 * @see {@link https://remixicon.com/icon/poker-diamonds-line Remix Icon Docs}
 */
export const PokerDiamondsLine = memo(Icon)