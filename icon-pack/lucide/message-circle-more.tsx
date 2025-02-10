import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M5.33333 7.99999H5.34M8 7.99999H8.00666M10.6667 7.99999H10.6733M5.26666 13.3333C6.53905 13.986 8.00272 14.1628 9.39392 13.8318C10.7851 13.5009 12.0124 12.6839 12.8545 11.5281C13.6966 10.3723 14.0983 8.9538 13.9871 7.5281C13.8758 6.1024 13.2591 4.7633 12.2479 3.75212C11.2367 2.74093 9.89759 2.12416 8.47189 2.01293C7.04619 1.90171 5.62764 2.30335 4.47187 3.14549C3.31611 3.98762 2.49912 5.21486 2.16814 6.60607C1.83716 7.99727 2.01396 9.46094 2.66666 10.7333L1.33333 14.6667L5.26666 13.3333Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'MessageCircleMore'

/**
 * Lucide Icon: Message Circle More
 * @see {@link https://lucide.dev/icons/message-circle-more Lucide Icon Docs}
 */
export const MessageCircleMore = memo(Icon)
