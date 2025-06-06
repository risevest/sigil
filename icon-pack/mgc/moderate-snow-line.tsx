import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M9 16a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 1 1 1 1.732L11 19l.232.134a1 1 0 0 1-1 1.732L10 20.732V21a1 1 0 1 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L7 19l-.232-.134a1 1 0 1 1 1-1.732l.232.134V17a1 1 0 0 1 1-1m5-5a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 1 1 1 1.732L16 14l.232.134a1 1 0 0 1-1 1.732L15 15.732V16a1 1 0 1 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L12 14l-.232-.134a1 1 0 1 1 1-1.732l.232.134V12a1 1 0 0 1 1-1m-2.5-9a6.502 6.502 0 0 1 6.086 4.212A6.002 6.002 0 0 1 19.6 16.799a1 1 0 0 1-1.201-1.598 4.001 4.001 0 0 0-1.75-7.148 1 1 0 0 1-.804-.727 4.5 4.5 0 0 0-8.817 1.68 1 1 0 0 1-.754 1.082 3.002 3.002 0 0 0-1.26 5.162 1 1 0 1 1-1.323 1.5A5 5 0 0 1 5 8.416 6.5 6.5 0 0 1 11.5 2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ModerateSnowLine'

/**
 * MingCute Icon: Moderate Snow Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ModerateSnowLine = memo(Icon)
