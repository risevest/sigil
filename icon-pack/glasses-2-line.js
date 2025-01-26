import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.01513 10.9876C3.04409 9.4534 3.12559 8.46708 3.3548 7.32118C3.68643 5.66318 4.30872 4.66231 5.55413 3.83212L4.44481 2.16797C2.68993 3.33777 1.81208 4.83691 1.39364 6.92891C0.873728 9.52823 0.995882 14.8642 0.999024 14.9975C0.999024 14.9983 0.999023 14.9992 0.999023 15C0.999023 17.7614 3.2376 20 5.99902 20C8.76045 20 10.999 17.7614 10.999 15C10.999 14.7261 10.9769 14.4569 10.9343 14.1941C11.2647 14.0687 11.6233 14 11.999 14C12.3748 14 12.7334 14.0687 13.0638 14.1941C13.0211 14.4569 12.999 14.7261 12.999 15C12.999 17.7614 15.2376 20 17.999 20C20.7604 20 22.999 17.7614 22.999 15C22.999 15 22.999 15 22.999 15L22.9992 15C22.9992 15 23.1312 9.56126 22.6048 6.92895C22.1865 4.83699 21.3088 3.33785 19.5542 2.16802L18.4447 3.83207C19.6899 4.66224 20.3121 5.66309 20.6436 7.32114C20.8728 8.46712 20.9543 9.45349 20.9832 10.9878C20.1503 10.3673 19.1176 10 17.999 10C16.2206 10 14.6607 10.9281 13.7745 12.3247C13.2223 12.1149 12.6235 12 11.999 12C11.3745 12 10.7758 12.1149 10.2236 12.3247C9.33736 10.9281 7.77743 10 5.99902 10C4.88064 10 3.84801 10.3672 3.01513 10.9876ZM2.99902 15C2.99902 13.3431 4.34217 12 5.99902 12C7.30607 12 8.42033 12.8364 8.83082 14.0063C8.93949 14.316 8.99902 14.65 8.99902 15C8.99902 16.6569 7.65588 18 5.99902 18C4.34217 18 2.99902 16.6569 2.99902 15ZM15.1672 14.0063C15.5777 12.8364 16.692 12 17.999 12C19.6559 12 20.999 13.3431 20.999 15C20.999 16.6569 19.6559 18 17.999 18C16.3422 18 14.999 16.6569 14.999 15C14.999 14.65 15.0586 14.316 15.1672 14.0063Z" />
    </Svg>
  )
}

Icon.displayName = 'Glasses2Line'

/**
 * Remix Icon: Glasses 2 Line
 * @see {@link https://remixicon.com/icon/glasses-2-line Remix Icon Docs}
 */
export const Glasses2Line = memo(Icon)
