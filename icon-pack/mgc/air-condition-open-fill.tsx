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
          d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099.414.414a1 1 0 0 1-1.32 1.497l-.094-.083-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AirConditionOpenFill'

/**
 * MingCute Icon: Air Condition Open Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AirConditionOpenFill = memo(Icon)
