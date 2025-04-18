import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.7875 21.5029L2.9975 11.7129V13.7129C2.9975 14.2429 3.2075 14.7529 3.5875 15.1229L11.3775 22.9129C12.1575 23.6929 13.4275 23.6929 14.2075 22.9129L20.4175 16.7029C21.1975 15.9229 21.1975 14.6529 20.4175 13.8729L12.7875 21.5029Z" />
      <Path d="M11.3775 17.9129C11.7675 18.3029 12.2775 18.5029 12.7875 18.5029C13.2975 18.5029 13.8075 18.3029 14.1975 17.9129L20.4075 11.7029C21.1875 10.9229 21.1875 9.65293 20.4075 8.87293L12.6175 1.08293C12.2475 0.71293 11.7375 0.50293 11.2075 0.50293H4.9975C3.8975 0.50293 2.9975 1.40293 2.9975 2.50293V8.71293C2.9975 9.24293 3.2075 9.75293 3.5875 10.1229L11.3775 17.9129ZM4.9975 2.50293H11.2075L18.9975 10.2929L12.7875 16.5029L4.9975 8.71293V2.50293Z" />
      <Path d="M7.2475 6.00293C7.93785 6.00293 8.4975 5.44329 8.4975 4.75293C8.4975 4.06257 7.93785 3.50293 7.2475 3.50293C6.55714 3.50293 5.9975 4.06257 5.9975 4.75293C5.9975 5.44329 6.55714 6.00293 7.2475 6.00293Z" />
    </Svg>
  )
}

Icon.displayName = 'Discount'

/**
 * Material Icon: Discount
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:discount Material Icon Docs}
 */
export const Discount = memo(Icon)
