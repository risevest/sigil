import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="m3.713 11.163 2.678 1.804c1.006.678.334 2.247-.85 1.987l-1.064-.234a8.002 8.002 0 0 0 14.804.605 1 1 0 0 1 1.82.828c-1.987 4.37-6.896 6.793-11.687 5.509A10.003 10.003 0 0 1 2 12.08c-.007-.903.996-1.402 1.713-.918M12 6a1 1 0 0 1 .993.883L13 7v1h2a1 1 0 0 1 .117 1.993L15 10h-5a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 0 1 .164 4.995L14 16h-1v1a1 1 0 0 1-1.993.117L11 17v-1H9a1 1 0 0 1-.117-1.993L9 14h5a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 0 1-.164-4.995L10 8h1V7a1 1 0 0 1 1-1m2.59-3.657a10.002 10.002 0 0 1 7.414 9.581c.007.903-.995 1.402-1.712.918l-2.678-1.804c-1.007-.678-.335-2.247.85-1.987l1.063.234A8.002 8.002 0 0 0 4.723 8.68a1 1 0 1 1-1.82-.828C4.89 3.482 9.8 1.06 14.59 2.343"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ExchangeDollarLine'

/**
 * MingCute Icon: Exchange Dollar Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ExchangeDollarLine = memo(Icon)
