import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.0001 17.4723C17.0616 18.4223 18.4634 19 20 19H22V21H20C18.5428 21 17.1766 20.6104 15.9998 19.9296C14.8242 20.6101 13.4576 21 12 21C10.5428 21 9.17657 20.6104 7.99984 19.9296C6.8242 20.6101 5.45763 21 4 21H2V19H4C5.53713 19 6.93925 18.422 8.00013 17.4723C9.06163 18.4223 10.4634 19 12 19C13.5371 19 14.9393 18.422 16.0001 17.4723ZM12.5734 1.53204L12.6727 1.6115L23 11H20V17C19.2988 17 18.6258 16.8797 18.0003 16.6587L18 9.15698L12 3.70198L6 9.15598L6.00125 16.6582C5.4648 16.8479 4.89325 16.9635 4.29898 16.9927L4 17V11H1L11.3273 1.6115C11.677 1.29365 12.1956 1.26716 12.5734 1.53204Z" />
    </Svg>
  )
}

Icon.displayName = 'FloodLine'

/**
 * Remix Icon: Flood Line
 * @see {@link https://remixicon.com/icon/flood-line Remix Icon Docs}
 */
export const FloodLine = memo(Icon)
