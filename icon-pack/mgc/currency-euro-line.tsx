import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m.118 2c.831 0 1.535.166 2.157.504.61.33 1.08.793 1.49 1.281a1 1 0 1 1-1.53 1.287c-.333-.395-.614-.648-.913-.81-.287-.156-.653-.262-1.204-.262-.851 0-1.708.483-2.308 1.316l-.124.184H12a1 1 0 0 1 .117 1.993L12 11.5H9.023A5.32 5.32 0 0 0 9 12l.006.253.017.247H12a1 1 0 0 1 .117 1.993L12 14.5H9.686c.601.945 1.52 1.5 2.432 1.5.55 0 .917-.106 1.204-.262.3-.162.58-.415.913-.81a1 1 0 0 1 1.53 1.287c-.41.488-.88.95-1.49 1.281-.622.338-1.326.504-2.157.504-2.085 0-3.745-1.39-4.563-3.287l-.087-.213H7a1 1 0 0 1-.117-1.993l.135-.007A6.923 6.923 0 0 1 7 12l.005-.25.013-.25H7a1 1 0 0 1-.117-1.993L7 9.5h.468C8.251 7.495 9.956 6 12.118 6"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyEuroLine'

/**
 * MingCute Icon: Currency Euro Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyEuroLine = memo(Icon)
