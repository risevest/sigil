import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 21 20" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M4.56592 4.16406C4.5371 4.16406 4.51147 4.18001 4.50049 4.2041L4.49951 4.20312L3.3374 7.18164V15.7246H16.7056V7.18945L15.5308 4.18652C15.5277 4.18473 15.5245 4.18251 15.521 4.18066C15.5 4.16951 15.4817 4.16413 15.4702 4.16406H4.56592ZM15.1343 6.43457V7.70605H4.90869V6.43457H15.1343ZM17.9692 16.8965H17.8765V16.9961H2.06689V6.95117L2.07373 6.93359L3.3374 3.69922L3.34033 3.69043C3.59188 3.18767 4.05452 2.90039 4.56592 2.90039H15.4702C15.9216 2.90045 16.3336 3.11822 16.5796 3.4834L16.6743 3.64941L16.6772 3.65625L17.9624 6.93359L17.9692 6.95117V16.8965Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'FundPlan'

export const FundPlan = memo(Icon)
