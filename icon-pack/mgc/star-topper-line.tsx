import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 1a1 1 0 0 1 .864.497L14.905 5l3.964.859a1 1 0 0 1 .534 1.643l-2.702 3.024.408 4.035a1 1 0 0 1-1.398 1.016l-1.042-.459 1.305 5.656A1 1 0 0 1 15 22H9a1 1 0 0 1-.974-1.225L9.33 15.12l-1.042.46a1 1 0 0 1-1.398-1.017l.408-4.035-2.702-3.024A1 1 0 0 1 5.13 5.86L9.095 5l2.04-3.504A1 1 0 0 1 12 1m-.384 13.112L10.257 20h3.486l-1.359-5.888-.384-.17zM12 3.987 10.6 6.389a1 1 0 0 1-.652.474l-2.717.588 1.852 2.072a1 1 0 0 1 .25.768l-.28 2.765 2.543-1.121a1 1 0 0 1 .806 0l2.544 1.12-.28-2.765a1 1 0 0 1 .249-.767l1.852-2.072-2.717-.588a1 1 0 0 1-.652-.474z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'StarTopperLine'

/**
 * MingCute Icon: Star Topper Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const StarTopperLine = memo(Icon)
