import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 6V9.999H11V6H13V9.999H16V6H18V9.999L19 10C20.5977 10 21.9037 11.2489 21.9949 12.8237L22 13V14C22 15.0139 21.6227 15.9397 21.001 16.6447L21 21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21L2.99917 16.6401C2.47812 16.0464 2.12795 15.2943 2.02793 14.4584L2.00551 14.2052L2 14V13C2 11.4023 3.24892 10.0963 4.82373 10.0051L5 10L6 9.999V6H8ZM19 12H5C4.48716 12 4.06449 12.386 4.00673 12.8834L4 13L3.99958 13.9711L4.00342 14.1184C4.06444 15.1715 4.93934 16 6 16C7.00762 16 7.84761 15.2523 7.98033 14.2995L7.99532 14.1474L8.00042 13.9711C8.03649 12.7225 9.82713 12.6779 9.98853 13.8373L9.99958 13.9711L10.0034 14.1184C10.0644 15.1715 10.9393 16 12 16C13.0544 16 13.9182 15.1841 13.9945 14.1493L14.007 13.8668C14.131 12.7111 15.869 12.7111 15.993 13.8668L16.0055 14.1493C16.0818 15.1841 16.9456 16 18 16C19.0544 16 19.9182 15.1841 19.9945 14.1493L20 14V13C20 12.4872 19.614 12.0645 19.1166 12.0067L19 12ZM7 1C8.31948 1.87119 8.6633 3.08803 8.44889 3.88823C8.23448 4.68843 7.41197 5.1633 6.61177 4.94889C5.81157 4.73448 5.3367 3.91197 5.55111 3.11177C5.84871 2.00111 7 2.5 7 1ZM12 1C13.3195 1.87119 13.6633 3.08803 13.4489 3.88823C13.2345 4.68843 12.412 5.1633 11.6118 4.94889C10.8116 4.73448 10.3367 3.91197 10.5511 3.11177C10.8487 2.00111 12 2.5 12 1ZM17 1C18.3195 1.87119 18.6633 3.08803 18.4489 3.88823C18.2345 4.68843 17.412 5.1633 16.6118 4.94889C15.8116 4.73448 15.3367 3.91197 15.5511 3.11177C15.8487 2.00111 17 2.5 17 1Z" />
    </Svg>
  )
}

Icon.displayName = 'Cake2Fill'

/**
 * Remix Icon: Cake 2 Fill
 * @see {@link https://remixicon.com/icon/cake-2-fill Remix Icon Docs}
 */
export const Cake2Fill = memo(Icon)
