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
          d="M18 4a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-.993.883L5 7v5a1 1 0 0 0 .883.993L6 13v-2a1 1 0 0 1 .883-.993L7 10h10a1 1 0 0 1 .993.883L18 11v2a1 1 0 0 0 .993-.883L19 12V7a1 1 0 0 0-.883-.993zm-2 6H8v1h8zm0-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-6 9a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m3 1a1 1 0 1 1 2 0v1.172a1 1 0 0 0 .293.707l.414.414a1 1 0 1 1-1.414 1.414l-.414-.414A3 3 0 0 1 13 18.172zm-7-1a1 1 0 0 1 1 1v.613a2 2 0 0 1-1.368 1.897l-1.316.439a1 1 0 0 1-.632-1.898L5 17.613V17a1 1 0 0 1 1-1m11 1a1 1 0 1 1 2 0v.613l1.316.438a1 1 0 0 1-.632 1.898l-1.316-.44A2 2 0 0 1 17 17.614z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AirConditionOpenLine'

/**
 * MingCute Icon: Air Condition Open Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AirConditionOpenLine = memo(Icon)
