import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 0.269043L5.63604 6.633C2.12132 10.1477 2.12132 15.8462 5.63604 19.3609C9.15076 22.8756 14.8492 22.8756 18.364 19.3609C21.8787 15.8462 21.8787 10.1477 18.364 6.633L12 0.269043ZM16.2427 10.1714L9.17161 17.2425L7.7574 15.8282L14.8285 8.75718L16.2427 10.1714ZM8.11095 9.11073C8.69674 8.52494 9.64648 8.52494 10.2323 9.11073C10.8181 9.69652 10.8181 10.6463 10.2323 11.232C9.64648 11.8178 8.69674 11.8178 8.11095 11.232C7.52516 10.6463 7.52516 9.69652 8.11095 9.11073ZM15.8891 16.8889C15.3033 17.4747 14.3536 17.4747 13.7678 16.8889C13.182 16.3031 13.182 15.3534 13.7678 14.7676C14.3536 14.1818 15.3033 14.1818 15.8891 14.7676C16.4749 15.3534 16.4749 16.3031 15.8891 16.8889Z" />
    </Svg>
  )
}

Icon.displayName = 'WaterPercentFill'

/**
 * Remix Icon: Water Percent Fill
 * @see {@link https://remixicon.com/icon/water-percent-fill Remix Icon Docs}
 */
export const WaterPercentFill = memo(Icon)