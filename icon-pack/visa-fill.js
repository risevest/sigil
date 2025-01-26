import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 4H23V6H1V4ZM1 18H23V20H1V18ZM19.6217 14.9136L19.448 14.0436L17.4994 14.0435L17.1899 14.907L15.6275 14.9105C16.6316 12.5036 17.3767 10.7206 17.8628 9.56169C17.9898 9.25902 18.2156 9.10462 18.5482 9.10699C18.802 9.10888 19.2168 9.10912 19.7927 9.10771L21 14.9108L19.6217 14.9136ZM17.9376 12.8518H19.1936L18.7248 10.6715L17.9376 12.8518ZM7.87203 9.10561L9.44245 9.10764L7.01511 14.9136L5.42535 14.9129C4.88785 12.8424 4.49315 11.3073 4.24125 10.3076C4.16402 10.001 4.01042 9.787 3.71519 9.68577C3.45195 9.59551 3.01355 9.45594 2.4 9.26707V9.10771C3.54718 9.10757 4.38339 9.10757 4.90863 9.10771C5.34299 9.10784 5.59619 9.31703 5.67765 9.74655C5.75942 10.1779 5.96599 11.2743 6.29735 13.0359L7.87203 9.10561ZM11.5994 9.10765L10.3588 14.913L8.86434 14.9108C8.89383 14.7698 9.30682 12.8347 10.1033 9.10561L11.5994 9.10765ZM14.6307 9C15.0773 9 15.6405 9.13846 15.9652 9.26707L15.703 10.4706C15.41 10.3532 14.9284 10.1944 14.5228 10.2006C13.933 10.2097 13.569 10.4566 13.569 10.6936C13.569 11.0783 14.2015 11.272 14.8528 11.6929C15.5956 12.1729 15.6937 12.603 15.6845 13.0713C15.6739 14.0422 14.8528 15 13.12 15C12.3286 14.9882 12.0444 14.9219 11.3995 14.6936L11.6718 13.4376C12.3282 13.712 12.6066 13.7991 13.1675 13.7991C13.6816 13.7991 14.1229 13.5918 14.1267 13.2308C14.1294 12.974 13.972 12.847 13.395 12.5293C12.8181 12.2117 12.0095 11.7726 12.0199 10.8889C12.0332 9.75821 13.1066 9 14.6307 9Z" />
    </Svg>
  )
}

Icon.displayName = 'VisaFill'

/**
 * Remix Icon: Visa Fill
 * @see {@link https://remixicon.com/icon/visa-fill Remix Icon Docs}
 */
export const VisaFill = memo(Icon)