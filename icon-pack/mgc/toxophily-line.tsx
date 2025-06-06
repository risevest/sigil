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
          d="M10.707 2.293a1 1 0 0 0-1.414 1.414l.437.438L5.446 11H5a1 1 0 1 0 0 2h.446l4.284 6.855-.437.438a1 1 0 1 0 1.414 1.414l.93-.93 1.776-1.184a5 5 0 0 0 1.97-2.579L16.72 13H18a1 1 0 0 0 1.707.707l1-1a1 1 0 0 0 0-1.414l-1-1A1 1 0 0 0 18 11h-1.28l-1.337-4.014a5 5 0 0 0-1.97-2.58l-1.776-1.183zm.595 16.304 1.001-.668a3 3 0 0 0 1.182-1.547L14.613 13H7.804zM7.804 11h6.809l-1.128-3.382a3 3 0 0 0-1.182-1.547l-1-.668L7.803 11Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ToxophilyLine'

/**
 * MingCute Icon: Toxophily Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ToxophilyLine = memo(Icon)
